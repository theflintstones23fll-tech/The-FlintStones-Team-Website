# The Flintstones — FLL Team Website

A full Flask website for the FLL Unearthed national champion team "The Flintstones".

## Project Structure

```
flintstones/
├── main.py                   # Flask application
├── requirements.txt
├── data/                     # Auto-created: JSON storage (users + scores)
├── templates/
│   ├── base.html             # Layout with nav + footer
│   ├── index.html            # Home page
│   ├── login.html            # Login page
│   ├── register.html         # Registration page
│   └── score_calculator.html # Score calculator (auth required)
└── static/
    ├── css/
    │   ├── main.css          # Earth-theme styles
    │   └── score.css         # Score calculator styles
    ├── js/
    │   ├── main.js           # Nav, animations
    │   └── score.js          # Score calc + API calls
    └── images/
        └── logo.jpg          # Team logo
        └── Mat.png           # FLL mat (add manually if needed)
```

## Setup & Run

```bash
pip install -r requirements.txt
python main.py
```

## Features

- 🏠 **Homepage** — Hero with geological strata layers, FLL info, innovation project, team
- 🔐 **Authentication** — Register/Login with hashed passwords, session management
- ⛏ **Score Calculator** — All 15 FLL Unearthed missions, live scoring
- 💾 **Save Scores** — Authenticated users can save and review past scores
- 📊 **Export Excel** — Download scores as .xlsx
- 📱 **Responsive** — Mobile-friendly design
