// Translation Object
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_badge: "Welcome to my portfolio",
        hero_hi: "Hi, I'm",
        hero_title: "Frontend Developer",
        hero_description: "I create beautiful, responsive websites with clean code and attention to detail. Passionate about turning ideas into interactive experiences.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Get in Touch",
        about_title: "About Me",
        about_intro: "I'm a frontend developer with 4 months of hands-on experience in building modern web applications.",
        about_p1: "My journey into web development started with curiosity and has grown into a passion for creating user-friendly interfaces. I enjoy learning new technologies and implementing best practices in my code.",
        about_p2: "When I'm not coding, you'll find me reading manga, exploring design trends, or working on side projects to expand my skillset.",
        stat_experience: "Months Experience",
        stat_projects: "Projects Completed",
        stat_technologies: "Technologies",
        skills_title: "My Skills",
        skills_description: "Technologies I work with",
        skill_html_desc: "Semantic markup and accessibility best practices",
        skill_css_desc: "Responsive design, Flexbox, Grid, and animations",
        skill_js_desc: "ES6+, DOM manipulation, and interactive features",
        skill_responsive_title: "Responsive Design",
        skill_responsive_desc: "Mobile-first approach and cross-browser compatibility",
        skill_git_desc: "Version control and collaborative development",
        skill_learning_title: "Learning",
        skill_learning_desc: "Continuously expanding knowledge in React and TypeScript",
        projects_title: "My Projects",
        projects_description: "Recent work and practice projects",
        project1_desc: "A responsive landing page for an online store with product showcase and cart functionality.",
        project2_desc: "Interactive weather app that fetches real-time data from an API and displays forecasts.",
        project3_desc: "Simple to-do list application with local storage for task persistence.",
        project4_desc: "Personal portfolio showcasing projects and skills with smooth animations.",
        project_demo: "Live Demo",
        contact_title: "Get In Touch",
        contact_description: "Let's create something amazing together",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send Message",
        contact_location: "Tashkent, Uzbekistan",
        footer_text: "© 2024 Frontend Portfolio. All rights reserved.",
        form_success: "✅ Thank you! Your message has been received. I'll get back to you soon!",
        form_error: "❌ Please fill in all fields."
    },
    ru: {
        nav_home: "Главная",
        nav_about: "Обо мне",
        nav_skills: "Навыки",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        hero_badge: "Добро пожаловать в моё портфолио",
        hero_hi: "Привет, я",
        hero_title: "Фронтенд-разработчик",
        hero_description: "Я создаю красивые, адаптивные веб-сайты с чистым кодом и вниманием к деталям. Увлечен превращением идей в интерактивные решения.",
        hero_btn_projects: "Посмотреть проекты",
        hero_btn_contact: "Связаться",
        about_title: "Обо мне",
        about_intro: "Я фронтенд-разработчик с 4-месячным опытом создания современных веб-приложений.",
        about_p1: "Мой путь в веб-разработку начался с любопытства и превратился в страсть к созданию удобных интерфейсов. Мне нравится изучать новые технологии и применять лучшие практики в коде.",
        about_p2: "Когда я не программирую, вы найдете меня за чтением манги, изучением дизайн-трендов или работой над побочными проектами для расширения навыков.",
        stat_experience: "Месяцев опыта",
        stat_projects: "Завершенных проектов",
        stat_technologies: "Технологии",
        skills_title: "Мои навыки",
        skills_description: "Технологии, с которыми я работаю",
        skill_html_desc: "Семантическая разметка и лучшие практики доступности",
        skill_css_desc: "Адаптивный дизайн, Flexbox, Grid и анимации",
        skill_js_desc: "ES6+, манипуляция DOM и интерактивные функции",
        skill_responsive_title: "Адаптивный дизайн",
        skill_responsive_desc: "Mobile-first подход и кроссбраузерная совместимость",
        skill_git_desc: "Контроль версий и совместная разработка",
        skill_learning_title: "Обучение",
        skill_learning_desc: "Постоянно расширяю знания в React и TypeScript",
        projects_title: "Мои проекты",
        projects_description: "Недавние работы и практические проекты",
        project1_desc: "Адаптивная целевая страница для интернет-магазина с витриной товаров и функцией корзины.",
        project2_desc: "Интерактивное погодное приложение, которое получает данные в реальном времени через API и отображает прогнозы.",
        project3_desc: "Простое приложение для списка задач с локальным хранилищем для сохранения данных.",
        project4_desc: "Личное портфолио, демонстрирующее проекты и навыки с плавными анимациями.",
        project_demo: "Демо",
        contact_title: "Свяжитесь со мной",
        contact_description: "Давайте создадим что-то удивительное вместе",
        form_name: "Имя",
        form_email: "Электронная почта",
        form_message: "Сообщение",
        form_submit: "Отправить сообщение",
        contact_location: "Ташкент, Узбекистан",
        footer_text: "© 2024 Фронтенд портфолио. Все права защищены.",
        form_success: "✅ Спасибо! Ваше сообщение получено. Я свяжусь с вами в ближайшее время!",
        form_error: "❌ Пожалуйста, заполните все поля."
    },
    uz: {
        nav_home: "Bosh sahifa",
        nav_about: "Men haqimda",
        nav_skills: "Ko'nikmalar",
        nav_projects: "Loyihalar",
        nav_contact: "Aloqa",
        hero_badge: "Mening portfoliomga xush kelibsiz",
        hero_hi: "Salom, men",
        hero_title: "Frontend dasturchi",
        hero_description: "Men chiroyli, moslashuvchan veb-saytlarni toza kod va tafsilotlarga e'tibor bilan yarataman. G'oyalarni interaktiv tajribalarga aylantirish menga zavq bag'ishlaydi.",
        hero_btn_projects: "Loyihalarni ko'rish",
        hero_btn_contact: "Bog'lanish",
        about_title: "Men haqimda",
        about_intro: "Men zamonaviy veb-ilovalar yaratishda 4 oylik amaliy tajribaga ega frontend dasturchiman.",
        about_p1: "Mening veb-dasturlashga yo'lim qiziquvchanlikdan boshlandi va foydalanuvchilarga qulay interfeyslarni yaratishga bo'lgan ishtiyoqqa aylandi. Men yangi texnologiyalarni o'rganishni va kodda eng yaxshi amaliyotlarni qo'llashni yoqtiraman.",
        about_p2: "Dasturlash bilan band bo'lmaganmda, meni manga o'qiyotgan, dizayn trendlarini o'rganayotgan yoki ko'nikmalarimni kengaytirish uchun qo'shimcha loyihalar ustida ishlayotgan holda topasiz.",
        stat_experience: "Oylik tajriba",
        stat_projects: "Yakunlangan loyihalar",
        stat_technologies: "Texnologiyalar",
        skills_title: "Mening ko'nikmalarim",
        skills_description: "Men ishlatiladigan texnologiyalar",
        skill_html_desc: "Semantik belgilash va kirish imkoniyatlari bo'yicha eng yaxshi amaliyotlar",
        skill_css_desc: "Moslashuvchan dizayn, Flexbox, Grid va animatsiyalar",
        skill_js_desc: "ES6+, DOM manipulyatsiyasi va interaktiv xususiyatlar",
        skill_responsive_title: "Moslashuvchan dizayn",
        skill_responsive_desc: "Mobile-first yondashuv va brauzerlar o'rtasida muvofiqlik",
        skill_git_desc: "Versiyalarni boshqarish va hamkorlikda ishlab chiqish",
        skill_learning_title: "O'rganish",
        skill_learning_desc: "React va TypeScript bo'yicha bilimlarni doimiy ravishda kengaytirish",
        projects_title: "Mening loyihalarim",
        projects_description: "So'nggi ishlar va amaliy loyihalar",
        project1_desc: "Onlayn do'kon uchun mahsulot ko'rgazmasi va savatcha funksiyasi bilan moslashuvchan landing page.",
        project2_desc: "API orqali real vaqtda ma'lumotlarni oladigan va prognozlarni ko'rsatadigan interaktiv ob-havo ilovasi.",
        project3_desc: "Ma'lumotlarni saqlash uchun lokal xotiraga ega oddiy vazifalar ro'yxati ilovasi.",
        project4_desc: "Silliq animatsiyalar bilan loyihalar va ko'nikmalarni namoyish etuvchi shaxsiy portfolio.",
        project_demo: "Jonli demo",
        contact_title: "Bog'laning",
        contact_description: "Keling, birgalikda ajoyib narsa yaratalim",
        form_name: "Ism",
        form_email: "Elektron pochta",
        form_message: "Xabar",
        form_submit: "Xabar yuborish",
        contact_location: "Toshkent, O'zbekiston",
        footer_text: "© 2024 Frontend portfolio. Barcha huquqlar himoyalangan.",
        form_success: "✅ Rahmat! Xabaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz!",
        form_error: "❌ Iltimos, barcha maydonlarni to'ldiring."
    }
};

