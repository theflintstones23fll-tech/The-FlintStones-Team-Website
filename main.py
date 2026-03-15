from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash
from functools import wraps
import json
import os
import hashlib
import uuid
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'flintstones-secret-key-2024-unearthed'

# Simple file-based storage (no database dependency)
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
USERS_FILE = os.path.join(DATA_DIR, 'users.json')
SCORES_FILE = os.path.join(DATA_DIR, 'scores.json')

def ensure_data_dir():
    os.makedirs(DATA_DIR, exist_ok=True)
    if not os.path.exists(USERS_FILE):
        # Create default admin user: admin / flintstones2024
        default_users = {
            "admin": {
                "id": str(uuid.uuid4()),
                "username": "admin",
                "password": hash_password("flintstones2024"),
                "role": "admin",
                "created_at": datetime.now().isoformat()
            }
        }
        with open(USERS_FILE, 'w') as f:
            json.dump(default_users, f, indent=2)
    if not os.path.exists(SCORES_FILE):
        with open(SCORES_FILE, 'w') as f:
            json.dump([], f)

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def load_users():
    ensure_data_dir()
    with open(USERS_FILE, 'r') as f:
        return json.load(f)

def save_users(users):
    with open(USERS_FILE, 'w') as f:
        json.dump(users, f, indent=2)

def load_scores():
    ensure_data_dir()
    with open(SCORES_FILE, 'r') as f:
        return json.load(f)

def save_scores(scores):
    with open(SCORES_FILE, 'w') as f:
        json.dump(scores, f, indent=2)

def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'user_id' not in session:
            flash('Please log in to access this page.', 'warning')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated

ensure_data_dir()

# ─── Routes ───────────────────────────────────────────────

@app.route('/')
def index():
    return render_template('index.html', user=session.get('username'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'user_id' in session:
        return redirect(url_for('index'))
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        password = request.form.get('password', '')
        users = load_users()
        if username in users and users[username]['password'] == hash_password(password):
            session['user_id'] = users[username]['id']
            session['username'] = username
            session['role'] = users[username]['role']
            flash(f'Welcome back, {username}!', 'success')
            if users[username]['role'] == 'sponsor':
                return redirect(url_for('sponsor_dashboard'))
            return redirect(url_for('score_calculator'))
        flash('Invalid username or password.', 'error')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if 'user_id' in session:
        return redirect(url_for('index'))
    if request.method == 'POST':
        reg_type   = request.form.get('reg_type', 'team')
        username   = request.form.get('username', '').strip()
        password   = request.form.get('password', '')
        confirm    = request.form.get('confirm_password', '')
        # Sponsor extra fields
        company    = request.form.get('company', '').strip()
        contact    = request.form.get('contact', '').strip()
        phone      = request.form.get('phone', '').strip()
        email      = request.form.get('email', '').strip()
        message    = request.form.get('message', '').strip()

        if not username or len(username) < 3:
            flash('Username must be at least 3 characters.', 'error')
        elif password != confirm:
            flash('Passwords do not match.', 'error')
        elif len(password) < 6:
            flash('Password must be at least 6 characters.', 'error')
        elif reg_type == 'sponsor' and not company:
            flash('Company name is required for sponsor registration.', 'error')
        else:
            users = load_users()
            if username in users:
                flash('Username already taken.', 'error')
            else:
                user_data = {
                    "id": str(uuid.uuid4()),
                    "username": username,
                    "password": hash_password(password),
                    "role": "sponsor" if reg_type == "sponsor" else "member",
                    "reg_type": reg_type,
                    "created_at": datetime.now().isoformat()
                }
                if reg_type == 'sponsor':
                    user_data.update({
                        "company": company,
                        "contact": contact,
                        "phone": phone,
                        "email": email,
                        "message": message
                    })
                users[username] = user_data
                save_users(users)
                if reg_type == 'sponsor':
                    flash(f'Sponsor account created! Welcome, {company}. We will be in touch soon.', 'success')
                else:
                    flash('Account created! Please log in.', 'success')
                return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/logout')
def logout():
    session.clear()
    flash('You have been logged out.', 'info')
    return redirect(url_for('index'))

@app.route('/score-calculator')
@login_required
def score_calculator():
    return render_template('score_calculator.html', user=session.get('username'))

@app.route('/api/scores/save', methods=['POST'])
@login_required
def save_score():
    data = request.get_json()
    scores = load_scores()
    entry = {
        "id": str(uuid.uuid4()),
        "user": session.get('username'),
        "total": data.get('total', 0),
        "state": data.get('state', {}),
        "inspect": data.get('inspect', 0),
        "precision": data.get('precision', 0),
        "note": data.get('note', ''),
        "timestamp": datetime.now().isoformat()
    }
    scores.insert(0, entry)
    scores = scores[:100]  # keep last 100
    save_scores(scores)
    return jsonify({"success": True, "id": entry['id']})

@app.route('/api/scores/list')
@login_required
def list_scores():
    scores = load_scores()
    # Filter by user unless admin
    if session.get('role') != 'admin':
        scores = [s for s in scores if s.get('user') == session.get('username')]
    return jsonify(scores[:20])

@app.route('/api/scores/delete/<score_id>', methods=['DELETE'])
@login_required
def delete_score(score_id):
    scores = load_scores()
    scores = [s for s in scores if not (s['id'] == score_id and (s['user'] == session['username'] or session.get('role') == 'admin'))]
    save_scores(scores)
    return jsonify({"success": True})

@app.route('/sponsor-dashboard')
@login_required
def sponsor_dashboard():
    if session.get('role') != 'sponsor':
        flash('This area is for sponsors only.', 'warning')
        return redirect(url_for('index'))
    users = load_users()
    user = users.get(session['username'], {})
    return render_template('sponsor_dashboard.html', user=user)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
