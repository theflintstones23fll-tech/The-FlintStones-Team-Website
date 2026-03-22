// ═══════════════════════════════════════════════════════
//  THE FLINTSTONES — i18n Translations
//  Languages: en (English) | tr (Turkish)
// ═══════════════════════════════════════════════════════

const TRANSLATIONS = {
  en: {
    // ── NAV ──────────────────────────────────────────────
    "nav.about":      "About",
    "nav.project":    "Project",
    "nav.sponsor":    "Sponsor Us",
    "nav.fll":        "FLL",
    "nav.team":       "Team",
    "nav.tools":      "Tools ▾",
    "nav.score":      "Score Calc",
    "nav.login":      "Login",
    "nav.logout":     "Logout",
    "nav.register":   "Register",

    // ── HERO ─────────────────────────────────────────────
    "hero.badge":       "🏆 National Champions",
    "hero.tagline":     "First Lego League · Unearthed Season",
    "hero.desc":        "Unearthing the future of archaeology — one fragment at a time",
    "hero.btn.project": "Our Project",
    "hero.btn.score":   "Score Calculator",
    "hero.btn.login":   "Login to Score",
    "hero.scroll":      "Dig deeper",

    // ── FLL SECTION ───────────────────────────────────────
    "fll.label":         "What is",
    "fll.title":         "First Lego League",
    "fll.card1.title":   "Robot Game",
    "fll.card1.text":    "Teams design, build and program autonomous LEGO robots to complete missions on a themed playing field in 2.5 minutes.",
    "fll.card2.title":   "Innovation Project",
    "fll.card2.text":    "Teams identify a real-world problem related to the season theme, research it deeply, and develop an innovative solution.",
    "fll.card3.title":   "Core Values",
    "fll.card3.text":    "Gracious Professionalism® and Coopertition® are central — teams compete and cooperate, discovering that helping others is the key to success.",
    "fll.card4.title":   "Unearthed Season",
    "fll.card4.text":    "In 2025–2026, FLL teams trace the footsteps of ancient civilizations — uncovering secrets of underground structures, archaeological processes, and humanity's earliest builders.",
    "fll.stat.countries":"Countries",
    "fll.stat.teams":    "Teams",
    "fll.stat.missions": "Missions",
    "fll.stat.min":      "Min / Match",

    // ── PROJECT ───────────────────────────────────────────
    "project.label":        "Innovation Project",
    "project.subtitle":     "Our Solution to Archaeological Fragmentation",
    "project.prob.badge":   "The Problem",
    "project.prob.title":   "Fragments Lost in Time",
    "project.prob.text":    "Archaeologists excavating ancient sites routinely recover thousands of pottery shards, stone fragments, and broken artifacts — but lack effective systematic methods to match and reassemble them. Manual matching is time-consuming, error-prone, and critically dependent on the expertise of individual specialists.",
    "project.prob.li1":     "⚠ Thousands of fragments per excavation site",
    "project.prob.li2":     "⚠ Manual matching takes months or years",
    "project.prob.li3":     "⚠ Institutional knowledge lost when experts retire",
    "project.prob.li4":     "⚠ Storage degradation damages fragments further",
    "project.sol.badge":    "Our Solution",
    "project.sol.title":    "AI-Powered Fragment Matching",
    "project.sol.text":     "FlintAI is a web platform that uses computer vision and machine learning to analyze photographs of artifact fragments, classify them by structural characteristics — texture, curvature, edge profile, material composition — and suggest fragments with high matching potential.",
    "project.f1.title":     "Photo Analysis",
    "project.f1.text":      "Upload fragment photos; AI extracts shape, texture, and edge data",
    "project.f2.title":     "Smart Classification",
    "project.f2.text":      "CNN model classifies fragments by period, material, and form",
    "project.f3.title":     "Match Suggestions",
    "project.f3.text":      "Similarity scoring ranks candidate matches from database",
    "project.f4.title":     "Digital Archive",
    "project.f4.text":      "Preserve fragments digitally for future reconstruction",
    "project.how":          "How It Works",
    "project.step1.title":  "Photograph",
    "project.step1.text":   "Archaeologist photographs fragment under standardized lighting",
    "project.step2.title":  "Upload",
    "project.step2.text":   "Image uploaded to FlintAI via web or mobile interface",
    "project.step3.title":  "Analyze",
    "project.step3.text":   "AI model extracts 128-dimensional feature vector from fragment",
    "project.step4.title":  "Match",
    "project.step4.text":   "Top candidate matches surfaced from the fragment database",

    // ── SPONSOR ───────────────────────────────────────────
    "sponsor.eyebrow":      "🌍 FIRST World Festival · Houston, USA",
    "sponsor.headline":     "Would You Like to <span class='sponsor-accent'>Be Our Sponsor?</span>",
    "sponsor.intro":        "We are <strong>Turkey's FLL National Champions</strong>, competing at the world's largest science &amp; technology tournament — the <strong>FIRST World Festival in Houston</strong>. We need your support to get there.",
    "sponsor.story1":       "The Flintstones were founded under Özel Çakabey Okulları for the 2025–2026 season. We placed 3rd at the FLL Aegean Region Tournament, earned a spot at Nationals, and then <strong>became Turkey Champions</strong> — beating 74 teams from 21 cities. Now we represent Turkey at the international finals.",
    "sponsor.story2":       "Our coach Oğuzhan Köse has guided teams to the <strong>Asia-Pacific World Championship</strong> over 16 years. Our 10-member team of 9th and 10th graders is almost entirely scholarship-funded — your sponsorship directly enables us to compete on the world stage.",
    "sponsor.caption":      "🏆 National Champions — 74 Teams, 21 Cities",
    "sponsor.benefits.title": "What Sponsors Receive",
    "sponsor.b1.title":     "Jersey Visibility",
    "sponsor.b1.text":      "Your company logo on our competition jerseys, worn on the world stage in Houston.",
    "sponsor.b2.title":     "Website & Social",
    "sponsor.b2.text":      "Featured with your logo on our website and regular posts on our social media channels.",
    "sponsor.b3.title":     "Brand Content",
    "sponsor.b3.text":      "Promotional content and thank-you posts about your company published throughout the season.",
    "sponsor.b4.title":     "National Pride",
    "sponsor.b4.text":      "Be part of Turkey's international STEM representation at the world's biggest robotics event.",
    "sponsor.cta.ready":    "Ready to dig in with us?",
    "sponsor.cta.register": "🤝 Register as Sponsor",
    "sponsor.cta.email":    "📧 Email Us",
    "sponsor.cta.pdf":      "📄 Download Sponsorship File",

    // ── TOOLS ─────────────────────────────────────────────
    "tools.label":          "Our Ecosystem",
    "tools.title":          "Our Digital Tools",
    "tools.subtitle":       "Beyond the competition floor — tools we built for the entire FLL community",
    "tools.chatbot.title":  "FLL Chatbot",
    "tools.chatbot.text":   "Ask anything about FLL Unearthed — rules, missions, scoring strategy, and more. Our AI assistant has all the answers instantly.",
    "tools.chatbot.link":   "Open Chatbot →",
    "tools.sim.title":      "FLL Simulation",
    "tools.sim.text":       "Practice mission runs in our browser-based FLL field simulator. Plan your run order and strategy before ever stepping on the mat.",
    "tools.sim.link":       "Launch Simulator →",
    "tools.archeia.text":   "An original game inspired by our innovation project — piece together ancient artifact fragments and uncover the secrets of lost civilizations.",
    "tools.archeia.link":   "Play Now →",

    // ── ABOUT ─────────────────────────────────────────────
    "about.label":          "Our Story",
    "about.title":          "About the Team",
    "about.lead":           "We are <strong>The Flintstones</strong> — a passionate FLL team named after the enduring spirit of those who built civilization from stone. Like our namesake, we believe the tools of the past can shape the future.",
    "about.p2":             "Founded at Özel Çakabey Okulları under coach Oğuzhan Köse — who has led teams to the Asia-Pacific World Championship over 16 years — we placed 3rd at regionals, then conquered the National Tournament, beating 74 teams from 21 cities across Turkey.",
    "about.p3":             "Our team embodies FLL's Core Values: we discovered together, made mistakes together, and built something we're proud of — together.",
    "about.caption":        "The Flintstones · FLL Unearthed",

    // ── TEAM ─────────────────────────────────────────────
    "team.label":           "The Crew",
    "team.title":           "Meet the Team",
    "team.role":            "Team Member",
    "team.ali":             "Passionate about robotics and programming, bringing innovative solutions to our team.",
    "team.asil":            "Dedicated to excellence in design and engineering with creative problem-solving skills.",
    "team.batuhan":         "Expert in mechanical design and construction with attention to detail.",
    "team.denizderya":      "Skilled in research and project management, keeping our team organized.",
    "team.denizturker":     "Talented in coding and algorithm development for robot automation.",
    "team.eyuldoga":        "Creative thinker with strong communication and presentation skills.",
    "team.eylul":           "Enthusiastic about STEM education and community outreach initiatives.",
    "team.okyanus":         "Analytical thinker with expertise in strategy and competition planning.",
    "team.ozan":            "Innovative problem solver with a passion for technology and teamwork.",
    "team.ozgu":            "Detail-oriented team player with strong technical and collaborative skills.",

    // ── CTA ───────────────────────────────────────────────
    "cta.title":            "Ready to calculate your score?",
    "cta.text":             "Use our FLL Unearthed Score Calculator — track missions, log runs, and export results.",
    "cta.open":             "Open Score Calculator →",
    "cta.login":            "Login",
    "cta.register":         "Create Account",

    // ── FOOTER ────────────────────────────────────────────
    "footer.sub":           "FLL Unearthed — National Champions 🏆",
    "footer.credits":       "First Lego League · Innovation Project · Robot Game",
    "footer.bottom":        "© 2024 The Flintstones · Built with stone, code & LEGO bricks",

    // ── AUTH PAGES ────────────────────────────────────────
    "login.title":          "Welcome Back",
    "login.sub":            "Log in to access the Score Calculator",
    "login.user":           "Username",
    "login.pass":           "Password",
    "login.btn":            "Login ⛏",
    "login.noacc":          "No account?",
    "login.register":       "Register here",
    "register.title":       "Create Account",
    "register.sub":         "Choose your registration type below",
    "register.tab.team":    "🪨 Team Member",
    "register.tab.sponsor": "🤝 Become a Sponsor",
    "register.hasacc":      "Already have an account?",
    "register.login":       "Login here",
    "register.btn.team":    "Create Team Account 🪨",
    "register.btn.sponsor": "Register as Sponsor 🤝",
    "register.note":        "To sponsor, contact our coach directly: theflintstones23fll@gmail.com",
    "score.title":          "⛏ FLL Unearthed Score Calculator",
    "score.loggedas":       "Logged in as",
  },

  tr: {
    // ── NAV ──────────────────────────────────────────────
    "nav.about":      "Hakkımızda",
    "nav.project":    "Proje",
    "nav.sponsor":    "Sponsor Ol",
    "nav.fll":        "FLL",
    "nav.team":       "Takım",
    "nav.tools":      "Araçlar ▾",
    "nav.score":      "Puan Hesapla",
    "nav.login":      "Giriş",
    "nav.logout":     "Çıkış",
    "nav.register":   "Kayıt Ol",

    // ── HERO ─────────────────────────────────────────────
    "hero.badge":       "🏆 Ulusal Şampiyonlar",
    "hero.tagline":     "First Lego League · Unearthed Sezonu",
    "hero.desc":        "Arkeolojinin geleceğini kazıyoruz — bir parça bir parça",
    "hero.btn.project": "Projemiz",
    "hero.btn.score":   "Puan Hesaplayıcı",
    "hero.btn.login":   "Giriş Yap",
    "hero.scroll":      "Daha derine",

    // ── FLL SECTION ───────────────────────────────────────
    "fll.label":         "Nedir?",
    "fll.title":         "First Lego League",
    "fll.card1.title":   "Robot Oyunu",
    "fll.card1.text":    "Takımlar, 2,5 dakikada tematik bir alanda görevleri tamamlamak için otonom LEGO robotları tasarlar, inşa eder ve programlar.",
    "fll.card2.title":   "İnovasyon Projesi",
    "fll.card2.text":    "Takımlar, sezon temasıyla ilgili gerçek dünya problemini belirler, derinlemesine araştırır ve yenilikçi bir çözüm geliştirir.",
    "fll.card3.title":   "Temel Değerler",
    "fll.card3.text":    "Nazik Profesyonellik® ve Coopertition® merkezde yer alır — takımlar rekabet ederek iş birliği yapar; başkalarına yardımın başarının anahtarı olduğunu keşfeder.",
    "fll.card4.title":   "Unearthed Sezonu",
    "fll.card4.text":    "2025–2026'da FLL takımları antik uygarlıkların izini sürer — yeraltı yapılarının sırlarını, arkeolojik süreçleri ve insanlığın ilk inşaatçılarını keşfeder.",
    "fll.stat.countries":"Ülke",
    "fll.stat.teams":    "Takım",
    "fll.stat.missions": "Görev",
    "fll.stat.min":      "Dak / Maç",

    // ── PROJECT ───────────────────────────────────────────
    "project.label":        "İnovasyon Projesi",
    "project.subtitle":     "Arkeolojik Parçalanmaya Çözümümüz",
    "project.prob.badge":   "Problem",
    "project.prob.title":   "Zamanda Kaybolmuş Parçalar",
    "project.prob.text":    "Antik alanlarda kazı yapan arkeologlar binlerce çömlek parçası, taş kırığı ve kırık eser toplar; ancak bunları eşleştirip yeniden bir araya getirmek için etkili ve sistematik bir yöntemden yoksundur. Manuel eşleştirme zaman alıcı, hata eğilimli ve uzman bilgisine bağımlıdır.",
    "project.prob.li1":     "⚠ Her kazı alanında binlerce parça",
    "project.prob.li2":     "⚠ Manuel eşleştirme aylar veya yıllar alır",
    "project.prob.li3":     "⚠ Uzmanlar emekli olunca kurumsal bilgi kaybolur",
    "project.prob.li4":     "⚠ Depolama bozulması parçalara zarar verir",
    "project.sol.badge":    "Çözümümüz",
    "project.sol.title":    "YZ Destekli Parça Eşleştirme",
    "project.sol.text":     "FlintAI, bilgisayarlı görü ve makine öğrenmesi kullanarak eser parçası fotoğraflarını analiz eden, yapısal özelliklerine göre sınıflandıran ve eşleşme potansiyeli yüksek parçaları öneren bir web platformudur.",
    "project.f1.title":     "Fotoğraf Analizi",
    "project.f1.text":      "Parça fotoğrafı yükleyin; YZ şekil, doku ve kenar verilerini çıkarır",
    "project.f2.title":     "Akıllı Sınıflandırma",
    "project.f2.text":      "CNN modeli parçaları dönem, malzeme ve forma göre sınıflandırır",
    "project.f3.title":     "Eşleşme Önerileri",
    "project.f3.text":      "Benzerlik puanlaması veritabanından aday eşleşmeleri sıralar",
    "project.f4.title":     "Dijital Arşiv",
    "project.f4.text":      "Parçaları gelecekteki yeniden yapılandırma için dijital ortamda saklayın",
    "project.how":          "Nasıl Çalışır?",
    "project.step1.title":  "Fotoğrafla",
    "project.step1.text":   "Arkeolog parçayı standart aydınlatmada fotoğraflar",
    "project.step2.title":  "Yükle",
    "project.step2.text":   "Görüntü FlintAI'ya web veya mobil arayüz üzerinden yüklenir",
    "project.step3.title":  "Analiz Et",
    "project.step3.text":   "YZ modeli parçadan 128 boyutlu özellik vektörü çıkarır",
    "project.step4.title":  "Eşleştir",
    "project.step4.text":   "En iyi aday eşleşmeler veritabanından sunulur",

    // ── SPONSOR ───────────────────────────────────────────
    "sponsor.eyebrow":      "🌍 FIRST World Festival · Houston, ABD",
    "sponsor.headline":     "Sponsorumuz Olmak <span class='sponsor-accent'>İster Misiniz?</span>",
    "sponsor.intro":        "<strong>Türkiye FLL Ulusal Şampiyonları</strong> olarak dünyanın en büyük bilim ve teknoloji turnuvası olan <strong>Houston'daki FIRST World Festival'e</strong> katılmak için desteğinize ihtiyacımız var.",
    "sponsor.story1":       "The Flintstones, 2025–2026 sezonu için Özel Çakabey Okulları bünyesinde kuruldu. FLL Ege Bölgesi Turnuvasında 3. olduk, ulusal turnuvaya katılma hakkı kazandık ve ardından 21 şehirden 74 takımı geride bırakarak <strong>Türkiye Şampiyonu olduk</strong>. Şimdi uluslararası finallerde Türkiye'yi temsil ediyoruz.",
    "sponsor.story2":       "Koçumuz Oğuzhan Köse, 16 yıl boyunca takımları <strong>Asya-Pasifik Dünya Şampiyonluğuna</strong> taşıdı. 9. ve 10. sınıf öğrencilerinden oluşan 10 kişilik takımımız neredeyse tamamen burslu — sponsorluğunuz bizim dünya sahnesinde yarışmamıza doğrudan katkı sağlar.",
    "sponsor.caption":      "🏆 Ulusal Şampiyonlar — 74 Takım, 21 Şehir",
    "sponsor.benefits.title": "Sponsorlar Ne Alır?",
    "sponsor.b1.title":     "Forma Görünürlüğü",
    "sponsor.b1.text":      "Şirket logonuz Houston'daki dünya sahnesinde giydiğimiz yarışma formalarında yer alır.",
    "sponsor.b2.title":     "Web & Sosyal Medya",
    "sponsor.b2.text":      "Logonuzla web sitemizde ve sosyal medya kanallarımızda düzenli paylaşımlarla öne çıkarılırsınız.",
    "sponsor.b3.title":     "Marka İçeriği",
    "sponsor.b3.text":      "Şirketiniz hakkında tanıtıcı içerikler ve teşekkür paylaşımları sezon boyunca yayınlanır.",
    "sponsor.b4.title":     "Ulusal Gurur",
    "sponsor.b4.text":      "Türkiye'nin dünyanın en büyük robotik etkinliğindeki uluslararası STEM temsilinin bir parçası olun.",
    "sponsor.cta.ready":    "Bizimle kazma vurmaya hazır mısınız?",
    "sponsor.cta.register": "🤝 Sponsor Olarak Kayıt Ol",
    "sponsor.cta.email":    "📧 Bize Yazın",
    "sponsor.cta.pdf":      "📄 Sponsorluk Dosyasını İndir",

    // ── TOOLS ─────────────────────────────────────────────
    "tools.label":          "Ekosistemimiz",
    "tools.title":          "Dijital Araçlarımız",
    "tools.subtitle":       "Yarışma alanının ötesinde — tüm FLL topluluğu için geliştirdiğimiz araçlar",
    "tools.chatbot.title":  "FLL Sohbet Botu",
    "tools.chatbot.text":   "FLL Unearthed hakkında her şeyi sorun — kurallar, görevler, puanlama stratejisi ve daha fazlası. YZ asistanımız tüm cevaplara anında sahip.",
    "tools.chatbot.link":   "Sohbet Botunu Aç →",
    "tools.sim.title":      "FLL Simülasyonu",
    "tools.sim.text":       "Tarayıcı tabanlı FLL alan simülatörümüzde görev koşuları pratik yapın. Sahaya çıkmadan önce sıranızı ve stratejinizi planlayın.",
    "tools.sim.link":       "Simülatörü Başlat →",
    "tools.archeia.text":   "İnovasyon projemizden ilham alan özgün bir oyun — antik eser parçalarını bir araya getirin ve kayıp uygarlıkların sırlarını keşfedin.",
    "tools.archeia.link":   "Oyna →",

    // ── ABOUT ─────────────────────────────────────────────
    "about.label":          "Hikayemiz",
    "about.title":          "Takım Hakkında",
    "about.lead":           "Biz <strong>The Flintstones</strong>'uz — taştan uygarlık inşa edenlerin kalıcı ruhundan adını almış tutkulu bir FLL takımı. Tıpkı adaşlarımız gibi, geçmişin araçlarının geleceği şekillendirebileceğine inanıyoruz.",
    "about.p2":             "Özel Çakabey Okulları bünyesinde, 16 yıl boyunca takımları Asya-Pasifik Dünya Şampiyonluğuna taşımış koç Oğuzhan Köse liderliğinde kurulduk. Bölge turnuvasında 3. olduk, ardından 21 şehirden 74 takımı geçerek Ulusal Turnuvayı kazandık.",
    "about.p3":             "Takımımız FLL'nin Temel Değerlerini somutlaştırıyor: birlikte keşfettik, birlikte hata yaptık ve birlikte gurur duyduğumuz bir şey inşa ettik.",
    "about.caption":        "The Flintstones · FLL Unearthed",

    // ── TEAM ─────────────────────────────────────────────
    "team.label":           "Ekip",
    "team.title":           "Takımla Tanış",
    "team.role":            "Takım Üyesi",
    "team.ali":             "Robotik ve programlamaya tutku duyan, takımımıza yenilikçi çözümler getiren üye.",
    "team.asil":            "Yaratıcı problem çözme becerileriyle tasarım ve mühendislikte mükemmeliyete adanmış üye.",
    "team.batuhan":         "Ayrıntılara önem veren mekanik tasarım ve yapım uzmanı.",
    "team.denizderya":      "Takımımızı düzenli tutan araştırma ve proje yönetimi konusunda yetenekli üye.",
    "team.denizturker":     "Robot otomasyonu için kodlama ve algoritma geliştirmede yetenekli üye.",
    "team.eyuldoga":        "Güçlü iletişim ve sunum becerileriyle yaratıcı düşünür.",
    "team.eylul":           "STEM eğitimi ve topluluk yararına girişimlere meraklı üye.",
    "team.okyanus":         "Strateji ve yarışma planlaması konusunda uzman analitik düşünür.",
    "team.ozan":            "Teknoloji ve takım çalışmasına tutkuyla bağlı yenilikçi problem çözücü.",
    "team.ozgu":            "Güçlü teknik ve iş birliği becerileriyle detay odaklı takım oyuncusu.",

    // ── CTA ───────────────────────────────────────────────
    "cta.title":            "Puanınızı hesaplamaya hazır mısınız?",
    "cta.text":             "FLL Unearthed Puan Hesaplayıcımızı kullanın — görevleri takip edin, koşuları kaydedin ve sonuçları dışa aktarın.",
    "cta.open":             "Puan Hesaplayıcıyı Aç →",
    "cta.login":            "Giriş Yap",
    "cta.register":         "Hesap Oluştur",

    // ── FOOTER ────────────────────────────────────────────
    "footer.sub":           "FLL Unearthed — Ulusal Şampiyonlar 🏆",
    "footer.credits":       "First Lego League · İnovasyon Projesi · Robot Oyunu",
    "footer.bottom":        "© 2024 The Flintstones · Taş, kod ve LEGO tuğlalarıyla inşa edildi",

    // ── AUTH PAGES ────────────────────────────────────────
    "login.title":          "Tekrar Hoş Geldiniz",
    "login.sub":            "Puan Hesaplayıcıya erişmek için giriş yapın",
    "login.user":           "Kullanıcı Adı",
    "login.pass":           "Şifre",
    "login.btn":            "Giriş Yap ⛏",
    "login.noacc":          "Hesabınız yok mu?",
    "login.register":       "Kayıt olun",
    "register.title":       "Hesap Oluştur",
    "register.sub":         "Aşağıdan kayıt türünü seçin",
    "register.tab.team":    "🪨 Takım Üyesi",
    "register.tab.sponsor": "🤝 Sponsor Ol",
    "register.hasacc":      "Zaten hesabınız var mı?",
    "register.login":       "Giriş yapın",
    "register.btn.team":    "Takım Hesabı Oluştur 🪨",
    "register.btn.sponsor": "Sponsor Olarak Kayıt Ol 🤝",
    "register.note":        "Sponsor olmak için koçumuzla doğrudan iletişime geçin: theflintstones23fll@gmail.com",
    "score.title":          "⛏ FLL Unearthed Puan Hesaplayıcı",
    "score.loggedas":       "Giriş yapan",
  }
};

// ─── Engine ────────────────────────────────────────────
const I18N = {
  current: localStorage.getItem('lang') || 'en',

  t(key) {
    return TRANSLATIONS[this.current][key] || TRANSLATIONS['en'][key] || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });

    // Update html lang attribute
    document.documentElement.lang = this.current;

    // Sync both select dropdowns
    document.querySelectorAll('.lang-select').forEach(sel => {
      sel.value = this.current;
    });

    // Store preference
    localStorage.setItem('lang', this.current);
  },

  setLang(lang) {
    this.current = lang;
    this.apply();
  },

  // kept for backward compatibility
  toggle() {
    this.setLang(this.current === 'en' ? 'tr' : 'en');
  },

  init() {
    this.apply();
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
