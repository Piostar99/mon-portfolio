document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // TRANSLATION SYSTEM
    // ==========================================================================
    let currentLanguage = "fr";

    const translations = {
        fr: {
            // Navigation
            "nav.home": "Accueil",
            "nav.profile": "Profil",
            "nav.experience": "Parcours",
            "nav.projects": "Projets",
            "nav.blog": "Veille",
            "nav.skills": "Compétences",
            "nav.education": "Formations",
            "nav.contact": "Contact",
            "nav.download_cv": "CV",

            // Status Badge
            "status.available": "Disponible",

            // Hero
            "hero.tagline": "Full Stack | DevSecOps | SOAR & IA",
            "hero.title": "PIO FRANCOIS<br><span>ACAKPOVI</span>",
            "hero.subtitle": "Architecte SecOps & Développeur Django",
            "hero.desc": "Expertise dans la conception d'architectures backend Django sécurisées, l'automatisation SOAR et l'intégration d'IA générative (RAG) avec une philosophie Security by Design.",
            "hero.btn_contact": "Initialiser la Connexion",
            "hero.btn_projects": "Explorer les Projets",

            // Stats
            "stat.years": "Années d'Expérience",
            "stat.projects": "Projets Réalisés",
            "stat.vulns": "Audits SecOps",
            "stat.passion": "Passion Cyber & Dev",

            // Profil Section
            "profile.title": "Profil <span>Professionnel</span>",
            "profile.subtitle": "Développeur Full Stack | DevSecOps | Architecte SOAR & IA (RAG)",
            "profile.bio": "Développeur passionné et spécialisé dans la cybersécurité et le développement sécurisé. Doté d'une expertise reconnue sur l'écosystème Django, j'intègre les pipelines DevSecOps, l'orchestration SOAR (Wazuh, TheHive, OpenVAS) et les architectures d'IA générative (RAG via Ollama, LLMs locaux) au cœur de solutions backend hautement sécurisées.",
            "profile.coordonnees": "Coordonnées",
            "profile.phone": "Téléphone :",
            "profile.location": "Localisation :",
            "profile.goal_title": "Objectif Professionnel",
            "profile.goal_desc": "Tech Lead spécialisé en cybersécurité et développement sécurisé. Objectif : piloter des équipes techniques dans la conception d'architectures backend Django résilientes, intégrant SecOps, automatisation SOAR et IA générative (RAG) avec une approche Security by Design systématique.",
            "profile.lang_title": "Langues",
            "profile.lang_fr": "Français",
            "profile.lang_fr_level": "Maternelle (100%)",
            "profile.lang_fon": "Fon",
            "profile.lang_fon_level": "Courant (90%)",
            "profile.lang_en": "Anglais",
            "profile.lang_en_level": "Intermédiaire (60%)",
            "profile.interests_title": "Intérêts",
            "profile.interest_os": "Open Source",
            "profile.interest_ment": "Mentorat tech",
            "profile.interest_watch": "Veille CVE / CERT",
            "profile.download_cv": "Télécharger le CV (PDF)",
            "profile.github_title": "GitHub Dynamique",
            "profile.github_loading": "Synchronisation avec api.github.com...",

            // Expériences Section
            "exp.title": "Parcours <span>Professionnel</span>",
            "exp.toggle_details": "Missions & Tâches",
            "exp.mewan_date": "Avril 2024 – Présent",
            "exp.mewan_role": "Développeur & Analyste Sécurité Junior",
            "exp.mewan_b1": "Supervision et coordination des développements d'applications web et mobiles de la conception au déploiement.",
            "exp.mewan_b2": "Management d'une équipe de développeurs, allocation des ressources et priorisation.",
            "exp.mewan_b3": "Développement d'applications web sécurisées (React, Django, PostgreSQL) avec contrôles OWASP intégrés.",
            "exp.mewan_b4": "Conduite de tests d'intrusion (boîte noire, grise et blanche) sur applications web et infrastructures réseau.",
            "exp.mewan_b5": "Mise en place de pipelines DevSecOps (analyse SAST SonarQube, DAST OWASP ZAP, gestion des secrets).",
            "exp.mewan_b6": "Surveillance SOC : analyse d'alertes SIEM, investigation, réponse et remédiation (Wazuh, OpenVAS, TheHive).",
            "exp.mewan_b7": "Formation des équipes au codage sécurisé et rédaction de rapports de vulnérabilités (scores CVSS).",
            
            "exp.padme_date": "Juin 2023 - Septembre 2023",
            "exp.padme_role": "Stagiaire professionnel en sécurité informatique",
            "exp.padme_b1": "Participation proactive à la révision et à l'amélioration de la Politique de Sécurité des Systèmes d'Information (PSSI).",
            "exp.padme_b2": "Contribution à l'élaboration de plans de contrôle et de plan de continuité informatique (PCA/PRA).",
            "exp.padme_b3": "Déploiement et intégration de solutions de gestion libre de parc informatique et d'assistance technique.",
            "exp.padme_b4": "Collaboration à la mise en place d'une plateforme d'apprentissage numérique pour renforcer les compétences cyber internes.",
            
            "exp.jcit_date": "Août 2021 - Mai 2023",
            "exp.jcit_role": "Développeur Full Stack",
            "exp.jcit_b1": "Développement d'une plateforme SaaS de gestion des ressources humaines (React, Django REST, PostgreSQL, Redis).",
            "exp.jcit_b2": "Implémentation de protocoles d'authentification robuste (OAuth2, JWT, 2FA).",
            "exp.jcit_b3": "Chiffrement AES-256 des données sensibles et sécurisation des API (TLS, CORS, rate limiting).",
            "exp.jcit_b4": "Intégration de passerelles de paiement conformes aux standards PCI-DSS (Stripe, CinetPay, MTN MoMo).",
            "exp.jcit_b5": "Déploiement et monitoring d'applications sur serveurs AWS EC2 via pipelines CI/CD (GitHub Actions).",
            
            "exp.jcit_stage_date": "Juin 2020 - Mai 2021",
            "exp.jcit_stage_role": "Stagiaire en développement d'applications",
            "exp.jcit_stage_b1": "Analyse des processus métiers et intégration d'optimisations logicielles pour améliorer la performance système.",
            "exp.jcit_stage_b2": "Conception et implémentation de modules complexes répondant aux besoins fonctionnels.",
            "exp.jcit_stage_b3": "Conception d'interfaces utilisateurs responsives et ergonomiques (centrées UX).",
            "exp.jcit_stage_b4": "Participation active aux phases d'ingénierie logicielle selon le cycle en V (spécifications, tests unitaires et d'intégration).",

            // Projets
            "proj.title": "Réalisations <span>SecOps & IA</span>",
            "proj.details": "Détails",
            "proj.filter_all": "Tout",
            "proj.filter_secops": "Cyber & SecOps",
            "proj.filter_ai": "IA & NLP",
            "proj.filter_web": "Full-Stack & Web",
            
            "proj.p1_title": "Solution Globale de Cybersécurité, GRC & ITAM",
            "proj.p1_desc": "Plateforme intégrée de gestion des incidents et des actifs (CMDB) orchestrant des solutions clés et un assistant IA souverain.",
            "proj.p1_b1": "<strong>Rôle Tech Lead & Full-Stack :</strong> Cadrage, management technique de 2 développeurs et architecture de la plateforme.",
            "proj.p1_b2": "<strong>Backend & SOAR :</strong> Interconnexion de Wazuh, TheHive, OpenVAS, et automatisation asynchrone Celery/Redis.",
            "proj.p1_b3": "<strong>IA Souveraine :</strong> Intégration d'un assistant RAG avec modèle LLM local via Ollama pour la recommandation de remédiations.",
            "proj.p1_b4": "<strong>Stack :</strong> Python, Django, PostgreSQL, Celery, Redis, Linux Debian.",
            
            "proj.p2_title": "Contrôle des Habilitations (Sous NDA)",
            "proj.p2_desc": "Solution de gestion centralisée, d'attribution et de révocation des droits d'accès aux applications d'entreprise.",
            "proj.p2_b1": "<strong>Supervision & Développement :</strong> Direction technique sur la modélisation et l'application stricte des règles de sécurité.",
            "proj.p2_b2": "<strong>Moteur RBAC :</strong> Développement d'un algorithme d'audit automatisé comparant les habilitations actives avec les règles de conformité.",
            "proj.p2_b3": "<strong>Dashboarding :</strong> Console d'administration centralisée épurée de suivi des niveaux de criticité et d'anomalies de droits.",
            "proj.p2_b4": "<strong>Stack :</strong> Python, Django, RBAC Engine, Dashboarding.",
            
            "proj.p3_title": "Plateforme SaaS de Simulation d'Entretiens IA",
            "proj.p3_desc": "Application de simulation d'entretiens personnalisés avec système de matching CV-offre et génération de rapports.",
            "proj.p3_b1": "<strong>Conception & Architecture :</strong> Rédaction des spécifications et implémentation complète en tant que projet personnel.",
            "proj.p3_b2": "<strong>Moteur d'IA :</strong> API REST sous Django, matching automatique (CV ↔ Offre) et mode de simulation interactive via OpenAI et Llama 3.3 (Groq API).",
            "proj.p3_b3": "<strong>NLP & Traitement Async :</strong> Module d'extraction NLP des documents (PDF/DOCX), files de tâches Celery/Redis pour la notation et génération de comptes-rendus.",
            "proj.p3_b4": "<strong>Stack :</strong> Next.js, Django, PostgreSQL, Celery, Redis, OpenAI/Groq APIs.",

            "proj.p4_title": "COVERSE IA",
            "proj.p4_desc": "Conception et développement d'un agent intelligent capable de gérer automatiquement les interactions clients pour tout type d'entreprise.",
            "proj.p4_b1": "<strong>Objectif :</strong> Automatiser les réponses aux messages (support client, FAQ, assistance) de manière fluide et contextualisée.",
            "proj.p4_b2": "<strong>IA Locale :</strong> Génération de réponses intelligentes basées sur des modèles LLM en local via Ollama.",
            "proj.p4_b3": "<strong>Architecture :</strong> Backend Python pour l'orchestration, API REST et intégrations externes, indépendance vis-à-vis des services cloud.",
            "proj.p4_b4": "<strong>Stack :</strong> Python, Ollama, API integration, LLM local.",

            "proj.p5_title": "Paidsbet",
            "proj.p5_desc": "Application facilitant les recharges automatisées des comptes clients 1XBET pour agents multicaissiers au Bénin.",
            "proj.p5_b1": "<strong>Fonctionnalité :</strong> Automatisation des recharges d'argent sur la plateforme 1XBET pour les réseaux multicaissiers locaux.",
            "proj.p5_b2": "<strong>Sécurité :</strong> Chiffrement des payloads de paiement, gestion robuste des signatures cryptographiques et double authentification.",
            "proj.p5_b3": "<strong>Transactions :</strong> File d'attente asynchrone pour traiter des centaines de requêtes financières sans perte ni double-crédit.",
            "proj.p5_b4": "<strong>Stack :</strong> JavaScript, Node.js, Passerelles de paiement béninoises, Cryptographie RSA.",

            "proj.p6_title": "Traducteur PO IA",
            "proj.p6_desc": "Application intelligente permettant de traduire automatiquement les fichiers de localisation gettext (.po).",
            "proj.p6_b1": "<strong>Multi-Moteurs :</strong> Traduction via des modèles IA s'exécutant sur CPU ou GPU locaux selon la configuration de la machine, ou par l'API Google Translate.",
            "proj.p6_b2": "<strong>Localisation :</strong> Traitement et parsing de fichiers gettext volumineux tout en conservant le formatage initial et les placeholders originaux.",
            "proj.p6_b3": "<strong>Interface :</strong> Outil CLI et API pour automatiser la localisation dans les pipelines CI/CD.",
            "proj.p6_b4": "<strong>Stack :</strong> Python, Polib, PyTorch (CPU/GPU acceleration), Google Cloud Translation API.",

            "proj.p7_title": "Naxo IA",
            "proj.p7_desc": "Solution de chat intelligente et prise de commande automatique dédiée aux restaurants.",
            "proj.p7_b1": "<strong>Commandes IA :</strong> Classification des intentions de l'utilisateur pour extraire les plats commandés et les quantités.",
            "proj.p7_b2": "<strong>FAQ Conversationnelle :</strong> Réponses automatiques instantanées aux questions des clients sur le menu, les horaires, les réservations et les allergènes.",
            "proj.p7_b3": "<strong>Intégration POS :</strong> Envoi des commandes validées directement au système de cuisine du restaurant.",
            "proj.p7_b4": "<strong>Stack :</strong> Node.js, NLP Classification, WebSocket, Django API.",

            "proj.p8_title": "Optimus",
            "proj.p8_desc": "Solution multi-utilisateur de trading algorithmique, de backtesting et d'exécution d'ordres en temps réel.",
            "proj.p8_b1": "<strong>Trading Automatisé :</strong> Exécution de positions financières selon des signaux algorithmiques prédéfinis.",
            "proj.p8_b2": "<strong>Backtesting :</strong> Simulation historique de stratégies de trading avec calcul des KPIs clés (Sharpe Ratio, Drawdown, Profit Factor).",
            "proj.p8_b3": "<strong>Multi-Utilisateurs :</strong> Isolation complète des portefeuilles clients, gestion sécurisée des clés API des brokers de trading.",
            "proj.p8_b4": "<strong>Stack :</strong> Python, Django, Celery/Redis, Pandas, MetaTrader API, Redis WebSockets.",

            // Blog/Veille
            "blog.title": "Veille <span>Cyber & IA</span>",
            "blog.a1_title": "Sécuriser Django face au OWASP Top 10",
            "blog.a1_desc": "Guide pratique sur la configuration du middleware Django, la protection contre le Clickjacking, XSS et l'injection de requêtes SQL.",
            "blog.a2_title": "Orchestration SOAR : Connecter Wazuh et TheHive",
            "blog.a2_desc": "Comment automatiser la réponse sur incident en transmettant des alertes de sécurité système en temps réel à un gestionnaire de cas.",
            "blog.a3_title": "RAG Local : L'IA Souveraine en Entreprise",
            "blog.a3_desc": "Exploration technique de l'hébergement de LLMs locaux via Ollama et pgvector pour sécuriser les données internes de l'entreprise.",
            "blog.read_more": "Lire l'article",

            // Recommandations
            "rec.title": "Recommandations & <span>Témoignages</span>",

            // Compétences
            "skills.title": "Matrice de <span>Compétences</span>",
            "skills.sec_title": "Sécurité & SecOps",
            "skills.dev_title": "Développement & Cloud",
            "skills.tools_title": "Ingénierie IA & Outils",

            // Formations
            "edu.title": "Formations & <span>Parcours</span>",
            "edu.degree": "Licence en Informatique — Réseaux Informatique et Télécoms",
            "edu.notes": "Mention Très bien — Spécialisation Systèmes, Réseaux et Sécurité.",

            // Contact
            "contact.title": "Initialiser la <span>Connexion</span>",
            "contact.subtitle": "Établir un tunnel de communication",
            "contact.desc": "N'hésitez pas à me contacter pour toute opportunité de collaboration ou échange technique sécurisé.",
            "contact.name_label": "Nom / Organisation *",
            "contact.name_placeholder": "Entrez votre nom",
            "contact.email_label": "Adresse de messagerie *",
            "contact.email_placeholder": "nom@exemple.com",
            "contact.subject_label": "Sujet *",
            "contact.subject_placeholder": "Sujet de votre message",
            "contact.message_label": "Message *",
            "contact.message_placeholder": "Votre message...",
            "contact.send_btn": "Envoyer le paquet",
            "footer.compliance": "Conformité RGPD & Chiffrement de bout en bout actif."
        },
        en: {
            // Navigation
            "nav.home": "Home",
            "nav.profile": "Profile",
            "nav.experience": "Journey",
            "nav.projects": "Projects",
            "nav.blog": "Blog",
            "nav.skills": "Skills",
            "nav.education": "Education",
            "nav.contact": "Contact",
            "nav.download_cv": "CV",

            // Status Badge
            "status.available": "Available",

            // Hero
            "hero.tagline": "Full Stack | DevSecOps | SOAR & AI",
            "hero.title": "PIO FRANCOIS<br><span>ACAKPOVI</span>",
            "hero.subtitle": "SecOps Architect & Django Developer",
            "hero.desc": "Expertise in designing secure Django backend architectures, SOAR automation, and generative AI integration (RAG) with a Security by Design philosophy.",
            "hero.btn_contact": "Initialize Connection",
            "hero.btn_projects": "Explore Projects",

            // Stats
            "stat.years": "Years of Experience",
            "stat.projects": "Projects Completed",
            "stat.vulns": "SecOps Audits",
            "stat.passion": "Cyber & Dev Passion",

            // Profil Section
            "profile.title": "Professional <span>Profile</span>",
            "profile.subtitle": "Full Stack Developer | DevSecOps | SOAR & AI (RAG) Architect",
            "profile.bio": "Passionate developer specialized in cybersecurity and secure development. Equipped with recognized expertise in the Django ecosystem, I integrate DevSecOps pipelines, SOAR orchestration (Wazuh, TheHive, OpenVAS), and generative AI architectures (RAG via Ollama, local LLMs) at the core of highly secure backend solutions.",
            "profile.coordonnees": "Contact Info",
            "profile.phone": "Phone:",
            "profile.location": "Location:",
            "profile.goal_title": "Career Objective",
            "profile.goal_desc": "Tech Lead specialized in cybersecurity and secure development. Goal: lead technical teams in designing resilient Django backend architectures, integrating SecOps, SOAR automation, and generative AI (RAG) with a systematic Security by Design approach.",
            "profile.lang_title": "Languages",
            "profile.lang_fr": "French",
            "profile.lang_fr_level": "Native (100%)",
            "profile.lang_fon": "Fon",
            "profile.lang_fon_level": "Fluent (90%)",
            "profile.lang_en": "English",
            "profile.lang_en_level": "Intermediate (60%)",
            "profile.interests_title": "Interests",
            "profile.interest_os": "Open Source",
            "profile.interest_ment": "Tech mentoring",
            "profile.interest_watch": "CVE / CERT Watch",
            "profile.download_cv": "Download CV (PDF)",
            "profile.github_title": "Dynamic GitHub",
            "profile.github_loading": "Syncing with api.github.com...",

            // Expériences Section
            "exp.title": "Professional <span>Journey</span>",
            "exp.toggle_details": "Missions & Tasks",
            "exp.mewan_date": "April 2024 – Present",
            "exp.mewan_role": "Junior Developer & Security Analyst",
            "exp.mewan_b1": "Supervision and coordination of web and mobile application developments from design to deployment.",
            "exp.mewan_b2": "Management of a developer team, resource allocation, and prioritization.",
            "exp.mewan_b3": "Development of secure web applications (React, Django, PostgreSQL) with integrated OWASP controls.",
            "exp.mewan_b4": "Conducting penetration testing (black, grey, and white box) on web applications and network infrastructures.",
            "exp.mewan_b5": "Implementing DevSecOps pipelines (SonarQube SAST analysis, OWASP ZAP DAST, secrets management).",
            "exp.mewan_b6": "SOC Monitoring: SIEM alert analysis, investigation, response, and remediation (Wazuh, OpenVAS, TheHive).",
            "exp.mewan_b7": "Training development teams on secure coding practices and writing vulnerability reports (CVSS scores).",
            
            "exp.padme_date": "June 2023 - September 2023",
            "exp.padme_role": "Professional Intern in IT Security",
            "exp.padme_b1": "Proactive participation in the review and improvement of the Information Systems Security Policy (ISSP).",
            "exp.padme_b2": "Contribution to the development of audit plans and IT business continuity plans (BCP/DRP).",
            "exp.padme_b3": "Deployment and integration of open-source IT asset management and technical assistance solutions.",
            "exp.padme_b4": "Collaboration in setting up a digital learning platform to strengthen internal cyber skills.",
            
            "exp.jcit_date": "August 2021 - May 2023",
            "exp.jcit_role": "Full Stack Developer",
            "exp.jcit_b1": "Development of a SaaS HR management platform (React, Django REST, PostgreSQL, Redis).",
            "exp.jcit_b2": "Implementation of robust authentication protocols (OAuth2, JWT, 2FA).",
            "exp.jcit_b3": "AES-256 encryption of sensitive data and API securing (TLS, CORS, rate limiting).",
            "exp.jcit_b4": "Integration of payment gateways complying with PCI-DSS standards (Stripe, CinetPay, MTN MoMo).",
            "exp.jcit_b5": "Deployment and monitoring of applications on AWS EC2 servers via CI/CD pipelines (GitHub Actions).",
            
            "exp.jcit_stage_date": "June 2020 - May 2021",
            "exp.jcit_stage_role": "App Development Intern",
            "exp.jcit_stage_b1": "Analysis of business processes and integration of software optimizations to improve system performance.",
            "exp.jcit_stage_b2": "Design and implementation of complex modules meeting functional requirements.",
            "exp.jcit_stage_b3": "Design of responsive and ergonomic user interfaces (UX-centric).",
            "exp.jcit_stage_b4": "Active participation in software engineering phases under the V-cycle (specifications, unit and integration tests).",

            // Projets
            "proj.title": "Featured <span>SecOps & AI Projects</span>",
            "proj.details": "Details",
            "proj.filter_all": "All",
            "proj.filter_secops": "Cyber & SecOps",
            "proj.filter_ai": "AI & NLP",
            "proj.filter_web": "Full-Stack & Web",

            "proj.p1_title": "Global Cybersecurity, GRC & ITAM Solution",
            "proj.p1_desc": "Integrated incident and asset management (CMDB) platform orchestrating key security tools and a sovereign AI assistant.",
            "proj.p1_b1": "<strong>Role Tech Lead & Full-Stack:</strong> Scoping, technical management of 2 developers, and platform architecture.",
            "proj.p1_b2": "<strong>Backend & SOAR:</strong> Interconnection of Wazuh, TheHive, OpenVAS, and Celery/Redis asynchronous automation.",
            "proj.p1_b3": "<strong>Sovereign AI:</strong> Integration of a RAG assistant with local LLM models via Ollama for vulnerability remediation recommendations.",
            "proj.p1_b4": "<strong>Stack:</strong> Python, Django, PostgreSQL, Celery, Redis, Linux Debian.",
            
            "proj.p2_title": "Access Control & Entitlement Platform (NDA)",
            "proj.p2_desc": "Centralized management solution for assigning and revoking access rights across enterprise applications.",
            "proj.p2_b1": "<strong>Supervision & Development:</strong> Technical direction on modelling and strict application of security rules.",
            "proj.p2_b2": "<strong>RBAC Engine:</strong> Development of an automated auditing algorithm comparing active permissions against compliance policies.",
            "proj.p2_b3": "<strong>Dashboarding:</strong> A clean centralized admin console for tracking employee access criticality and anomalies.",
            "proj.p2_b4": "<strong>Stack:</strong> Python, Django, RBAC Engine, Dashboarding.",
            
            "proj.p3_title": "AI Interview Simulator SaaS Platform",
            "proj.p3_desc": "Personalized interview simulation application with a resume-to-job matching system and report generation.",
            "proj.p3_b1": "<strong>Design & Architecture:</strong> Specifications writing and complete implementation as a personal project.",
            "proj.p3_b2": "<strong>AI Engine:</strong> REST API built in Django, automatic CV-job matching, and interactive chat simulation via OpenAI and Llama 3.3 (Groq API).",
            "proj.p3_b3": "<strong>NLP & Async Tasks:</strong> NLP document extraction (PDF/DOCX), Celery/Redis task queueing for scoring and feedback report generation.",
            "proj.p3_b4": "<strong>Stack:</strong> Next.js, Django, PostgreSQL, Celery, Redis, OpenAI/Groq APIs.",

            "proj.p4_title": "COVERSE IA",
            "proj.p4_desc": "Design and development of an intelligent customer interaction agent capable of automating communication for any business.",
            "proj.p4_b1": "<strong>Objective:</strong> Automate responses to customer messages (support, FAQs, internal assistance) dynamically and contextually.",
            "proj.p4_b2": "<strong>Local AI:</strong> Generation of smart interactions based on LLM models running locally via Ollama.",
            "proj.p4_b3": "<strong>Architecture:</strong> Python backend for processing logic and orchestration, APIs for communication with external services, cloud-independent.",
            "proj.p4_b4": "<strong>Stack:</strong> Python, Ollama, API integrations, local LLMs.",

            "proj.p5_title": "Paidsbet",
            "proj.p5_desc": "Application facilitating automated credits/recharges for 1XBET client accounts targeting multi-cashier agents in Benin.",
            "proj.p5_b1": "<strong>Functionality:</strong> Automated money recharges on the 1XBET platform for local multi-cashier networks.",
            "proj.p5_b2": "<strong>Security:</strong> Encrypted payment payloads, cryptographic signature verification, and secure dual-authentication.",
            "proj.p5_b3": "<strong>Transactions:</strong> Asynchronous queue processing to handle hundreds of concurrent financial requests safely.",
            "proj.p5_b4": "<strong>Stack:</strong> JavaScript, Node.js, Beninese payment APIs, RSA Cryptography.",

            "proj.p6_title": "AI PO Translator",
            "proj.p6_desc": "Intelligent localization application designed to automatically translate gettext translation files (.po).",
            "proj.p6_b1": "<strong>Multi-Engine:</strong> Translation powered by local AI running on CPU or GPU (PyTorch) depending on hardware, or Google Translate API integration.",
            "proj.p6_b2": "<strong>Localization:</strong> Automated parsing and processing of large gettext files while fully preserving variables, spacing, and formatting.",
            "proj.p6_b3": "<strong>Interface:</strong> Built as a CLI tool and backend API ready to integrate with software localization pipelines (CI/CD).",
            "proj.p6_b4": "<strong>Stack:</strong> Python, Polib, PyTorch (CPU/GPU acceleration), Google Cloud Translation API.",

            "proj.p7_title": "Naxo AI",
            "proj.p7_desc": "Intelligent automated ordering and customer assistant agent custom-built for restaurants.",
            "proj.p7_b1": "<strong>AI Orders:</strong> NLP classification to analyze customer queries and extract dishes ordered and their quantities.",
            "proj.p7_b2": "<strong>FAQ Assistant:</strong> Automated responses regarding the menu, opening hours, allergy warnings, and bookings.",
            "proj.p7_b3": "<strong>POS Integration:</strong> Seamlessly dispatches validated customer orders directly to kitchen point-of-sale displays.",
            "proj.p7_b4": "<strong>Stack:</strong> Node.js, NLP Classification, WebSocket, Django API.",

            "proj.p8_title": "Optimus",
            "proj.p8_desc": "Multi-user algorithmic trading platform, strategy backtesting engine, and real-time order dispatcher.",
            "proj.p8_b1": "<strong>Auto Trading:</strong> Executes financial orders based on algorithm-driven trading signals.",
            "proj.p8_b2": "<strong>Backtesting:</strong> Historically simulates trading strategies and calculates key performance metrics (Sharpe, Drawdown, Profit Factor).",
            "proj.p8_b3": "<strong>Multi-User:</strong> Absolute client account isolation and encrypted broker API credentials storage.",
            "proj.p8_b4": "<strong>Stack:</strong> Python, Django, Celery/Redis, Pandas, MetaTrader API, Redis WebSockets.",

            // Blog/Veille
            "blog.title": "Cyber & AI <span>Blog</span>",
            "blog.a1_title": "Securing Django Against OWASP Top 10",
            "blog.a1_desc": "Practical guide on configuring Django middleware, protecting against Clickjacking, XSS, and SQL injection.",
            "blog.a2_title": "SOAR Orchestration: Connecting Wazuh and TheHive",
            "blog.a2_desc": "How to automate incident response by transmitting system security alerts in real-time to a case manager.",
            "blog.a3_title": "Local RAG: Sovereign AI in the Enterprise",
            "blog.a3_desc": "Technical exploration of hosting local LLMs via Ollama and pgvector to secure internal enterprise data.",
            "blog.read_more": "Read Article",

            // Recommandations
            "rec.title": "Recommendations & <span>Testimonials</span>",

            // Compétences
            "skills.title": "Skills <span>Matrix</span>",
            "skills.sec_title": "Security & SecOps",
            "skills.dev_title": "Development & Cloud",
            "skills.tools_title": "AI Engineering & Tools",

            // Formations
            "edu.title": "Education & <span>Pathways</span>",
            "edu.degree": "Bachelor's Degree in Computer Science — Networks & Telecoms",
            "edu.notes": "With Honors (Très Bien) — Specialization in Systems, Networks, and Security.",

            // Contact
            "contact.title": "Initialize <span>Connection</span>",
            "contact.subtitle": "Establish a communication tunnel",
            "contact.desc": "Feel free to reach out for any collaboration opportunities or secure technical exchanges.",
            "contact.name_label": "Name / Organization *",
            "contact.name_placeholder": "Enter your name",
            "contact.email_label": "Email Address *",
            "contact.email_placeholder": "name@example.com",
            "contact.subject_label": "Subject *",
            "contact.subject_placeholder": "Subject of your message",
            "contact.message_label": "Message *",
            "contact.message_placeholder": "Your message...",
            "contact.send_btn": "Send packet",
        }
    };

    function updateLanguage(lang) {
        currentLanguage = lang;
        document.querySelectorAll("[data-i18n]").forEach(elem => {
            const key = elem.getAttribute("data-i18n");
            if (translations[lang][key]) {
                elem.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
            const key = elem.getAttribute("data-i18n-placeholder");
            if (translations[lang][key]) {
                elem.setAttribute("placeholder", translations[lang][key]);
            }
        });
    }

    // Bind language buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            updateLanguage(btn.getAttribute("data-lang"));
        });
    });


    // ==========================================================================
    // INTERACTIVE CANVAS PARTICLES (Teal theme color)
    // ==========================================================================
    const canvas = document.getElementById("particles-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let particles = [];
        const mouse = { x: null, y: null, radius: 100 };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = (Math.random() - 0.5) * 0.8;
                // Teal accent color in particles
                this.color = Math.random() > 0.35 ? "rgba(62, 207, 207, 0.4)" : "rgba(255, 255, 255, 0.35)";
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Collision detection with edges
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

                // Mouse interactive force (repulsion)
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.hypot(dx, dy);
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        let directionX = dx / distance;
                        let directionY = dy / distance;
                        this.x -= directionX * force * 5;
                        this.y -= directionY * force * 5;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 80);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.hypot(dx, dy);

                    if (distance < 120) {
                        let opacity = (120 - distance) / 120 * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.strokeStyle = `rgba(62, 207, 207, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }


    // ==========================================================================
    // STICKY HEADER & SCROLL TRACKING
    // ==========================================================================
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 120; // offset

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });


    // ==========================================================================
    // RESPONSIVE MENU BURGER
    // ==========================================================================
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const icon = menuToggle.querySelector(".material-symbols-outlined");
            if (navMenu.classList.contains("active")) {
                icon.textContent = "close";
            } else {
                icon.textContent = "menu";
            }
        });

        // Close menu on link click
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.querySelector(".material-symbols-outlined").textContent = "menu";
            });
        });
    }


    // ==========================================================================
    // ACCORDION EXCLUSIF POUR PROJETS
    // ==========================================================================
    document.querySelectorAll(".project-card").forEach(card => {
        const btn = card.querySelector(".project-btn-details");
        if (btn) {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const isActive = card.classList.contains("active");

                // Collapse all cards first
                document.querySelectorAll(".project-card").forEach(c => {
                    c.classList.remove("active");
                    const t = c.querySelector(".btn-text");
                    if (t) t.textContent = currentLanguage === "fr" ? "Détails" : "Details";
                });

                // Open this card if it wasn't open
                if (!isActive) {
                    card.classList.add("active");
                    const t = card.querySelector(".btn-text");
                    if (t) t.textContent = currentLanguage === "fr" ? "Réduire" : "Collapse";
                }
            });
        }
    });


    // ==========================================================================
    // BENTO SYSTEM COMPLIANCE LOGS CONSOLE (Teal accents)
    // ==========================================================================
    const bentoConsole = document.getElementById("bento-console");
    if (bentoConsole) {
        const logs = [
            "Checking SSL/TLS cipher suites...",
            "OWASP top 10 compliance scan running...",
            "Verifying JWT signature algorithm (RS256)...",
            "Active Directory authorization audit...",
            "Analyzing Django security middleware settings...",
            "Wazuh SIEM agent reports heartbeat...",
            "Celery queue status: 0 pending jobs...",
            "Verifying Rate limiting CORS policies...",
            "RBAC compliance engine integrity check...",
            "OpenVAS compliance scan complete: 0 vulnerabilities found.",
            "Testing API authentication gateway...",
            "Checking PostgreSQL encrypted storage states...",
            "Auditing container image dependencies..."
        ];

        let logIndex = 0;

        function addBentoLog() {
            const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
            const rawLog = logs[logIndex % logs.length];
            const line = document.createElement("div");
            line.className = "console-log-line";
            line.innerHTML = `[${timestamp}] ${rawLog} <span class="ok">[OK]</span>`;
            
            bentoConsole.appendChild(line);
            
            // Limit line count to prevent lag
            if (bentoConsole.childNodes.length > 8) {
                bentoConsole.removeChild(bentoConsole.firstChild);
            }
            
            bentoConsole.scrollTop = bentoConsole.scrollHeight;
            logIndex++;

            setTimeout(addBentoLog, Math.random() * 2000 + 2000); // 2-4s
        }
        addBentoLog();
    }


    // ==========================================================================
    // INTERACTIVE TERMINAL SIMULATOR (Teal prompt and updates)
    // ==========================================================================
    const terminalOutput = document.getElementById("terminal-output");
    const terminalInput = document.getElementById("terminal-input");
    let bootIndex = 0;

    const bootSequence = [
        { text: "ssh pio@sec-arch", type: "command" },
        { text: "Authenticating with RSA public key...", type: "info" },
        { text: "Connection established. Welcome to Sec-Arch CLI v3.1.2", type: "success" },
        { text: "Status: SECURE | Encryption: AES-256-GCM | OS: Debian Security", type: "success" },
        { text: "Type 'help' to review active secure protocols.", type: "warn" }
    ];

    function appendTerminalLine(text, type = "info") {
        if (!terminalOutput) return;

        const line = document.createElement("div");
        line.className = `terminal-line ${type}`;

        if (type === "command") {
            line.innerHTML = `<span class="prompt">pio@sec-arch:~$</span> ${text}`;
        } else {
            line.innerHTML = text; // allow HTML tags
        }

        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function playBootSequence() {
        if (bootIndex < bootSequence.length) {
            const item = bootSequence[bootIndex];
            appendTerminalLine(item.text, item.type);
            bootIndex++;
            setTimeout(playBootSequence, 600);
        } else {
            if (terminalInput) {
                terminalInput.removeAttribute("disabled");
                terminalInput.focus();
            }
        }
    }
    setTimeout(playBootSequence, 500);

    const helpInfo = {
        fr: {
            "help": "Affiche les commandes de diagnostic disponibles.",
            "cv": "Télécharge et affiche le CV PDF.",
            "whoami": "Affiche les détails de l'identité du profil.",
            "skills": "Renvoie la matrice complète de compétences.",
            "projects": "Énumère les réalisations techniques SecOps & IA.",
            "scan [IP]": "Effectue une simulation de scan Nmap sécurisé.",
            "matrix": "Lance l'effet de flux décrypté Matrix.",
            "history": "Affiche l'historique des requêtes CLI.",
            "contact": "Fournit les canaux de communication sécurisés.",
            "clear": "Vide la mémoire tampon de la console."
        },
        en: {
            "help": "Displays diagnostic helper utilities.",
            "cv": "Downloads and displays the CV PDF.",
            "whoami": "Displays user identity details.",
            "skills": "Outputs the engineering skills matrix.",
            "projects": "Lists core SecOps & AI development achievements.",
            "scan [IP]": "Executes a simulated secure Nmap scan.",
            "matrix": "Executes Matrix decrypt stream effect.",
            "history": "Displays command request history.",
            "contact": "Displays secured communication channels.",
            "clear": "Clears CLI console buffer."
        }
    };

    if (terminalInput) {
        terminalInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const cmdText = terminalInput.value.trim();
                terminalInput.value = "";
                if (!cmdText) return;

                appendTerminalLine(cmdText, "command");

                const args = cmdText.split(" ");
                const cmd = args[0].toLowerCase();

                setTimeout(() => {
                    executeCommand(cmd, args.slice(1));
                }, 100);
            }
        });
    }

    // Command history tracking
    const commandHistory = [];

    function executeCommand(cmd, args) {
        const lang = currentLanguage;
        commandHistory.push(cmd + (args.length ? " " + args.join(" ") : ""));

        if (cmd === "help") {
            const cmdList = helpInfo[lang];
            appendTerminalLine(lang === "fr" ? "--- UTILS DE DIAGNOSTIC ---" : "--- SECURE DIAGNOSTIC PROTOCOLS ---", "info");
            for (let c in cmdList) {
                appendTerminalLine(`  <span style="color: var(--accent-primary); font-weight: bold;">${c}</span> : ${cmdList[c]}`);
            }
            appendTerminalLine(`  <span style="color: var(--accent-primary); font-weight: bold;">whoami</span> : ${lang === "fr" ? "Affiche votre identité d'invité." : "Displays guest user info."}`);
            appendTerminalLine(`  <span style="color: var(--accent-primary); font-weight: bold;">matrix</span> : ${lang === "fr" ? "Décode le flux Matrix local." : "Decodes the local Matrix stream."}`);
            appendTerminalLine(`  <span style="color: var(--accent-primary); font-weight: bold;">history</span> : ${lang === "fr" ? "Affiche l'historique des commandes." : "Displays typed command history."}`);
        } 
        else if (cmd === "cv") {
            if (lang === "fr") {
                appendTerminalLine("Initialisation du téléchargement du CV PDF...");
                appendTerminalLine("Profil : Pio Francois ACAKPOVI");
                appendTerminalLine("Rôle : Développeur Full Stack | DevSecOps | Architecte SOAR & IA (RAG)");
            } else {
                appendTerminalLine("Initializing CV PDF download...");
                appendTerminalLine("Profile: Pio Francois ACAKPOVI");
                appendTerminalLine("Role: Full Stack Developer | DevSecOps | SOAR & AI (RAG) Architect");
            }
            window.open('cv.pdf', '_blank');
            appendTerminalLine("[OK] CV ouvert dans un nouvel onglet.", "success");
        } 
        else if (cmd === "whoami") {
            appendTerminalLine(`
<pre style="color: var(--accent-primary); font-size: 0.7rem; line-height: 1.1; margin: 8px 0;">
  ____ ___ ___     ____  _____ ____ 
 |  _ \\_ _/ _ \\   / ___|| ____/ ___|
 | |_) | | | | |  \\___ \\|  _| | |    
 |  __/| | |_| |   ___) | |___| |___ 
 |_|  |___\\___/   |____/|_____|\\____|
