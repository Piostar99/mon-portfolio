

Voici le prompt exact, structuré et détaillé, à copier-coller pour générer ce portfolio premium sur le thème Cybersécurité/SecOps. Il indique explicitement à l'utilisateur de fournir son CV au format `.md` afin que l'IA puisse en extraire les informations et les intégrer directement.

***

```markdown
Génère un portfolio web premium de niveau professionnel pour un profil d'ingénieur en cybersécurité / développeur. Le projet doit être développé en HTML5 sémantique, CSS3 (Vanilla CSS personnalisé) et JavaScript natif (sans frameworks externes, hormis Google Fonts et Material Symbols).

### 📄 SOURCE DES DONNÉES (CV)
[IMPORTANT] Veuillez analyser le contenu du fichier `cv.md` fourni ci-joint par l'utilisateur pour y extraire toutes ses informations personnelles, ses expériences, ses projets clés, ses compétences, ses certifications, ses langues et ses coordonnées afin de peupler entièrement et de manière réaliste les sections correspondantes du portfolio.

---

### 🎨 IDENTITÉ VISUELLE & STYLE (style.css)
- **Palette de couleurs** : Mode sombre raffiné.
  - Fond principal : Gris très sombre/Noir (`#121212`) avec un motif de grille radial discret.
  - Cartes et panneaux : Effet de verre (Glassmorphism) avec `backdrop-filter: blur(12px)` et bordures semi-transparentes.
  - Couleur d'accentuation : Jaune/Or cyber (`#facc15`) pour les éléments clés, surbrillances et bordures au survol.
  - Couleurs de statut : Rouge (`#ff5f56`), Vert (`#27c93f`), Jaune (`#ffbd2e`).
- **Typographie** : 
  - Titres : 'Hanken Grotesk'
  - Corps de texte : 'Inter'
  - Éléments système / Code / Terminal : 'JetBrains Mono'
- **Éléments visuels haut de gamme** :
  - Halos lumineux d'ambiance en arrière-plan (`radial-gradient` or/sombre).
  - Un halo lumineux personnalisé qui suit la trajectoire du curseur de la souris (`cursor-glow`).
  - Effets de transition fluides de 0.3s sur les états de survol (`hover`) des cartes bento.

---

### 🛠️ STRUCTURE ET SECTIONS (index.html)
1. **Header & Navigation** :
   - Menu sticky à effet flouté avec indicateur de section active (Scroll Tracking).
   - Menu burger responsive pour les versions mobiles.
2. **Hero Section (Accueil)** :
   - Disposition en grille à deux colonnes.
   - *À gauche* : Titre d'accroche percutant, rôle (SecOps / Développeur Django), courte biographie professionnelle et boutons d'appel à l'action.
   - *À droite* : Un simulateur interactif de terminal CLI.
3. **Profil Section (Bento Grid)** :
   - Mise en page Bento moderne présentant la biographie complète du candidat, ses coordonnées, un encart sur son objectif de carrière (ex: RSSI), ses langues (avec barres de progression) et ses centres d'intérêt.
4. **Expériences Section (Chronologie)** :
   - Rangs alternants sous forme de panneaux de verre détaillant les tâches clés sous forme de liste à puces personnalisée (avec des puces fléchées dorées).
5. **Projets Section (Grille 3D)** :
   - Cartes de projets contenant en arrière-plan un snippet de code semi-transparent correspondant au projet.
   - Chaque carte doit inclure un bouton "Détails" permettant de dérouler/replier la liste des réalisations techniques du projet.
6. **Compétences Section (Bento Grid)** :
   - Organiser en blocs thématiques : Cybersécurité/Réseaux, Dev & Tech, Soft Skills et Certifications.
   - Intégrer une fausse console de logs de sécurité (`bento-console`) affichant des états de conformité en vert `[OK]`.
7. **Formations & Certifications** :
   - Liste structurée avec des icônes SVG épurées.
8. **Contact Section** :
   - Formulaire stylisé avec champs Nom, E-mail, Objet et Message.
   - Doit inclure un honeypot de sécurité anti-spam et une zone console de logs de soumission sécurisée.

---

### ⚡ INTERACTIONS DYNAMIQUES (script.js)
1. **Système de particules interactif** :
   - Un `<canvas>` en arrière-plan affichant des particules dorées et blanches reliées par des lignes semi-transparentes qui se repoussent subtilement au passage de la souris.
2. **Simulateur de Terminal interactif** :
   - Exécute une séquence de boot réaliste lors du chargement : connexion SSH, chiffrement AES-256-GCM, message de bienvenue.
   - Permet à l'utilisateur de saisir des commandes dans l'invite `roy@sec-arch:~$` :
     - `help` : Affiche les commandes disponibles.
     - `cv` : Affiche le profil condensé.
     - `skills` : Affiche la matrice technique.
     - `projects` : Énumère les projets.
     - `scan [IP]` : Simule un scan de ports Nmap dynamique avec barre de progression en temps réel et rapport de vulnérabilité.
     - `contact` : Affiche les canaux sécurisés.
     - `clear` : Vide la console.
3. **Logique d'affichage et de soumission de formulaire** :
   - Gestion de l'expansion et du repli des détails des cartes projet (un seul projet ouvert à la fois).
   - Lors de la soumission du formulaire de contact, simuler un effet de chargement "Chiffrement..." puis afficher une console de logs dynamique simulant l'établissement du tunnel TLS v1.3 et la transmission sécurisée des paquets via Web3Forms API.
```