// Current Language
let currentLang = 'en';

// Language Switcher
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
        
        // Update active state
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Save preference
        sessionStorage.setItem('language', lang);
    });
});

function changeLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    sessionStorage.setItem('theme', newTheme);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Section Reveal Animation on Scroll
const revealSections = document.querySelectorAll('.section-reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        }
    });
};

// Initial check on page load
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Skill Progress Bar Animation
const skillProgressBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    const triggerBottom = window.innerHeight * 0.85;

    skillProgressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;

        if (barTop < triggerBottom && bar.style.width === '') {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateSkillBars);

// Counter Animation for Stats
const counters = document.querySelectorAll('.counter');
let counterAnimated = false;

const animateCounters = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    counters.forEach(counter => {
        const counterTop = counter.getBoundingClientRect().top;
        
        if (counterTop < triggerBottom && !counterAnimated) {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
            counterAnimated = true;
        }
    });
};

window.addEventListener('scroll', animateCounters);

// Contact Form Submission with Success Message
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        // Create success message element
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message show';
        successMsg.textContent = translations[currentLang].form_success;
        
        // Insert before form
        contactForm.parentNode.insertBefore(successMsg, contactForm);
        
        // Reset form
        contactForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
            setTimeout(() => successMsg.remove(), 500);
        }, 5000);
        
        // Scroll to success message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        alert(translations[currentLang].form_error);
    }
});

// Scroll to Top functionality
const createScrollTopButton = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.classList.add('scroll-top-btn');

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize scroll to top button
createScrollTopButton();

// Typing Effect for Hero Title
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let index = 0;

    const typeWriter = () => {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroSection = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroSection && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Animate elements on hover
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Load saved preferences on page load
window.addEventListener('DOMContentLoaded', () => {
    // Load theme preference (default to dark)
    const savedTheme = sessionStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    // Load language preference
    const savedLang = sessionStorage.getItem('language');
    if (savedLang) {
        changeLanguage(savedLang);
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            }
        });
    }

    // Trigger counter animation on about section
    setTimeout(animateCounters, 500);

    console.log('🎨 Portfolio website loaded successfully!');
    console.log('🌐 Language: ' + currentLang);
    console.log('🌙 Theme: ' + (html.getAttribute('data-theme') || 'dark'));
});