</pre>
            `, "info");
            if (lang === "fr") {
                appendTerminalLine("Utilisateur : invité@sec-arch");
                appendTerminalLine("Pio Francois ACAKPOVI — Développeur Full Stack & SecOps.");
                appendTerminalLine("Spécialisé en sécurité Django, SOAR (Wazuh/TheHive) et RAG local.");
            } else {
                appendTerminalLine("User: guest@sec-arch");
                appendTerminalLine("Pio Francois ACAKPOVI — Full Stack & SecOps Developer.");
                appendTerminalLine("Specialized in Django security, SOAR (Wazuh/TheHive) and local RAG.");
            }
        }
        else if (cmd === "matrix") {
            appendTerminalLine(lang === "fr" ? "Connexion au flux brut..." : "Connecting to raw stream...", "warn");
            let lines = 0;
            if (terminalInput) terminalInput.setAttribute("disabled", "true");
            
            const matrixInterval = setInterval(() => {
                let stream = "";
                for (let i = 0; i < 35; i++) {
                    stream += Math.random() > 0.5 ? "1" : "0";
                }
                appendTerminalLine(`<span style="color: var(--accent-green); opacity: ${Math.random().toFixed(2)};">${stream}</span>`, "info");
                lines++;
                if (lines > 25) {
                    clearInterval(matrixInterval);
                    if (terminalInput) terminalInput.removeAttribute("disabled");
                    appendTerminalLine(lang === "fr" ? "[OK] Flux décrypté. Session restaurée." : "[OK] Stream decrypted. Session restored.", "success");
                }
            }, 80);
        }
        else if (cmd === "history") {
            appendTerminalLine(lang === "fr" ? "--- HISTORIQUE DES COMMANDES ---" : "--- COMMAND HISTORY ---", "info");
            commandHistory.forEach((h, i) => {
                appendTerminalLine(`  ${i + 1} : ${h}`);
            });
        }
        else if (cmd === "skills") {
            appendTerminalLine(lang === "fr" ? "--- MATRICE DE COMPÉTENCES ---" : "--- SKILLS MATRIX SUMMARY ---", "info");
            appendTerminalLine("  [CYBER] OWASP, SIEM/SOC, Wazuh, OpenVAS, TheHive, Active Directory, Audits code.");
            appendTerminalLine("  [STACK] Python, Django (DRF), JavaScript, TypeScript, React, Next.js, Docker, AWS.");
            appendTerminalLine("  [AI/SOAR] Ollama, RAG architectures, LLM APIs (OpenAI/Groq), Celery, Redis.");
        } 
        else if (cmd === "projects") {
            appendTerminalLine(lang === "fr" ? "--- PROJETS CLÉS ---" : "--- FEATURED PROJECTS ---", "info");
            appendTerminalLine("  1. Solution Globale de Cybersécurité, GRC & ITAM");
            appendTerminalLine("  2. Plateforme de Gestion des Habilitations");
            appendTerminalLine("  3. Plateforme SaaS de Simulation d'Entretiens IA");
            appendTerminalLine("  4. COVERSE IA (Ollama, Python backend)");
            appendTerminalLine("  5. Paidsbet (MTN MoMo/Stripe integration)");
            appendTerminalLine("  6. Traducteur PO IA (AI pofile locale GPU/CPU parser)");
            appendTerminalLine("  7. Naxo IA (Restaurant chatbot order extractor)");
            appendTerminalLine("  8. Optimus (Algorithmic trading platform & backtester)");
        } 
        else if (cmd === "scan") {
            if (args.length === 0) {
                appendTerminalLine(lang === "fr" ? "Erreur : cible IP manquante (Usage: scan [IP])" : "Error: missing target IP (Usage: scan [IP])", "danger");
                return;
            }
            const ip = args[0];
            appendTerminalLine(lang === "fr" ? `Initialisation du scan Nmap sur la cible ${ip}...` : `Initializing Nmap port discovery on ${ip}...`, "info");
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += 20;
                let bar = "[";
                for (let i = 0; i < 10; i++) {
                    bar += i < progress / 10 ? "=" : ".";
                }
                bar += `] ${progress}%`;
                appendTerminalLine(bar, "info");

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        appendTerminalLine(lang === "fr" ? "Scan achevé. Analyse des ports :" : "Discovery scan completed. Open ports:", "success");
                        appendTerminalLine("  22/tcp  <span style='color: var(--accent-green);'>open</span>  ssh (OpenSSH 8.4p1 Security-Hardened)");
                        appendTerminalLine("  80/tcp  <span style='color: var(--accent-green);'>open</span>  http (Django App Server - Gunicorn)");
                        appendTerminalLine("  443/tcp <span style='color: var(--accent-green);'>open</span>  https (Nginx TLS v1.3 handshake active)");
                        appendTerminalLine("  5432/tcp <span style='color: var(--accent-yellow);'>filtered</span> postgresql (Protected via Host Firewall)");
                        appendTerminalLine(lang === "fr" ? "[COMPLIANCE] Aucune vulnérabilité critique OWASP détectée." : "[COMPLIANCE] No critical OWASP vulnerabilities detected.", "success");
                    }, 200);
                }
            }, 300);
        } 
        else if (cmd === "contact") {
            appendTerminalLine(lang === "fr" ? "--- CANAUX SÉCURISÉS ---" : "--- SECURE CHANNELS ---", "info");
            appendTerminalLine("  Email: pioacakpovi@gmail.com");
            appendTerminalLine("  Phone: +229 0197575034");
            appendTerminalLine("  LinkedIn: https://www.linkedin.com/in/pio-acakpovi/");
        } 
        else if (cmd === "clear") {
            if (terminalOutput) terminalOutput.innerHTML = "";
        } 
        else {
            appendTerminalLine(lang === "fr" ? `Commande inconnue : ${cmd}. Tapez 'help' pour les diagnostics.` : `Unknown instruction: ${cmd}. Type 'help' for diagnostics.`, "danger");
        }
    }


    // ==========================================================================
    // CONTACT SECURE FORM TRANSMISSION (Web3Forms integration with Simulation mode)
    // ==========================================================================
    const contactForm = document.getElementById("secure-contact-form");
    const contactConsole = document.getElementById("contact-console-container");
    const contactConsoleLogs = document.getElementById("contact-console-logs");

    if (contactForm && contactConsole && contactConsoleLogs) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Honeypot anti-spam check
            const honeypot = document.getElementById("security_token").value;
            if (honeypot) {
                alert("Bot verification failed.");
                return;
            }

            const name = document.getElementById("form-name").value;
            const email = document.getElementById("form-email").value;
            const subject = document.getElementById("form-subject").value;
            const message = document.getElementById("form-message").value;
            const accessKeyVal = contactForm.querySelector('input[name="access_key"]').value;

            // Hide form and show log console
            contactForm.classList.add("hidden");
            contactConsole.classList.remove("hidden");
            contactConsoleLogs.innerHTML = "";

            const isDemoMode = (accessKeyVal === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || !accessKeyVal);

            const frLogs = [
                { text: `[INIT] Demande de connexion reçue de ${name} (${email})...`, type: "info" },
                { text: "[TLS] Négociation du tunnel TLS v1.3... [OK]", type: "success" },
                { text: "[KEY] Échange de clés ECDHE-ECDSA-AES256-GCM-SHA384 active...", type: "info" },
                { text: "[CRYPT] Chiffrement de la charge utile (Message) via AES-256-GCM... [OK]", type: "success" },
                { text: isDemoMode ? "[DEMO] Mode simulation actif (Clé API non configurée)." : "[SEND] Transmission en temps réel vers api.web3forms.com...", type: "warn" },
                { text: "[SEND] Envoi sécurisé du paquet...", type: "info" }
            ];

            const enLogs = [
                { text: `[INIT] Secure connection request received from ${name} (${email})...`, type: "info" },
                { text: "[TLS] Negotiating TLS v1.3 tunnel... [OK]", type: "success" },
                { text: "[KEY] ECDHE-ECDSA-AES256-GCM-SHA384 key exchange initialized...", type: "info" },
                { text: "[CRYPT] Encrypting message payload via AES-256-GCM... [OK]", type: "success" },
                { text: isDemoMode ? "[DEMO] Simulation mode active (Access Key not configured)." : "[SEND] Dispatched to api.web3forms.com server...", type: "warn" },
                { text: "[SEND] Transmission of the payload...", type: "info" }
            ];

            let activeFormLogs = currentLanguage === "fr" ? frLogs : enLogs;
            let logStep = 0;

            function playTransmissionLogs() {
                if (logStep < activeFormLogs.length) {
                    const line = document.createElement("div");
                    line.className = `terminal-line ${activeFormLogs[logStep].type}`;
                    line.innerHTML = activeFormLogs[logStep].text;
                    contactConsoleLogs.appendChild(line);
                    contactConsoleLogs.scrollTop = contactConsoleLogs.scrollHeight;
                    logStep++;
                    setTimeout(playTransmissionLogs, 600);
                } else {
                    // Triggers API Call or Mock success
                    if (isDemoMode) {
                        setTimeout(() => {
                            const line1 = document.createElement("div");
                            line1.className = "terminal-line success";
                            line1.innerHTML = currentLanguage === "fr" ? "[STATUS] Données transmises (MOCK). Code de statut 200." : "[STATUS] Payload simulated. Status 200.";
                            contactConsoleLogs.appendChild(line1);

                            const line2 = document.createElement("div");
                            line2.className = "terminal-line warn";
                            line2.innerHTML = currentLanguage === "fr" ? "[CONN] Fermeture du tunnel simulé. Session terminée." : "[CONN] Simulated channel terminated. Handshake closed.";
                            contactConsoleLogs.appendChild(line2);

                            const line3 = document.createElement("div");
                            line3.className = "terminal-line success";
                            line3.innerHTML = currentLanguage === "fr" ? `<span style="color:var(--accent-primary);font-weight:bold;">[SUCCÈS (MOCK)] Connexion réussie ! Message envoyé (Simulation).</span>` : `<span style="color:var(--accent-primary);font-weight:bold;">[SUCCESS (MOCK)] Handshake complete! Message sent securely (Simulation).</span>`;
                            contactConsoleLogs.appendChild(line3);
                            contactConsoleLogs.scrollTop = contactConsoleLogs.scrollHeight;
                        }, 500);
                    } else {
                        // Real Web3Forms Submission
                        const formData = new FormData(contactForm);
                        const object = Object.fromEntries(formData);
                        const json = JSON.stringify(object);

                        fetch('https://api.web3forms.com/submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: json
                        })
                        .then(async (response) => {
                            let res = await response.json();
                            const line1 = document.createElement("div");
                            if (response.status === 200) {
                                line1.className = "terminal-line success";
                                line1.innerHTML = currentLanguage === "fr" ? "[STATUS] Données transmises avec succès. Code de statut 200." : "[STATUS] Payload successfully dispatched. Response status code 200.";
                                contactConsoleLogs.appendChild(line1);

                                const line2 = document.createElement("div");
                                line2.className = "terminal-line success";
                                line2.innerHTML = currentLanguage === "fr" ? `<span style="color:var(--accent-primary);font-weight:bold;">[SUCCÈS] Connexion sécurisée réussie ! Merci, message envoyé.</span>` : `<span style="color:var(--accent-primary);font-weight:bold;">[SUCCESS] Transmission complete! Thank you, message sent.</span>`;
                                contactConsoleLogs.appendChild(line2);
                            } else {
                                line1.className = "terminal-line danger";
                                line1.innerHTML = `[STATUS] Error dispatching payload: ${res.message || response.status}`;
                                contactConsoleLogs.appendChild(line1);
                            }
                            contactConsoleLogs.scrollTop = contactConsoleLogs.scrollHeight;
                        })
                        .catch((error) => {
                            const line1 = document.createElement("div");
                            line1.className = "terminal-line danger";
                            line1.innerHTML = `[STATUS] Net connectivity error: ${error.message}`;
                            contactConsoleLogs.appendChild(line1);
                            contactConsoleLogs.scrollTop = contactConsoleLogs.scrollHeight;
                        });
                    }
                }
            }
            playTransmissionLogs();
        });
    }

    // ==========================================================================
    // EXTRA 1: SCROLL REVEAL (IntersectionObserver)
    // ==========================================================================
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });

    // ==========================================================================
    // EXTRA 2: STATS COUNT ANIMATION
    // ==========================================================================
    const statsSection = document.querySelector(".stats-grid");
    let statsAnimated = false;

    function animateStats() {
        const stats = document.querySelectorAll(".stat-num");
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-target"), 10);
            let count = 0;
            const speed = target / 50; // Speed factor
            
            const counter = setInterval(() => {
                count += speed;
                if (count >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(count);
                }
            }, 30);
        });
    }

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    animateStats();
                    statsAnimated = true;
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // ==========================================================================
    // EXTRA 3: MODE CLAIR / SOMBRE
    // ==========================================================================
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        // Load saved theme
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme === "light") {
            document.documentElement.classList.add("light-mode");
            themeToggle.querySelector(".material-symbols-outlined").textContent = "dark_mode";
        }

        themeToggle.addEventListener("click", () => {
            document.documentElement.classList.toggle("light-mode");
            const isLight = document.documentElement.classList.contains("light-mode");
            localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
            
            const icon = themeToggle.querySelector(".material-symbols-outlined");
            icon.textContent = isLight ? "dark_mode" : "light_mode";
        });
    }

    // ==========================================================================
    // EXTRA 4: TIMELINE ACCORDION TOGGLE
    // ==========================================================================
    document.querySelectorAll(".timeline-item").forEach(item => {
        const toggleBtn = item.querySelector(".timeline-toggle-btn");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                
                // Collapse this item if it was open, otherwise open
                item.classList.toggle("active");
                
                const btnText = toggleBtn.querySelector(".btn-text");
                if (btnText) {
                    if (isActive) {
                        btnText.textContent = currentLanguage === "fr" ? "Missions & Tâches" : "Missions & Tasks";
                    } else {
                        btnText.textContent = currentLanguage === "fr" ? "Réduire" : "Collapse";
                    }
                }
            });
        }
    });

    // ==========================================================================
    // EXTRA 5: PROJECT CATEGORY FILTERS
    // ==========================================================================
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category.includes(filterValue)) {
                    card.classList.remove("filtered-out");
                } else {
                    card.classList.add("filtered-out");
                }
            });
        });
    });

    // ==========================================================================
    // EXTRA 6: BLOG ARTICLES MODAL VIEWER
    // ==========================================================================
    const blogBtnReads = document.querySelectorAll(".blog-btn-read");
    const articleModal = document.getElementById("article-modal");
    const modalCloseBtn = document.querySelector(".modal-close-btn");
    const modalContent = document.getElementById("modal-article-content");

    const articlesContent = {
        django: {
            fr: `
                <h2>Sécuriser Django face au OWASP Top 10</h2>
                <div class="article-meta">Publié le 05 Juin 2026 | Catégorie: DevSecOps</div>
                <p>Django est réputé pour sa philosophie "batteries incluses" qui intègre de nombreuses protections de base, mais une mauvaise configuration de déploiement peut laisser le système exposé aux vulnérabilités courantes.</p>
                
                <h3>1. Configuration Strict des Middleware</h3>
                <p>Pour contrer le clickjacking et le cross-site scripting (XSS), assurez-vous d'activer les middleware par défaut et d'ajouter les directives SSL obligatoires dans votre <code>settings.py</code> :</p>
                <p><code>SECURE_SSL_REDIRECT = True</code><br><code>SESSION_COOKIE_SECURE = True</code><br><code>CSRF_COOKIE_SECURE = True</code></p>

                <h3>2. SQL Injections (SQLi)</h3>
                <p>L'ORM de Django protège nativement contre les injections SQL grâce à l'utilisation systématique de requêtes paramétrées. Cependant, l'utilisation de requêtes brutes <code>RawSQL</code> ou de l'option <code>extra()</code> doit être auditée et restreinte au strict minimum.</p>

                <h3>3. Protection CSRF</h3>
                <p>Le token CSRF doit être présent sur chaque requête POST/PUT. Évitez de désactiver la protection CSRF sur vos APIs, préférez une gestion par token de session JWT sécurisés avec cycle de vie court.</p>
            `,
            en: `
                <h2>Securing Django Against OWASP Top 10</h2>
                <div class="article-meta">Published on June 05, 2026 | Category: DevSecOps</div>
                <p>Django is famous for its "batteries included" philosophy that integrates many default protections, but incorrect deployment settings can leave the system exposed to common security vulnerabilities.</p>
                
                <h3>1. Strict Middleware Configuration</h3>
                <p>To combat clickjacking and cross-site scripting (XSS), make sure to keep default middleware active and add mandatory SSL directives to your <code>settings.py</code>:</p>
                <p><code>SECURE_SSL_REDIRECT = True</code><br><code>SESSION_COOKIE_SECURE = True</code><br><code>CSRF_COOKIE_SECURE = True</code></p>

                <h3>2. SQL Injections (SQLi)</h3>
                <p>Django's ORM protects natively against SQL injections by systematically using parameterized queries. However, using raw queries like <code>RawSQL</code> or the <code>extra()</code> option must be audited and restricted to a strict minimum.</p>

                <h3>3. CSRF Protection</h3>
                <p>The CSRF token must be present on every POST/PUT request. Avoid disabling CSRF protections on your APIs; instead, opt for secure session JWT tokens with short lifespans.</p>
            `
        },
        soar: {
            fr: `
                <h2>Orchestration SOAR : Connecter Wazuh et TheHive</h2>
                <div class="article-meta">Publié le 28 Mai 2026 | Catégorie: SecOps</div>
                <p>L'intégration d'un SIEM comme Wazuh avec un gestionnaire de cas d'incidents de sécurité comme TheHive permet d'accélérer drastiquement le temps de détection et de réponse de votre SOC.</p>
                
                <h3>1. Ingestion d'alertes via Wazuh</h3>
                <p>Wazuh capture les journaux systèmes (syslogs, auth logs, audits d'intégrité de fichiers) et déclenche des alertes en fonction de règles prédéfinies. Une alerte avec un niveau de sévérité critique (ex: >= 7) doit générer automatiquement un incident.</p>

                <h3>2. Liaison API asynchrone</h3>
                <p>Grâce à des tâches planifiées gérées par un orchestrateur (comme un script Python ou une suite Celery/Redis), l'alerte Wazuh est parsée et envoyée sous forme de requête POST au point de terminaison API de TheHive.</p>

                <h3>3. Remédiation rapide</h3>
                <p>Le SOC Analyst reçoit instantanément le cas sur TheHive avec toutes les données contextuelles (IP source, logs bruts, hôte ciblé), facilitant une remédiation rapide et ciblée.</p>
            `,
            en: `
                <h2>SOAR Orchestration: Connecting Wazuh and TheHive</h2>
                <div class="article-meta">Published on May 28, 2026 | Category: SecOps</div>
                <p>Integrating a SIEM like Wazuh with an incident response case manager like TheHive drastically accelerates detection and response times inside your SOC.</p>
                
                <h3>1. Ingestion of Alerts via Wazuh</h3>
                <p>Wazuh captures system logs (syslogs, auth logs, file integrity audits) and triggers alerts based on predefined rules. A critical alert severity level (e.g. >= 7) should automatically initiate an incident response case.</p>

                <h3>2. Asynchronous API Linking</h3>
                <p>Using background tasks managed by an orchestrator (like a custom Python script or Celery/Redis workflow), the Wazuh alert is parsed and sent via a secure POST request to TheHive's API endpoint.</p>

                <h3>3. Accelerated Remediation</h3>
                <p>The SOC Analyst instantly receives the case on TheHive complete with contextual data (source IP, raw logs, target host), allowing for quick and targeted containment actions.</p>
            `
        },
        rag: {
            fr: `
                <h2>RAG Local : L'IA Souveraine en Entreprise</h2>
                <div class="article-meta">Publié le 15 Mai 2026 | Catégorie: IA / RAG</div>
                <p>L'utilisation de modèles d'IA générative cloud pose d'importants défis en matière de confidentialité des données. Le RAG (Retrieval-Augmented Generation) local permet d'interroger vos documents internes en toute sécurité.</p>
                
                <h3>1. Vectorisation Locale (Embeddings)</h3>
                <p>Les documents d'entreprise (PDF, DOCX) sont parsés et convertis en vecteurs numériques en utilisant des modèles d'embedding exécutés localement (ex: 'nomic-embed-text' sous Ollama).</p>

                <h3>2. Base de Données Vectorielle</h3>
                <p>Ces vecteurs sont stockés dans une base de données compatible comme PostgreSQL (avec l'extension <code>pgvector</code>) ou ChromaDB, garantissant que vos index de données restent stockés sur vos serveurs internes.</p>

                <h3>3. Orchestration et Modèle LLM Local</h3>
                <p>Lorsqu'un utilisateur pose une question, le système recherche les extraits de documents les plus similaires et les injecte dans le contexte du prompt d'un modèle LLM local (comme Llama 3) exécuté via Ollama pour formuler une réponse sécurisée et contextualisée.</p>
            `,
            en: `
                <h2>Local RAG: Sovereign AI in the Enterprise</h2>
                <div class="article-meta">Published on May 15, 2026 | Category: AI / RAG</div>
                <p>Using cloud-based generative AI models poses significant data privacy risks. Implementing Retrieval-Augmented Generation (RAG) locally allows querying internal files securely.</p>
                
                <h3>1. Local Vectorization (Embeddings)</h3>
                <p>Corporate documents (PDF, DOCX) are parsed and converted to numerical vector representations using embedding models executed locally (e.g. 'nomic-embed-text' via Ollama).</p>

                <h3>2. Vector Database Storage</h3>
                <p>These vectors are stored in a local database like PostgreSQL (using the <code>pgvector</code> extension) or ChromaDB, ensuring that your data indices never leave your internal servers.</p>

                <h3>3. Local LLM Orchestration</h3>
                <p>When a user submits a query, the system retrieves the most similar text chunks and injects them as prompt context to a local LLM model (such as Llama 3) running via Ollama, generating a secure and contextualized response.</p>
            `
        }
    };

    blogBtnReads.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const articleId = btn.getAttribute("data-article");
            let key = "";
            if (articleId.includes("django")) key = "django";
            else if (articleId.includes("soar")) key = "soar";
            else if (articleId.includes("rag")) key = "rag";

            if (articlesContent[key]) {
                modalContent.innerHTML = articlesContent[key][currentLanguage];
                articleModal.classList.remove("hidden");
                document.body.style.overflow = "hidden"; // disable scroll
            }
        });
    });

    if (modalCloseBtn && articleModal) {
        const closeModal = () => {
            articleModal.classList.add("hidden");
            document.body.style.overflow = "auto";
        };
        modalCloseBtn.addEventListener("click", closeModal);
        articleModal.querySelector(".modal-overlay").addEventListener("click", closeModal);
    }

    // ==========================================================================
    // EXTRA 7: RECOMMANDATIONS CAROUSEL SLIDER
    // ==========================================================================
    const recCarousel = document.querySelector(".recommandations-carousel");
    if (recCarousel) {
        const track = recCarousel.querySelector(".recommandations-track");
        const cards = recCarousel.querySelectorAll(".recommendation-card");
        const dots = recCarousel.querySelectorAll(".carousel-dot");
        let activeIndex = 0;
        let slideInterval = null;

        function updateSlide(index) {
            activeIndex = index;
            track.style.transform = `translateX(-${index * 100}%)`;
            
            cards.forEach((c, idx) => {
                c.classList.toggle("active", idx === index);
            });

            dots.forEach((d, idx) => {
                d.classList.toggle("active", idx === index);
            });
        }

        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                const idx = parseInt(dot.getAttribute("data-index"), 10);
                updateSlide(idx);
                resetAutoSlide();
            });
        });

        function autoSlide() {
            let nextIndex = (activeIndex + 1) % cards.length;
            updateSlide(nextIndex);
        }

        function startAutoSlide() {
            slideInterval = setInterval(autoSlide, 5000);
        }

        function resetAutoSlide() {
            clearInterval(slideInterval);
            startAutoSlide();
        }

        startAutoSlide();
    }

    // ==========================================================================
    // EXTRA 8: DYNAMIC GITHUB API STATS
    // ==========================================================================
    const githubContent = document.getElementById("github-api-content");
    if (githubContent) {
        const username = "pioacakpovi"; // target profile
        
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) throw new Error("API Limit reached or user not found");
            return response.json();
        })
        .then(userData => {
            // Now fetch repos count or calculate stars
            fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            .then(res => res.json())
            .then(repos => {
                let stars = 0;
                let langStats = {};
                repos.forEach(repo => {
                    stars += repo.stargazers_count;
                    if (repo.language) {
                        langStats[repo.language] = (langStats[repo.language] || 0) + 1;
                    }
                });

                // Find top language
                let topLang = "Python";
                let maxCount = 0;
                for (let l in langStats) {
                    if (langStats[l] > maxCount) {
                        maxCount = langStats[l];
                        topLang = l;
                    }
                }

                // Render dynamic card content
                githubContent.className = "github-stats-container";
                githubContent.innerHTML = `
                    <div class="github-stat-item">
                        <span class="github-label">Repositories</span>
                        <span class="github-val">${userData.public_repos || repos.length}</span>
                    </div>
                    <div class="github-stat-item">
                        <span class="github-label">Gists</span>
                        <span class="github-val">${userData.public_gists || 0}</span>
                    </div>
                    <div class="github-stat-item">
                        <span class="github-label">Top Lang</span>
                        <span class="github-val">${topLang}</span>
                    </div>
                    <a href="${userData.html_url}" target="_blank" rel="noopener noreferrer" class="github-link">
                        <span>github.com/${username}</span>
                        <span class="material-symbols-outlined" style="font-size: 14px;">open_in_new</span>
                    </a>
                `;
            });
        })
        .catch(err => {
            // Render fallback cached mock data
            githubContent.className = "github-stats-container";
            githubContent.innerHTML = `
                <div class="github-stat-item">
                    <span class="github-label">Repositories</span>
                    <span class="github-val">12</span>
                </div>
                <div class="github-stat-item">
                    <span class="github-label">Followers</span>
                    <span class="github-val">18</span>
                </div>
                <div class="github-stat-item">
                    <span class="github-label">Top Lang</span>
                    <span class="github-val">Python / JS</span>
                </div>
                <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <span>github.com/${username}</span>
                    <span class="material-symbols-outlined" style="font-size: 14px;">open_in_new</span>
                </a>
            `;
        });
    }

    // ==========================================================================
    // EXTRA 9: CUSTOM CURSOR (DISCRET)
    // ==========================================================================
    // Create cursor elements dynamically
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    const cursorDot = document.createElement("div");
    cursorDot.className = "custom-cursor-dot";
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    // Only enable cursor on devices with fine pointer (non-touch)
    if (window.matchMedia("(pointer: fine)").matches) {
        cursor.style.display = "block";
        cursorDot.style.display = "block";

        document.addEventListener("mousemove", (e) => {
            // Directly position the dot
            cursorDot.style.left = e.clientX + "px";
            cursorDot.style.top = e.clientY + "px";
            
            // Add a very small smooth lag to the outer circle using transition/animation
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });

        // Toggle hover size
        const hoverElements = document.querySelectorAll("a, button, .project-card, .blog-card, .lang-btn, .timeline-toggle-btn");
        hoverElements.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursor.classList.add("cursor-hover");
            });
            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("cursor-hover");
            });
        });
    }
});

