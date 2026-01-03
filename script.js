// Translations
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_subtitle: "Front-End Developer • WordPress • Automation",
        hero_desc: "Transforming business needs into scalable digital systems. I specialize in high-performance websites, workflow automation, and custom internal tools.",
        btn_download_cv: "Download CV",
        btn_contact_me: "Contact Me",
        about_title: "About Me",
        about_text: "I am not just a developer; I am a System Manager and Automation Specialist with a deep understanding of business operations. Currently managing digital systems for a Tourism Company, I bridge the gap between technical execution and operational efficiency. My expertise lies in building custom WordPress solutions, automating complex workflows using n8n and APIs, and developing pure Front-End interfaces that drive results.",
        experience_title: "Experience & Current Role",
        exp_role: "System Manager",
        exp_company: "Tourism Company",
        exp_item_1: "Managing and optimizing booking systems for high-volume travel operations.",
        exp_item_2: "Automating internal workflows to reduce manual data entry and errors.",
        exp_item_3: "Integrating websites with CRM tools and third-party booking APIs.",
        exp_item_4: "Designing internal tools to improve team efficiency and operational speed.",
        value_title: "What I Actually Do",
        value_1_title: "Solving Business Problems",
        value_1_desc: "I don't just write code. I analyze operational bottlenecks and build digital solutions to fix them.",
        value_2_title: "Automating Processes",
        value_2_desc: "Replacing manual Excel sheets and repetitive tasks with smart, automated workflows.",
        value_3_title: "Building Scalable Systems",
        value_3_desc: "Developing robust web applications and sites that grow with your business needs.",
        auto_title: "Automation & Systems Architecture",
        auto_desc: "Leveraging tools like n8n and custom APIs to connect disparate systems. From clinic booking engines to travel agency CRM integrations, I ensure data flows seamlessly.",
        projects_title: "Projects",
        filter_all: "All",
        filter_wp: "WordPress",
        filter_fe: "Front-End",
        view_live: "View Live",
        view_details: "Details",
        proj_oa_desc: "Marketing Agency Website",
        proj_fantasy_desc: "Digital Marketing Platform",
        proj_pearl_desc: "Medical Clinic Website",
        proj_soha_desc: "Skin Care Clinic",
        proj_bakkah_desc: "Travel Agency Landing Page",
        proj_sham_desc: "Restaurant Website",
        proj_estore_desc: "E-Commerce Template",
        proj_weather_desc: "Live Weather Application",
        proj_todo_desc: "Task Management App",
        proj_stopwatch_desc: "Time Tracking Tool",
        results_title: "Results & Impact",
        res_manual: "Manual Work",
        res_booking: "Booking Efficiency",
        res_ops: "Operations",
        res_reliability: "System Reliability",
        tools_title: "Tools & Technologies",
        process_title: "How I Work",
        step_1: "Understand Business Needs",
        step_2: "System Planning",
        step_3: "Development",
        step_4: "Testing & Optimization",
        step_5: "Launch & Support",
        contact_title: "Contact Me"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_experience: "الخبرات",
        nav_projects: "المشاريع",
        nav_contact: "تواصل معي",
        hero_greeting: "مرحباً، أنا",
        hero_subtitle: "مطور واجهات • ووردبريس • أتمتة نظم",
        hero_desc: "أحول احتياجات العمل إلى أنظمة رقمية قابلة للتطوير. أتخصص في المواقع عالية الأداء، أتمتة سير العمل، والأدوات الداخلية المخصصة.",
        btn_download_cv: "تحميل السيرة الذاتية",
        btn_contact_me: "تواصل معي",
        about_title: "من أنا",
        about_text: "لست مجرد مطور؛ أنا مدير نظم ومتخصص في الأتمتة ولدي فهم عميق لعمليات الشركات. أعمل حالياً كمدير للنظم في شركة سياحة، حيث أربط بين التنفيذ التقني والكفاءة التشغيلية. خبرتي تكمن في بناء حلول ووردبريس مخصصة، أتمتة سير العمل المعقد باستخدام n8n و APIs، وتطوير واجهات أمامية نقية تحقق النتائج.",
        experience_title: "الخبرة والمنصب الحالي",
        exp_role: "مدير نظم",
        exp_company: "شركة سياحة",
        exp_item_1: "إدارة وتحسين أنظمة الحجز لعمليات السفر ذات الحجم الكبير.",
        exp_item_2: "أتمتة سير العمل الداخلي لتقليل إدخال البيانات يدوياً وتقليل الأخطاء.",
        exp_item_3: "ربط المواقع الإلكترونية بأدوات إدارة علاقات العملاء (CRM) وواجهات برمجة تطبيقات الحجز.",
        exp_item_4: "تصميم أدوات داخلية لتحسين كفاءة الفريق وسرعة العمليات.",
        value_title: "ماذا أقدم فعلياً",
        value_1_title: "حل مشاكل الأعمال",
        value_1_desc: "لا أكتب كوداً فقط. أقوم بتحليل العقبات التشغيلية وبناء حلول رقمية لإصلاحها.",
        value_2_title: "أتمتة العمليات",
        value_2_desc: "استبدال جداول إكسل اليدوية والمهام المتكررة بسير عمل ذكي وآلي.",
        value_3_title: "بناء أنظمة قابلة للتطوير",
        value_3_desc: "تطوير تطبيقات ويب ومواقع قوية تنمو مع احتياجات عملك.",
        auto_title: "الأتمتة وهندسة النظم",
        auto_desc: "استخدام أدوات مثل n8n و APIs المخصصة لربط الأنظمة المنفصلة. من محركات حجز العيادات إلى تكاملات CRM لشركات السياحة، أضمن تدفق البيانات بسلاسة.",
        projects_title: "المشاريع",
        filter_all: "الكل",
        filter_wp: "ووردبريس",
        filter_fe: "واجهات أمامية",
        view_live: "عاين المشروع",
        view_details: "تفاصيل",
        proj_oa_desc: "موقع وكالة تسويق",
        proj_fantasy_desc: "منصة تسويق رقمي",
        proj_pearl_desc: "موقع عيادة طبية",
        proj_soha_desc: "عيادة للعناية بالبشرة",
        proj_bakkah_desc: "صفحة هبوط لوكالة سفر",
        proj_sham_desc: "موقع مطعم",
        proj_estore_desc: "قالب متجر إلكتروني",
        proj_weather_desc: "تطبيق طقس مباشر",
        proj_todo_desc: "تطبيق إدارة مهام",
        proj_stopwatch_desc: "أداة تتبع الوقت",
        results_title: "النتائج والأثر",
        res_manual: "عمل يدوي أقل",
        res_booking: "كفاءة حجز أعلى",
        res_ops: "عمليات أسرع",
        res_reliability: "موثوقية نظام أعلى",
        tools_title: "الأدوات والتقنيات",
        process_title: "كيف أعمل",
        step_1: "فهم احتياجات العمل",
        step_2: "تخطيط النظام",
        step_3: "التطوير",
        step_4: "الاختبار والتحسين",
        step_5: "الإطلاق والدعم",
        contact_title: "تواصل معي"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const langToggleNav = document.getElementById('lang-toggle-nav');
    const langToggleFloat = document.getElementById('lang-toggle-float');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const typewriterText = document.getElementById('typewriter-text');
    
    // Modal Elements
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-modal');
    const detailsBtns = document.querySelectorAll('.details-btn');

    // State
    let currentLang = localStorage.getItem('lang') || 'en';
    let currentTheme = localStorage.getItem('theme') || 'light';
    let typewriterInterval;

    // Initialization
    setTheme(currentTheme);
    setLanguage(currentLang);
    initAnimations();

    // Event Listeners
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    langToggleNav.addEventListener('click', toggleLanguage);
    langToggleFloat.addEventListener('click', toggleLanguage);

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = '';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            if (window.innerWidth <= 768) {
                navLinks.style.display = '';
            }
        });
    });

    // Project Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    setTimeout(() => card.classList.add('visible'), 50);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            });
        });
    });

    // Modal Logic
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.project-card');
            const img = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const desc = card.querySelector('p').textContent; // This will get the translated text
            const tech = card.querySelector('.tech').textContent;
            const link = card.querySelector('.view-btn').href;

            modalImg.src = img;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalTech.textContent = tech;
            modalLink.href = link;

            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('show'), 10);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    });

    // Functions
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(currentLang);
    }

    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', lang);

        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update Buttons
        const btnText = lang === 'en' ? 'AR' : 'EN';
        langToggleNav.textContent = btnText;
        langToggleFloat.textContent = btnText;

        // Restart Typewriter
        startTypewriter(lang);
    }

    function startTypewriter(lang) {
        if (typewriterInterval) clearInterval(typewriterInterval);
        
        const text = lang === 'en' ? 'Ahmed Sami' : 'أحمد سامي';
        let i = 0;
        
        typewriterText.textContent = '';
        
        typewriterInterval = setInterval(() => {
            if (i < text.length) {
                typewriterText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typewriterInterval);
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                cursor.innerHTML = '&nbsp;';
                typewriterText.appendChild(cursor);
            }
        }, 100);
    }

    function initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.section-title, .card, .project-card, .stat-card, .step, .about-content, .hero-text, .hero-image');
        
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
});
