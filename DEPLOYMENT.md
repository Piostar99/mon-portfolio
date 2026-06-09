# Déploiement du Portfolio sur GitHub Pages

Ce guide vous explique étape par étape comment héberger votre portfolio gratuitement sur internet grâce à **GitHub Pages**.

## 1. Prérequis
- Un compte [GitHub](https://github.com/) gratuit.
- **Git** installé sur votre machine (téléchargeable sur [git-scm.com](https://git-scm.com/)).

## 2. Création du Dépôt (Repository) sur GitHub
1. Connectez-vous à votre compte GitHub.
2. Cliquez sur le bouton **"+"** en haut à droite de la barre de navigation, puis sélectionnez **"New repository"**.
3. Dans le champ **Repository name**, nommez votre dépôt (par exemple : `portfolio` ou `mon-portfolio`).
4. Assurez-vous que l'option **"Public"** est sélectionnée (c'est requis pour que GitHub Pages soit gratuit).
5. Ne cochez aucune autre case (comme *Add a README file*), car nous allons importer votre code existant.
6. Cliquez sur le bouton vert **"Create repository"**.

## 3. Pousser le Code sur GitHub
Ouvrez un terminal (ou l'invite de commande) dans le dossier de votre portfolio sur votre ordinateur (ici `c:\Users\a.pio\Desktop\Person\Portofolio`) et exécutez les commandes suivantes l'une après l'autre :

```bash
# 1. Initialiser le dépôt Git local
git init

# 2. Ajouter tous vos fichiers (HTML, CSS, JS, etc.)
git add .

# 3. Créer une sauvegarde (commit) avec un message
git commit -m "Version initiale du portfolio"

# 4. Définir la branche principale (main)
git branch -M main

# 5. Lier votre dossier local au dépôt GitHub (Copiez l'URL donnée par GitHub !)
# Exemple : git remote add origin https://github.com/VOTRE_PSEUDO/portfolio.git
git remote add origin https://github.com/VOTRE_PSEUDO/NOM_DU_DEPOT.git

# 6. Envoyer le code sur GitHub
git push -u origin main
```

## 4. Activer GitHub Pages (Mise en ligne)
1. Retournez sur la page de votre dépôt sur le site de GitHub.
2. Cliquez sur l'onglet ⚙️ **"Settings"** (Paramètres) en haut.
3. Dans le menu latéral de gauche, descendez et cliquez sur **"Pages"**.
4. Dans la section **Build and deployment**, sous **Source**, vérifiez que **"Deploy from a branch"** est sélectionné.
5. Sous **Branch**, cliquez sur le menu déroulant qui indique *None*, sélectionnez `main`, laissez le dossier sur `/ (root)`, et cliquez sur **"Save"**.

## 5. Accéder à votre Portfolio
Une fois les paramètres sauvegardés, GitHub commence à générer votre site. Cela prend généralement entre 1 et 3 minutes.

- En haut de la page des paramètres "Pages", ou dans l'onglet "Environments" de la page d'accueil de votre dépôt, vous verrez un message indiquant que votre site est en ligne.
- Votre URL gratuite sera au format suivant : 
  👉 `https://VOTRE_PSEUDO.github.io/NOM_DU_DEPOT/`

---

## 6. Configurations Additionnelles Récentes

### ✉️ Formulaire de contact fonctionnel (Web3Forms)
Pour que le formulaire de contact reçoive de vrais messages directement sur votre boîte e-mail :
1. Rendez-vous sur [web3forms.com](https://web3forms.com/) et entrez votre adresse e-mail pour recevoir une clé d'accès (Access Key) gratuite.
2. Ouvrez le fichier `index.html` de votre portfolio et recherchez la ligne suivante :
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
   ```
3. Remplacez `YOUR_WEB3FORMS_ACCESS_KEY_HERE` par votre clé d'accès reçue par e-mail.
4. Sauvegardez, commitez et poussez les modifications sur GitHub. Le formulaire enverra désormais les paquets à votre adresse ! (Si la clé par défaut est conservée, le portfolio bascule automatiquement en mode simulation).

### 🖥️ Page 404 personnalisée
Le fichier `404.html` à la racine de votre projet est automatiquement détecté et servi par GitHub Pages lorsqu'une route ou un lien invalide est demandé par un visiteur. Aucune configuration n'est nécessaire.

### 📄 Téléchargement du CV PDF
Assurez-vous que le fichier `cv.pdf` généré (ou votre propre CV PDF) est bien situé à la racine du projet sous le nom `cv.pdf` lors du `git add .` pour que le lien et la commande `cv` du terminal CLI fonctionnent correctement.

Félicitations, votre portfolio est maintenant accessible par n'importe qui dans le monde !
