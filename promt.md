Génère un portfolio web professionnel pour un ingénieur SecOps/développeur.
Stack : HTML5 sémantique, CSS3 vanilla, JavaScript natif.
Polices : Google Fonts uniquement (Hanken Grotesk + Inter + JetBrains Mono).

### DONNÉES SOURCE
Analyse le fichier `cv.md` joint pour extraire nom, rôle, bio, expériences,
projets, compétences, langues et coordonnées.

---

### IDENTITÉ VISUELLE

Palette "Forge & Signal" :
- Fonds : #0F1117 (base) / #161B27 (surface) / #1E2436 (carte) / #252D42 (élevée)
- Accent primaire : #3ECFCF (teal vif)
- Accent hover : #1E8C8C
- Texte principal : #E8E8E8
- Texte secondaire : #8B9CC8
- Bordure subtile : rgba(62, 207, 207, 0.15)
- Statuts : #22C55E (OK) / #EF4444 (CRIT) / #F59E0B (WARN)

Règles visuelles :
- Cartes avec border-radius: 12px et border: 1px solid rgba(62,207,207,0.12)
- Fond de page : #0F1117 avec bruit SVG discret (pas de radial-gradient flashy)
- Transitions à 0.25s ease sur hover
- PAS de glow curseur / PAS de halos lumineux animés (trop "template IA")
- Ombres portées : box-shadow: 0 4px 24px rgba(0,0,0,0.4) uniquement

---

### STRUCTURE (index.html)

1. Navigation sticky blur — scroll tracker section active
2. Hero — grille 2 colonnes : [bio + CTA] / [terminal CLI simulé]
3. Profil — bento grid : bio complète, contact, objectif carrière, langues, intérêts
4. Expériences — timeline alternée, panneaux carte, puces →
5. Projets — grille 3 colonnes, snippet code en arrière-plan, bouton "Détails" toggle
6. Compétences — bento thématique + console logs sécurité statique
7. Formation — liste structurée + icônes SVG inline
8. Contact — formulaire (Nom/Email/Objet/Message) + honeypot + console soumission

---

### JAVASCRIPT (script.js)

1. Canvas particules : points blancs/teal reliés si distance < 120px,
   répulsion douce au survol (pas d'explosion)

2. Terminal interactif — prompt `pio@sec-ops-eng:~$`
   Boot séquence : auth SSH → handshake TLS → message welcome
   Commandes : help / cv / skills / projects / scan [IP] / contact / clear
   La commande `scan` affiche une barre de progression puis un rapport de ports

3. Formulaire contact : animation "Chiffrement TLS..." → logs soumission
   Web3Forms API pour l'envoi réel

4. Projets : un seul toggle ouvert à la fois (accordion)