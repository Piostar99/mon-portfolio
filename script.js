document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. TRANSLATION SYSTEM (FR / EN)
    // ==========================================================================
    let currentLanguage = "fr";

    const translations = {
        fr: {
            "nav.home": "Accueil",
            "nav.about": "À propos",
            "nav.projects": "Projets",
            "nav.skills": "Compétences",
            "nav.journey": "Parcours",
            "nav.contact": "Contact",

            "hero.badge": "DevSecOps Engineer",
            "hero.subtitle": "DevSecOps | Full Stack | Infrastructure",
            "hero.desc": "Je conçois, déploie et sécurise des solutions robustes pour un <span class=\"desc-highlight\">numérique plus sûr et plus performant</span>.",
            "hero.btn_journey": "Découvrir mon parcours",
            "hero.btn_contact": "Me contacter",

            "stat.years": "Années d'expérience",
            "stat.projects": "Projets réalisés",
            "stat.degree": "Licence",
            "stat.honors": "Mention Très bien",
            "stat.country": "Bénin",
            "stat.remote": "Présentiel & Remote",

            "about.title": "À propos de moi",
            "about.desc": "Spécialiste DevSecOps & Développeur Full Stack, passionné par la sécurité, l'automatisation et les infrastructures modernes. Je mets mon expertise DevSecOps, Django, SOAR et IA (RAG) au service d'innovations fiables, sécurisées et évolutives.",
            "about.item1": "DevSecOps & SRE",
            "about.item2": "Développement Full Stack",
            "about.item3": "Cloud & Infrastructure",
            "about.more_btn": "En savoir plus",
            "about.cv_btn": "Télécharger CV (PDF)",

            "proj.title": "Mes projets",
            "proj.subtitle": "Une sélection de projets qui reflètent mon expertise.",
            "proj.filter_all": "Tous",
            "proj.filter_secops": "DevSecOps",
            "proj.filter_web": "Web",
            "proj.filter_ai": "IA / Data",
            "proj.details": "Voir le détail",

            "proj.p1_title": "Plateforme SOAR / GRC",
            "proj.p1_badge": "En cours",
            "proj.p1_desc": "Solution confidentielle en cours de développement : GRC, CMDB, gestion des vulnérabilités et des incidents, alimentée par de nombreux connecteurs (dont Wazuh, TheHive, OpenVAS) et un assistant IA souverain.",
            "proj.p2_title": "Moteur de Contrôle des Habilitations",
            "proj.p2_desc": "Solution centralisée d'attribution, d'audit automatisé et de révocation des droits d'accès aux applications d'entreprise.",
            "proj.p3_title": "Simulateur d'Entretiens IA",
            "proj.p3_desc": "Plateforme SaaS de simulation d'entretiens personnalisés avec matching CV-offre et génération de rapports NLP.",
            "proj.p4_title": "COVERSE IA",
            "proj.p4_desc": "Agent intelligent souverain orchestrant automatiquement les interactions clients via des modèles LLM locaux (Ollama).",
            "proj.p5_title": "NicePay",
            "proj.p5_desc": "Intégrateur de paiement unifié permettant aux applications de centraliser l'encaissement, la vérification des webhooks et le suivi sécurisé des transactions.",
            "proj.p6_title": "Traducteur PO IA",
            "proj.p6_desc": "Outil CLI & API de traduction automatisée des fichiers gettext (.po) via PyTorch CPU/GPU et intégration CI/CD.",
            "proj.p7_title": "Naxo IA",
            "proj.p7_desc": "Agent conversationnel intelligent de prise de commande et intégration POS temps réel dédié à la restauration.",
            "proj.p8_title": "Optimus Trading",
            "proj.p8_desc": "Solution multi-utilisateurs de trading algorithmique, backtesting historique et exécution d'ordres temps réel isolée.",
            "proj.p9_title": "DataSpeak",
            "proj.p9_desc": "Solution d'IA souveraine permettant aux entreprises d'interroger leurs fichiers en langage naturel via des modèles locaux, en toute confidentialité.",

            "skills.title": "Mes compétences",
            "skills.subtitle": "Un ensemble de compétences techniques et professionnelles.",
            "skills.c1_title": "DevSecOps & Cloud",
            "skills.c1_i1": "CI/CD (GitHub Actions, GitLab CI)",
            "skills.c1_i2": "Docker (conteneurs durcis)",
            "skills.c1_i3": "AWS / Cloud & Infrastructure",
            "skills.c1_i4": "Sécurité (Wazuh, OpenVAS, TheHive)",
            "skills.c1_i5": "SAST / DAST & OWASP Top 10",
            "skills.c2_title": "Développement",
            "skills.c2_i1": "Django / Python (DRF)",
            "skills.c2_i6": "HTML / CSS & JavaScript",
            "skills.c2_i2": "React / Next.js / TypeScript",
            "skills.c2_i3": "APIs REST & WebSockets",
            "skills.c2_i4": "PostgreSQL, Redis & Celery",
            "skills.c2_i5": "Linux (Debian / Ubuntu)",
            "skills.c3_title": "IA, Outils & Méthodes",
            "skills.c3_i1": "Architectures RAG & Ollama (LLMs)",
            "skills.c3_i2": "GRC, SOAR & Moteurs RBAC",
            "skills.c3_i3": "Monitoring & Logs (SIEM / ELK)",
            "skills.c3_i4": "Méthodes Agile / Scrum & TDD",
            "skills.c3_i5": "Gestion de projet (Jira, Trello, Redmine)",

            "exp.title": "Parcours professionnel & Formations",
            "exp.subtitle": "Expériences en ingénierie logicielle, cybersécurité et architecture DevSecOps.",
            "exp.toggle_details": "Missions & Tâches",
            "exp.collapse": "Réduire",
            "exp.mewan_date": "Avril 2024 – Présent",
            "exp.mewan_role": "Ingénieur d'exploitation informatique",
            "exp.mewan_b0": "<strong>Exploitation &amp; Virtualisation :</strong> Mise en production, maintenance et support des applications sur environnements virtualisés (VMware, Hyper-V), gestion des sauvegardes et supervision des performances.",
            "exp.mewan_b1": "<strong>Pipelines CI/CD sécurisés (Shift-Left) :</strong> Automatisation des contrôles SAST (SonarQube), DAST (OWASP ZAP), audit des dépendances (SCA) et gestion des secrets dans GitHub Actions / GitLab CI.",
            "exp.mewan_b2": "<strong>Sécurisation Conteneurs &amp; Infrastructure :</strong> Conteneurisation Docker (images durcies non-root), durcissement Linux, segmentation réseau, TLS et contrôle d'accès moindre privilège.",
            "exp.mewan_b3": "<strong>Security by Design applicatif :</strong> Revue d'architecture et sécurisation des APIs &amp; applications (Django, React, PostgreSQL) contre les risques OWASP Top 10.",
            "exp.mewan_b4": "<strong>Intégration SIEM &amp; SOAR :</strong> Intégration et automatisation de Wazuh, OpenVAS et TheHive dans une plateforme GRC (connecteurs, normalisation des alertes et des vulnérabilités, workflows de remédiation).",
            "exp.mewan_b5": "<strong>Gestion des vulnérabilités &amp; Conformité :</strong> Scans continus d'images Docker, dépendances (SBOM/SCA) et environnements, priorisation des CVE et suivi des correctifs.",
            "exp.mewan_b6": "<strong>Culture DevSecOps :</strong> Accompagnement des développeurs via revues de code orientées sécurité, quality gates et adoption des bonnes pratiques de codage sécurisé.",

            "exp.padme_date": "Juin 2023 – Septembre 2023",
            "exp.padme_role": "Stagiaire professionnel en sécurité informatique",
            "exp.padme_b1": "Révision et amélioration de la Politique de Sécurité des Systèmes d'Information (PSSI).",
            "exp.padme_b2": "Contribution à l'élaboration de plans de contrôle et de continuité informatique (PCA/PRA).",
            "exp.padme_b3": "Déploiement de solutions libres de gestion de parc informatique et d'assistance technique.",
            "exp.padme_b4": "Mise en place d'une plateforme d'apprentissage numérique dédiée à la cybersécurité interne.",

            "exp.jcit_date": "Août 2021 – Mai 2023",
            "exp.jcit_role": "Développeur Full Stack",
            "exp.jcit_b1": "Développement d'une plateforme SaaS RH (React, Django REST, PostgreSQL, Redis).",
            "exp.jcit_b2": "Implémentation d'authentification robuste (OAuth2, JWT, 2FA) et chiffrement AES-256.",
            "exp.jcit_b3": "Intégration de passerelles de paiement conformes PCI-DSS (Stripe, CinetPay, MTN MoMo).",
            "exp.jcit_b4": "Déploiement et monitoring sur serveurs AWS EC2 via pipelines CI/CD (GitHub Actions).",

            "exp.maouco_date": "Juin 2020 – Mai 2021",
            "exp.maouco_role": "Stagiaire en développement d'applications",
            "exp.maouco_b1": "Analyse des processus métiers et optimisation logicielle des systèmes de gestion.",
            "exp.maouco_b2": "Conception de fonctionnalités complexes et interfaces ergonomiques centrées UX.",
            "exp.maouco_b3": "Participation complète au cycle en V (spécifications, tests unitaires et d'intégration).",

            "edu.heading": "Formation Académique",
            "edu.degree": "Licence en Informatique — Réseaux Informatique et Télécoms",
            "edu.notes": "Mention Très bien — Spécialisation Systèmes, Réseaux et Sécurité.",

            "research.heading": "Intérêts de recherche",
            "research.i1": "Détection d'intrusion et d'anomalies par apprentissage profond",
            "research.i2": "Réduction du bruit et corrélation des alertes de sécurité (SIEM / SOAR)",
            "research.i3": "Sécurité des protocoles et des systèmes connectés (IoT, bornes de recharge, systèmes industriels)",
            "research.i4": "IA locale et confidentialité des données (RAG, LLM embarqués)",

            "blog.heading": "Publications & Veille",
            "blog.a1_title": "Sécuriser Django face au OWASP Top 10",
            "blog.a2_title": "Orchestration SOAR : Wazuh & TheHive",
            "blog.a3_title": "RAG Local : L'IA Souveraine en Entreprise",

            "contact.title": "Me contacter",
            "contact.subtitle": "Discutons de vos projets ou opportunités.",
            "contact.email_title": "Email",
            "contact.phone_title": "Téléphone",
            "contact.location_title": "Localisation",
            "contact.name_label": "Nom complet",
            "contact.email_label": "Email",
            "contact.subject_label": "Sujet",
            "contact.message_label": "Message",
            "contact.name_placeholder": "Nom complet",
            "contact.email_placeholder": "Email",
            "contact.subject_placeholder": "Sujet (optionnel)",
            "contact.message_placeholder": "Message...",
            "contact.send_btn": "Envoyer le message",

            "cta.banner": "Ensemble, construisons des <strong>solutions plus sécurisées et performantes.</strong>",
            "cta.button": "Contactez-moi"
        },
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.journey": "Journey",
            "nav.contact": "Contact",

            "hero.badge": "DevSecOps Engineer",
            "hero.subtitle": "DevSecOps | Full Stack | Infrastructure",
            "hero.desc": "I design, deploy, and secure resilient software solutions for a <span class=\"desc-highlight\">safer and faster digital world</span>.",
            "hero.btn_journey": "Explore my journey",
            "hero.btn_contact": "Contact me",

            "stat.years": "Years of experience",
            "stat.projects": "Completed projects",
            "stat.degree": "Bachelor's",
            "stat.honors": "Highest Honors",
            "stat.country": "Benin",
            "stat.remote": "On-site & Remote",

            "about.title": "About me",
            "about.desc": "DevSecOps Specialist & Full Stack Developer passionate about security, automation, and modern infrastructures. I bring DevSecOps, Django, SOAR, and AI (RAG) expertise to deliver reliable, secure, and scalable solutions.",
            "about.item1": "DevSecOps & SRE",
            "about.item2": "Full Stack Development",
            "about.item3": "Cloud & Infrastructure",
            "about.more_btn": "Learn more",
            "about.cv_btn": "Download CV (PDF)",

            "proj.title": "My projects",
            "proj.subtitle": "A curated selection of projects reflecting my engineering expertise.",
            "proj.filter_all": "All",
            "proj.filter_secops": "DevSecOps",
            "proj.filter_web": "Web",
            "proj.filter_ai": "AI / Data",
            "proj.details": "View details",

            "proj.p1_title": "SOAR / GRC Platform",
            "proj.p1_badge": "In progress",
            "proj.p1_desc": "Confidential solution under development: GRC, CMDB, vulnerability and incident management, fed by many connectors (including Wazuh, TheHive, OpenVAS) and a sovereign AI assistant.",
            "proj.p2_title": "RBAC Access Control Engine",
            "proj.p2_desc": "Centralized solution for provisioning, automated compliance auditing, and revoking enterprise access rights.",
            "proj.p3_title": "AI Interview Simulator SaaS",
            "proj.p3_desc": "Personalized interview simulation SaaS platform with CV-to-job matching and automated NLP scoring reports.",
            "proj.p4_title": "COVERSE AI",
            "proj.p4_desc": "Sovereign intelligent customer interaction agent powered by local LLM orchestration via Ollama.",
            "proj.p5_title": "NicePay",
            "proj.p5_desc": "Unified payment integrator enabling applications to centralize checkout flows, webhook verification, and secure transaction tracking.",
            "proj.p6_title": "AI PO Translator",
            "proj.p6_desc": "CLI & API localization engine translating gettext (.po) files using PyTorch CPU/GPU acceleration and CI/CD hooks.",
            "proj.p7_title": "Naxo AI",
            "proj.p7_desc": "Conversational AI ordering assistant and real-time POS integration built for restaurants.",
            "proj.p8_title": "Optimus Trading",
            "proj.p8_desc": "Multi-user algorithmic trading platform with historical backtesting and isolated real-time order execution.",
            "proj.p9_title": "DataSpeak",
            "proj.p9_desc": "Sovereign AI platform enabling enterprises to query their files in natural language using local models with full data confidentiality.",

            "skills.title": "My skills",
            "skills.subtitle": "A comprehensive set of technical and engineering capabilities.",
            "skills.c1_title": "DevSecOps & Cloud",
            "skills.c1_i1": "CI/CD (GitHub Actions, GitLab CI)",
            "skills.c1_i2": "Docker (hardened containers)",
            "skills.c1_i3": "AWS / Cloud & Infrastructure",
            "skills.c1_i4": "Security (Wazuh, OpenVAS, TheHive)",
            "skills.c1_i5": "SAST / DAST & OWASP Top 10",
            "skills.c2_title": "Development",
            "skills.c2_i1": "Django / Python (DRF)",
            "skills.c2_i6": "HTML / CSS & JavaScript",
            "skills.c2_i2": "React / Next.js / TypeScript",
            "skills.c2_i3": "REST APIs & WebSockets",
            "skills.c2_i4": "PostgreSQL, Redis & Celery",
            "skills.c2_i5": "Linux (Debian / Ubuntu)",
            "skills.c3_title": "AI, Tools & Methods",
            "skills.c3_i1": "RAG Architectures & Ollama (LLMs)",
            "skills.c3_i2": "GRC, SOAR & RBAC Engines",
            "skills.c3_i3": "Monitoring & Logs (SIEM / ELK)",
            "skills.c3_i4": "Agile / Scrum & TDD",
            "skills.c3_i5": "Project Management (Jira, Trello, Redmine)",

            "exp.title": "Experience & Education",
            "exp.subtitle": "Background in software engineering, cybersecurity, and DevSecOps architecture.",
            "exp.toggle_details": "Details",
            "exp.collapse": "Collapse",
            "exp.mewan_date": "April 2024 – Present",
            "exp.mewan_role": "IT Operations Engineer",
            "exp.mewan_b0": "<strong>Operations &amp; Virtualization:</strong> Production deployment, maintenance, and support of applications on virtualized environments (VMware, Hyper-V), backup management, and performance monitoring.",
            "exp.mewan_b1": "<strong>Secure CI/CD Pipelines (Shift-Left):</strong> Automated SAST (SonarQube), DAST (OWASP ZAP), dependency scanning (SCA), and secrets management across GitHub Actions / GitLab CI.",
            "exp.mewan_b2": "<strong>Container &amp; Infrastructure Hardening:</strong> Secure Docker containerization (minimal non-root images), Linux server hardening, network segmentation, TLS, and least-privilege access.",
            "exp.mewan_b3": "<strong>Application Security by Design:</strong> Architecture reviews and hardening of web applications &amp; APIs (Django, React, PostgreSQL) against OWASP Top 10 risks.",
            "exp.mewan_b4": "<strong>SIEM &amp; SOAR Integration:</strong> Integration and automation of Wazuh, OpenVAS, and TheHive within a GRC platform (connectors, alert and vulnerability normalization, remediation workflows).",
            "exp.mewan_b5": "<strong>Vulnerability Management &amp; Compliance:</strong> Continuous scanning of Docker images, dependencies (SBOM/SCA), and runtime environments, CVE prioritization, and patch tracking.",
            "exp.mewan_b6": "<strong>DevSecOps Culture:</strong> Developer enablement through security code reviews, CI quality gates, and secure coding adoption.",

            "exp.padme_date": "June 2023 – September 2023",
            "exp.padme_role": "IT Security Intern",
            "exp.padme_b1": "Review and enhancement of the Information Systems Security Policy (ISSP).",
            "exp.padme_b2": "Contribution to audit frameworks and IT Business Continuity / Disaster Recovery plans (BCP/DRP).",
            "exp.padme_b3": "Deployment of open-source IT asset management and helpdesk platforms.",
            "exp.padme_b4": "Collaboration on an internal digital cybersecurity awareness learning platform.",

            "exp.jcit_date": "August 2021 – May 2023",
            "exp.jcit_role": "Full Stack Developer",
            "exp.jcit_b1": "Development of an HR SaaS platform (React, Django REST, PostgreSQL, Redis).",
            "exp.jcit_b2": "Robust authentication implementation (OAuth2, JWT, 2FA) and AES-256 data encryption.",
            "exp.jcit_b3": "PCI-DSS compliant payment gateway integration (Stripe, CinetPay, MTN MoMo).",
            "exp.jcit_b4": "AWS EC2 deployment and CI/CD automation via GitHub Actions.",

            "exp.maouco_date": "June 2020 – May 2021",
            "exp.maouco_role": "Software Development Intern",
            "exp.maouco_b1": "Business process analysis and software optimization for enterprise management systems.",
            "exp.maouco_b2": "Design of complex functional modules and user-centric responsive interfaces.",
            "exp.maouco_b3": "Full V-cycle engineering participation (specifications, unit & integration testing).",

            "edu.heading": "Education",
            "edu.degree": "Bachelor's Degree in Computer Science — Networks & Telecoms",
            "edu.notes": "With Highest Honors — Specialization in Systems, Networks & Security.",

            "research.heading": "Research Interests",
            "research.i1": "Deep learning for intrusion and anomaly detection",
            "research.i2": "Security alert noise reduction and correlation (SIEM / SOAR)",
            "research.i3": "Security of protocols and connected systems (IoT, EV charging stations, industrial systems)",
            "research.i4": "Local AI and data privacy (RAG, on-premise LLMs)",

            "blog.heading": "Technical Insights",
            "blog.a1_title": "Securing Django Against OWASP Top 10",
            "blog.a2_title": "SOAR Orchestration: Wazuh & TheHive",
            "blog.a3_title": "Local RAG: Sovereign Enterprise AI",

            "contact.title": "Contact me",
            "contact.subtitle": "Let's discuss your projects or opportunities.",
            "contact.email_title": "Email",
            "contact.phone_title": "Phone",
            "contact.location_title": "Location",
            "contact.name_label": "Full name",
            "contact.email_label": "Email",
            "contact.subject_label": "Subject",
            "contact.message_label": "Message",
            "contact.name_placeholder": "Full name",
            "contact.email_placeholder": "Email",
            "contact.subject_placeholder": "Subject (optional)",
            "contact.message_placeholder": "Message...",
            "contact.send_btn": "Send message",

            "cta.banner": "Together, let's build <strong>more secure and high-performing solutions.</strong>",
            "cta.button": "Contact me"
        }
    };

    function applyLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (translations[lang][key]) {
                el.setAttribute("placeholder", translations[lang][key]);
            }
        });
        document.querySelectorAll(".timeline-card").forEach((card) => {
            const btnText = card.querySelector(".timeline-toggle-btn .btn-text");
            if (btnText) {
                btnText.textContent = card.classList.contains("active")
                    ? translations[lang]["exp.collapse"]
                    : translations[lang]["exp.toggle_details"];
            }
        });
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            applyLanguage(btn.getAttribute("data-lang"));
        });
    });

    // ==========================================================================
    // 2. THEME TOGGLE (Light Mode Default / Dark Mode Available)
    // ==========================================================================
    const themeToggle = document.getElementById("theme-toggle");
    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.documentElement.classList.add("dark-mode");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark-mode");
            const isDark = document.documentElement.classList.contains("dark-mode");
            localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
        });
    }

    // ==========================================================================
    // 3. STICKY HEADER, SCROLL SPY & MOBILE MENU
    // ==========================================================================
    const header = document.getElementById("main-header");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 20);
        }
        const scrollPos = window.scrollY + 130;
        let currentId = "accueil";
        sections.forEach((sec) => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                currentId = sec.id;
            }
        });
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
        });
    });

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const icon = menuToggle.querySelector(".material-symbols-outlined");
            if (icon) {
                icon.textContent = navMenu.classList.contains("active") ? "close" : "menu";
            }
        });
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector(".material-symbols-outlined");
                if (icon) icon.textContent = "menu";
            });
        });
    }

    // ==========================================================================
    // 4. PROJECT CATEGORY FILTERING
    // ==========================================================================
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");

            projectCards.forEach((card) => {
                const cats = card.getAttribute("data-category") || "";
                const show = filter === "all" || cats.includes(filter);
                card.classList.toggle("filtered-out", !show);
            });
        });
    });

    // ==========================================================================
    // 5. TIMELINE ACCORDION
    // ==========================================================================
    document.querySelectorAll(".timeline-card").forEach((card) => {
        const btn = card.querySelector(".timeline-toggle-btn");
        if (!btn) return;
        btn.addEventListener("click", () => {
            const isActive = card.classList.toggle("active");
            btn.setAttribute("aria-expanded", String(isActive));
            const label = btn.querySelector(".btn-text");
            if (label) {
                label.textContent = isActive
                    ? translations[currentLanguage]["exp.collapse"]
                    : translations[currentLanguage]["exp.toggle_details"];
            }
        });
    });

    // ==========================================================================
    // 6. TESTIMONIALS CAROUSEL
    // ==========================================================================
    const recCarousel = document.querySelector(".recommandations-carousel");
    if (recCarousel) {
        const track = recCarousel.querySelector(".recommandations-track");
        const slides = recCarousel.querySelectorAll(".recommendation-slide");
        const dots = recCarousel.querySelectorAll(".carousel-dot");
        let idx = 0;

        const goToSlide = (newIdx) => {
            idx = newIdx;
            if (track) track.style.transform = `translateX(-${idx * 100}%)`;
            slides.forEach((s, i) => s.classList.toggle("active", i === idx));
            dots.forEach((d, i) => d.classList.toggle("active", i === idx));
        };

        let timer = setInterval(() => goToSlide((idx + 1) % slides.length), 5500);
        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                clearInterval(timer);
                goToSlide(parseInt(dot.getAttribute("data-index"), 10));
                timer = setInterval(() => goToSlide((idx + 1) % slides.length), 5500);
            });
        });
    }

    // ==========================================================================
    // 7. UNIFIED MODAL (Projects, Articles, Detailed Profile)
    // ==========================================================================
    const modal = document.getElementById("detail-modal");
    const modalBody = document.getElementById("modal-body-content");
    const modalCloseBtn = modal ? modal.querySelector(".modal-close-btn") : null;
    const modalOverlay = modal ? modal.querySelector(".modal-overlay") : null;

    function openModal(html) {
        if (!modal || !modalBody) return;
        modalBody.innerHTML = html;
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    // Project Detail Data
    const projectsData = {
        grc: {
            fr: {
                title: "Architecture de Cybersécurité, GRC & ITAM",
                meta: "En cours · Solution confidentielle · Tech Lead & Full Stack",
                summary: "Conception d'une plateforme modulaire de gestion des vulnérabilités et remédiations, réponse aux incidents, gouvernance des risques (matrice 5×5) et CMDB, alimentée par des connecteurs dédiés et un assistant IA souverain.",
                bullets: [
                    "<strong>Connecteurs &amp; Ingestion :</strong> Développement de connecteurs modulaires permettant de collecter, normaliser et synchroniser automatiquement les alertes, vulnérabilités et actifs depuis de nombreuses sources hétérogènes (dont Wazuh, OpenVAS et TheHive) via Celery / Redis.",
                    "<strong>Gestion des Vulnérabilités &amp; Remédiations :</strong> Suivi complet du cycle de vie des failles (détection, priorisation par criticité, assignation et validation des correctifs).",
                    "<strong>IA Souveraine (RAG) :</strong> Assistant local basé sur Ollama recommandant des plans de remédiation contextualisés.",
                    "<strong>Architecture &amp; Stack :</strong> Python, Django, PostgreSQL, Celery, Redis, Linux Debian."
                ]
            },
            en: {
                title: "Cybersecurity, GRC & ITAM Reference Architecture",
                meta: "In progress · Confidential solution · Tech Lead & Full Stack",
                summary: "Design of a modular platform for vulnerability management and remediation, incident response, risk governance (5×5 matrix), and CMDB, fed by custom connectors and a sovereign AI assistant.",
                bullets: [
                    "<strong>Connectors &amp; Data Ingestion:</strong> Custom modular connectors automatically collecting, normalizing, and synchronizing alerts, vulnerabilities, and assets from many heterogeneous sources (including Wazuh, OpenVAS, and TheHive) via Celery / Redis.",
                    "<strong>Vulnerability &amp; Remediation Management:</strong> End-to-end tracking from flaw ingestion and severity prioritization to remediation workflows.",
                    "<strong>Sovereign AI (RAG):</strong> Local LLM assistant via Ollama delivering contextualized remediation recommendations.",
                    "<strong>Architecture &amp; Stack:</strong> Python, Django, PostgreSQL, Celery, Redis, Debian Linux."
                ]
            }
        },
        rbac: {
            fr: {
                title: "Moteur de Contrôle des Habilitations (RBAC)",
                meta: "Architecture IAM & Sécurité Applicative",
                summary: "Système centralisé d'attribution, de suivi de criticité et de révocation automatisée des droits d'accès selon le principe du moindre privilège.",
                bullets: [
                    "<strong>Modélisation IAM :</strong> Conception et application stricte des politiques d'accès et séparation des tâches.",
                    "<strong>Moteur d'Audit RBAC :</strong> Détection automatique des dérives de privilèges et anomalies de conformité.",
                    "<strong>Console Centralisée :</strong> Tableaux de bord épurés de suivi par niveau de criticité.",
                    "<strong>Stack :</strong> Python, Django, RBAC Engine, PostgreSQL."
                ]
            },
            en: {
                title: "RBAC Access Control Engine",
                meta: "IAM Architecture & Application Security",
                summary: "Centralized system for least-privilege access provisioning, criticality monitoring, and automated privilege revocation.",
                bullets: [
                    "<strong>IAM Modeling:</strong> Strict least-privilege policy modeling and separation of duties enforcement.",
                    "<strong>RBAC Audit Engine:</strong> Automated detection of privilege drift and compliance anomalies.",
                    "<strong>Admin Console:</strong> Clean dashboarding for access risk monitoring.",
                    "<strong>Stack:</strong> Python, Django, RBAC Engine, PostgreSQL."
                ]
            }
        },
        rag: {
            fr: {
                title: "Plateforme SaaS de Simulation d'Entretiens IA",
                meta: "2025 · Projet Personnel · Full Stack & IA",
                summary: "Application SaaS d'entraînement aux entretiens techniques avec matching sémantique CV ↔ Offre et génération automatisée de bilans.",
                bullets: [
                    "<strong>Moteur d'IA :</strong> API REST Django intégrant OpenAI et Llama 3.3 (Groq API) pour la simulation conversationnelle.",
                    "<strong>Traitement NLP & Async :</strong> Extraction PDF/DOCX et file de tâches Celery/Redis pour la notation.",
                    "<strong>Interface Moderne :</strong> Frontend réactif sous Next.js connecté aux APIs REST.",
                    "<strong>Stack :</strong> Next.js, Django, PostgreSQL, Celery, Redis, OpenAI / Groq."
                ]
            },
            en: {
                title: "AI Interview Simulator SaaS Platform",
                meta: "2025 · Personal Project · Full Stack & AI",
                summary: "SaaS platform for personalized interview coaching featuring CV-to-job semantic matching and automated NLP evaluation reports.",
                bullets: [
                    "<strong>AI Engine:</strong> Django REST API integrating OpenAI and Llama 3.3 (Groq API) for interactive simulations.",
                    "<strong>NLP & Async Pipeline:</strong> PDF/DOCX parsing and Celery/Redis background scoring.",
                    "<strong>Modern UI:</strong> Responsive Next.js frontend consuming structured REST endpoints.",
                    "<strong>Stack:</strong> Next.js, Django, PostgreSQL, Celery, Redis, OpenAI / Groq."
                ]
            }
        },
        coverse: {
            fr: {
                title: "COVERSE IA",
                meta: "2024 · Agent IA Souverain",
                summary: "Agent intelligent autonome capable d'automatiser les interactions clients (support, FAQ, assistance) sans dépendance cloud externe.",
                bullets: [
                    "<strong>IA Locale :</strong> Exécution de modèles LLM en local via Ollama pour garantir la confidentialité des données.",
                    "<strong>Orchestration Python :</strong> API REST modulaire et connecteurs vers les systèmes métiers.",
                    "<strong>Stack :</strong> Python, Ollama, REST API, LLMs locaux."
                ]
            },
            en: {
                title: "COVERSE AI",
                meta: "2024 · Sovereign AI Agent",
                summary: "Autonomous customer interaction agent automating support and FAQs without external cloud dependency.",
                bullets: [
                    "<strong>Local AI:</strong> On-premise LLM execution via Ollama ensuring complete data privacy.",
                    "<strong>Python Orchestration:</strong> Modular REST API and business system connectors.",
                    "<strong>Stack:</strong> Python, Ollama, REST API, Local LLMs."
                ]
            }
        },
        nicepay: {
            fr: {
                title: "NicePay — Intégrateur de Paiement Sécurisé",
                meta: "Projet Personnel · FinTech & Sécurité Transactionnelle",
                summary: "Plateforme d'intégration de paiement conçue pour unifier l'orchestration des transactions applicatives avec une architecture orientée fiabilité et sécurité.",
                bullets: [
                    "<strong>Architecture Unifiée :</strong> API centralisée simplifiant l'intégration des flux d'encaissement et le suivi d'état des transactions.",
                    "<strong>Sécurité Transactionnelle :</strong> Validation stricte des payloads, vérification cryptographique des webhooks et protection contre le rejeu (idempotence).",
                    "<strong>Traçabilité &amp; Résilience :</strong> Journalisation structurée des événements de paiement et traitement asynchrone des confirmations.",
                    "<strong>Stack :</strong> Python, Django, HTML / CSS, JavaScript."
                ]
            },
            en: {
                title: "NicePay — Secure Payment Integrator",
                meta: "Personal Project · FinTech & Transaction Security",
                summary: "Payment integration platform built to unify application checkout orchestration with a reliability- and security-first architecture.",
                bullets: [
                    "<strong>Unified Architecture:</strong> Centralized API simplifying payment flow integration and transaction lifecycle tracking.",
                    "<strong>Transaction Security:</strong> Strict payload validation, cryptographic webhook verification, and idempotency protection against replay attacks.",
                    "<strong>Auditability &amp; Resilience:</strong> Structured payment event logging and asynchronous callback handling.",
                    "<strong>Stack:</strong> Python, Django, HTML / CSS, JavaScript."
                ]
            }
        },
        translator: {
            fr: {
                title: "Traducteur PO IA",
                meta: "2025 · Outillage DevSecOps & NLP",
                summary: "Application intelligente traduisant automatiquement les fichiers de localisation gettext (.po) tout en préservant les variables et balises.",
                bullets: [
                    "<strong>Multi-Moteurs :</strong> Modèles PyTorch locaux (CPU/GPU) ou API Google Cloud Translation.",
                    "<strong>Intégration CI/CD :</strong> Outil CLI & API automatisant la localisation continue.",
                    "<strong>Stack :</strong> Python, Polib, PyTorch, Google Translate API."
                ]
            },
            en: {
                title: "AI PO Translator",
                meta: "2025 · Dev Tools & NLP",
                summary: "Intelligent localization tool translating gettext (.po) files while preserving placeholders and formatting.",
                bullets: [
                    "<strong>Multi-Engine:</strong> Local PyTorch models (CPU/GPU) or Google Cloud Translation API.",
                    "<strong>CI/CD Ready:</strong> CLI & API designed for automated localization pipelines.",
                    "<strong>Stack:</strong> Python, Polib, PyTorch, Google Translate API."
                ]
            }
        },
        naxo: {
            fr: {
                title: "Naxo IA",
                meta: "2024 · IA Conversationnelle & Temps Réel",
                summary: "Solution de prise de commande conversationnelle et FAQ intelligente dédiée aux restaurants.",
                bullets: [
                    "<strong>Classification NLP :</strong> Extraction automatique des plats, quantités et contraintes alimentaires.",
                    "<strong>Intégration POS :</strong> Transmission instantanée vers les écrans cuisine via WebSockets.",
                    "<strong>Stack :</strong> Node.js, NLP, WebSockets, Django API."
                ]
            },
            en: {
                title: "Naxo AI",
                meta: "2024 · Conversational AI & Real-time",
                summary: "Conversational order-taking and customer FAQ assistant built for restaurants.",
                bullets: [
                    "<strong>NLP Classification:</strong> Automated extraction of dishes, quantities, and allergens.",
                    "<strong>POS Integration:</strong> Real-time kitchen dispatch over WebSockets.",
                    "<strong>Stack:</strong> Node.js, NLP, WebSockets, Django API."
                ]
            }
        },
        optimus: {
            fr: {
                title: "Optimus Trading",
                meta: "2025 · FinTech & Systèmes Distribués",
                summary: "Plateforme multi-utilisateurs de trading algorithmique, backtesting historique et exécution d'ordres en temps réel.",
                bullets: [
                    "<strong>Backtesting Quantitatif :</strong> Calcul automatisé du Sharpe Ratio, Drawdown et Profit Factor.",
                    "<strong>Isolation & Sécurité :</strong> Cloisonnement strict des portefeuilles et chiffrement des clés API brokers.",
                    "<strong>Stack :</strong> Python, Django, Celery/Redis, Pandas, MetaTrader API."
                ]
            },
            en: {
                title: "Optimus Trading",
                meta: "2025 · FinTech & Distributed Systems",
                summary: "Multi-user algorithmic trading platform featuring historical backtesting and real-time order execution.",
                bullets: [
                    "<strong>Quantitative Backtesting:</strong> Automated computation of Sharpe Ratio, Drawdown, and Profit Factor.",
                    "<strong>Isolation & Security:</strong> Strict tenant isolation and encrypted broker API key storage.",
                    "<strong>Stack:</strong> Python, Django, Celery/Redis, Pandas, MetaTrader API."
                ]
            }
        },
        dataspeak: {
            fr: {
                title: "DataSpeak — IA Souveraine & Interrogation Documentaire",
                meta: "Projet Personnel · IA Locale (RAG) & Confidentialité",
                summary: "Application conçue pour permettre aux entreprises d'interroger leurs fichiers internes (PDF, DOCX, documents métiers) en langage naturel grâce à des modèles d'IA locaux, garantissant la confidentialité totale des données.",
                bullets: [
                    "<strong>IA Locale & Souveraine :</strong> Inférence 100 % locale via modèles LLM embarqués (Ollama), sans exposition des données vers des APIs cloud externes.",
                    "<strong>Pipeline RAG & Indexation :</strong> Extraction documentaire, découpage sémantique et recherche vectorielle pour fournir des réponses précises et contextualisées.",
                    "<strong>Langage Naturel :</strong> Interface conversationnelle permettant aux utilisateurs métiers d'obtenir des réponses directes à partir de leurs documents.",
                    "<strong>Confidentialité & Sécurité :</strong> Déploiement on-premise maîtrisé avec cloisonnement des données d'entreprise."
                ]
            },
            en: {
                title: "DataSpeak — Sovereign AI & Document Q&A",
                meta: "Personal Project · Local AI (RAG) & Data Privacy",
                summary: "Application built to let enterprises query internal files (PDF, DOCX, business documents) in natural language powered by local AI models, guaranteeing full data confidentiality.",
                bullets: [
                    "<strong>Local & Sovereign AI:</strong> 100% local LLM inference (Ollama) with zero data sent to external cloud APIs.",
                    "<strong>RAG Pipeline & Indexing:</strong> Document parsing, semantic chunking, and vector retrieval for accurate, source-grounded responses.",
                    "<strong>Natural Language Interface:</strong> Conversational Q&A enabling business teams to extract answers directly from their files.",
                    "<strong>Privacy & Security:</strong> Controlled on-premise deployment with isolated enterprise document stores."
                ]
            }
        }
    };

    document.querySelectorAll(".project-detail-link").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-project");
            const item = projectsData[id] && projectsData[id][currentLanguage];
            if (!item) return;
            openModal(`
                <h2>${item.title}</h2>
                <div class="modal-meta">${item.meta}</div>
                <p>${item.summary}</p>
                <ul class="modal-bullets">
                    ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
                </ul>
            `);
        });
    });

    // Articles Data (Veille)
    const articlesData = {
        "django-sec": {
            fr: `
                <h2>Sécuriser Django face au OWASP Top 10</h2>
                <div class="modal-meta">DevSecOps · Bonnes Pratiques Django</div>
                <p>Django intègre nativement de nombreuses protections, mais une configuration de production rigoureuse reste indispensable.</p>
                <h3>1. Middleware & Transport TLS</h3>
                <p>Activez les directives strictes dans <code>settings.py</code> : <code>SECURE_SSL_REDIRECT = True</code>, <code>SESSION_COOKIE_SECURE = True</code> et <code>CSRF_COOKIE_SECURE = True</code>.</p>
                <h3>2. Prévention SQLi & XSS</h3>
                <p>Privilégiez systématiquement l'ORM Django avec requêtes paramétrées et auditez tout appel à <code>RawSQL</code>.</p>
                <h3>3. Contrôle d'accès & JWT</h3>
                <p>Combinez permissions granulaires RBAC côté serveur et jetons JWT à durée de vie courte avec rotation.</p>
            `,
            en: `
                <h2>Securing Django Against OWASP Top 10</h2>
                <div class="modal-meta">DevSecOps · Django Best Practices</div>
                <p>Django ships with solid built-in protections, yet strict production hardening remains essential.</p>
                <h3>1. Middleware & TLS Enforcement</h3>
                <p>Enable mandatory flags in <code>settings.py</code>: <code>SECURE_SSL_REDIRECT = True</code>, <code>SESSION_COOKIE_SECURE = True</code>, and <code>CSRF_COOKIE_SECURE = True</code>.</p>
                <h3>2. SQLi & XSS Prevention</h3>
                <p>Rely on Django ORM's parameterized queries and strictly audit any <code>RawSQL</code> usage.</p>
                <h3>3. Access Control & JWT</h3>
                <p>Enforce server-side RBAC policies paired with short-lived JWT tokens.</p>
            `
        },
        "soar-wazuh": {
            fr: `
                <h2>Orchestration SOAR : Connecter Wazuh et TheHive</h2>
                <div class="modal-meta">SecOps · Réponse sur Incident</div>
                <p>Relier un SIEM comme Wazuh à TheHive permet de réduire drastiquement le temps moyen de détection et de réponse (MTTR).</p>
                <h3>1. Détection temps réel</h3>
                <p>Wazuh analyse les journaux système et d'intégrité de fichiers, déclenchant des alertes structurées dès qu'un seuil critique est franchi.</p>
                <h3>2. Création automatisée de cas</h3>
                <p>Un worker asynchrone Python (Celery/Redis) enrichit l'alerte et ouvre automatiquement un incident qualifié dans TheHive avec observables et contexte hôte.</p>
            `,
            en: `
                <h2>SOAR Orchestration: Connecting Wazuh and TheHive</h2>
                <div class="modal-meta">SecOps · Incident Response</div>
                <p>Integrating Wazuh SIEM with TheHive case management dramatically cuts Mean Time to Respond (MTTR).</p>
                <h3>1. Real-Time Detection</h3>
                <p>Wazuh ingests system and file integrity logs, triggering structured alerts on critical rule thresholds.</p>
                <h3>2. Automated Case Creation</h3>
                <p>An asynchronous Python worker (Celery/Redis) enriches the payload and opens a pre-triaged case in TheHive with observables.</p>
            `
        },
        "rag-local": {
            fr: `
                <h2>RAG Local : L'IA Souveraine en Entreprise</h2>
                <div class="modal-meta">IA / RAG · Confidentialité des Données</div>
                <p>Le RAG local permet d'exploiter les LLM sur des documents sensibles sans exposer aucune donnée vers des APIs externes.</p>
                <h3>1. Embeddings & Base Vectorielle</h3>
                <p>Indexation interne des PDF/DOCX via des modèles locaux et stockage sécurisé dans PostgreSQL avec <code>pgvector</code>.</p>
                <h3>2. Inférence Locale via Ollama</h3>
                <p>Génération contextualisée avec Llama 3 hébergé sur infrastructure maîtrisée.</p>
            `,
            en: `
                <h2>Local RAG: Sovereign Enterprise AI</h2>
                <div class="modal-meta">AI / RAG · Data Privacy</div>
                <p>Local RAG enables querying sensitive internal knowledge bases without sending data to external cloud APIs.</p>
                <h3>1. Embeddings & Vector Store</h3>
                <p>Internal document indexing stored securely inside PostgreSQL with <code>pgvector</code>.</p>
                <h3>2. Local Inference via Ollama</h3>
                <p>Contextualized generation powered by Llama 3 hosted on controlled infrastructure.</p>
            `
        }
    };

    document.querySelectorAll(".veille-link").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-article");
            const content = articlesData[id] && articlesData[id][currentLanguage];
            if (content) openModal(content);
        });
    });

    // "En savoir plus" Full Profile Modal (Goal, Languages, Interests, CV)
    const openProfileBtn = document.getElementById("open-profile-modal");
    if (openProfileBtn) {
        openProfileBtn.addEventListener("click", () => {
            if (currentLanguage === "fr") {
                openModal(`
                    <h2>Pio François ACAKPOVI</h2>
                    <div class="modal-meta">Tech Lead · DevSecOps Engineer · Full Stack Django &amp; SOAR</div>
                    <h3>Objectif Professionnel</h3>
                    <p>Piloter des équipes techniques dans la conception d'architectures backend résilientes, intégrant pipelines DevSecOps, automatisation SOAR (Wazuh, TheHive, OpenVAS) et IA générative souveraine (RAG) avec une philosophie <em>Security by Design</em> systématique.</p>
                    <h3>Langues</h3>
                    <div class="modal-lang-row">
                        <div class="modal-lang-head"><span>Français</span><span>Maternelle (100%)</span></div>
                        <div class="modal-progress-track"><div class="modal-progress-fill" style="width:100%"></div></div>
                    </div>
                    <div class="modal-lang-row">
                        <div class="modal-lang-head"><span>Fon</span><span>Courant (90%)</span></div>
                        <div class="modal-progress-track"><div class="modal-progress-fill" style="width:90%"></div></div>
                    </div>
                    <div class="modal-lang-row">
                        <div class="modal-lang-head"><span>Anglais</span><span>Professionnel / Intermédiaire (65%)</span></div>
                        <div class="modal-progress-track"><div class="modal-progress-fill" style="width:65%"></div></div>
                    </div>
                    <h3>Centres d'intérêt</h3>
                    <ul class="modal-bullets">
                        <li>Open Source &amp; Contribution communautaire</li>
                        <li>Mentorat technique &amp; partage de bonnes pratiques</li>
                        <li>Veille cybersécurité (CVE / CERT / OWASP)</li>
                    </ul>
                    <p style="margin-top:20px;">
                        <a href="cv.pdf" download="CV_Pio_Acakpovi.pdf" class="btn btn-primary">Télécharger le CV complet (PDF)</a>
                    </p>
                `);
            } else {
                openModal(`
                    <h2>Pio François ACAKPOVI</h2>
                    <div class="modal-meta">Tech Lead · DevSecOps Engineer · Full Stack Django &amp; SOAR</div>
                    <h3>Career Objective</h3>
                    <p>Lead engineering teams in designing resilient backend architectures integrating DevSecOps pipelines, SOAR automation (Wazuh, TheHive, OpenVAS), and sovereign generative AI (RAG) with a systematic <em>Security by Design</em> mindset.</p>
                    <h3>Languages</h3>
                    <div class="modal-lang-row">
                        <div class="modal-lang-head"><span>French</span><span>Native (100%)</span></div>
                        <div class="modal-progress-track"><div class="modal-progress-fill" style="width:100%"></div></div>
                    </div>
                    <div class="modal-lang-row">
                        <div class="modal-lang-head"><span>Fon</span><span>Fluent (90%)</span></div>
                        <div class="modal-progress-track"><div class="modal-progress-fill" style="width:90%"></div></div>
                    </div>
                    <div class="modal-lang-row">
                        <div class="modal-lang-head"><span>English</span><span>Intermediate / Working Proficiency (65%)</span></div>
                        <div class="modal-progress-track"><div class="modal-progress-fill" style="width:65%"></div></div>
                    </div>
                    <h3>Interests</h3>
                    <ul class="modal-bullets">
                        <li>Open Source software</li>
                        <li>Technical mentoring</li>
                        <li>Cybersecurity threat watch (CVE / CERT / OWASP)</li>
                    </ul>
                    <p style="margin-top:20px;">
                        <a href="cv.pdf" download="CV_Pio_Acakpovi.pdf" class="btn btn-primary">Download Full CV (PDF)</a>
                    </p>
                `);
            }
        });
    }

    // ==========================================================================
    // 8. CONTACT FORM SUBMISSION (Web3Forms + Clean Fallback)
    // ==========================================================================
    const contactForm = document.getElementById("secure-contact-form");
    const contactFeedback = document.getElementById("contact-feedback");
    const submitBtn = document.getElementById("contact-submit-btn");

    if (contactForm && contactFeedback) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const honeypot = document.getElementById("security_token").value;
            if (honeypot) return;

            const accessKey = contactForm.querySelector('input[name="access_key"]').value;
            const isDemo = !accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

            contactFeedback.className = "contact-feedback hidden";
            if (submitBtn) submitBtn.disabled = true;

            if (isDemo) {
                setTimeout(() => {
                    contactFeedback.textContent = currentLanguage === "fr"
                        ? "Merci ! Votre message a bien été enregistré (mode démonstration — configurez la clé Web3Forms pour l'envoi direct, ou écrivez à pioacakpovi@gmail.com)."
                        : "Thank you! Your message has been recorded (demo mode — configure your Web3Forms key for live delivery, or email pioacakpovi@gmail.com).";
                    contactFeedback.className = "contact-feedback success";
                    contactForm.reset();
                    if (submitBtn) submitBtn.disabled = false;
                }, 450);
                return;
            }

            try {
                const payload = Object.fromEntries(new FormData(contactForm));
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify(payload)
                });
                const result = await response.json();
                if (response.ok) {
                    contactFeedback.textContent = currentLanguage === "fr"
                        ? "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais."
                        : "Message sent successfully! I will get back to you shortly.";
                    contactFeedback.className = "contact-feedback success";
                    contactForm.reset();
                } else {
                    throw new Error(result.message || "Erreur d'envoi");
                }
            } catch (err) {
                contactFeedback.textContent = currentLanguage === "fr"
                    ? `Impossible d'envoyer le message (${err.message}). Contactez-moi directement sur pioacakpovi@gmail.com.`
                    : `Unable to send message (${err.message}). Please reach out directly at pioacakpovi@gmail.com.`;
                contactFeedback.className = "contact-feedback error";
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }

    // ==========================================================================
    // 9. SCROLL REVEAL & KPI COUNTER ANIMATION
    // ==========================================================================
    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealItems.forEach((el) => observer.observe(el));
    } else {
        revealItems.forEach((el) => el.classList.add("reveal-visible"));
    }
});