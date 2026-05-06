# Portfolio - pauledithz

Site portfolio statique présentant des projets personnels, conçu pour être léger, responsive et visuellement moderne.

---

## Aperçu

Ce dépôt contient une page web statique (HTML/CSS/JS) servant de portfolio personnel. Le site met en avant :
- une section "à propos",
- une galerie / liste de projets (images présentes : optiroute.jpg, synapse-rag.jpg, visionguard.jpg),
- navigation responsive avec menu mobile,
- animations d'apparition au scroll et effets visuels (glassmorphism, texte en dégradé).

Capture d'écran (exemples disponibles dans le dossier `images/`).

---

## Démonstration

- Ouvrir `index.html` localement dans un navigateur.
- Ou servir le dossier avec un serveur simple :

  Python 3:

  ```bash
  cd portfolio_repo
  python3 -m http.server 8000
  # puis ouvrir http://localhost:8000
  ```

- Déploiement facile sur GitHub Pages, Netlify, Vercel, etc. (site statique).

---

## Fonctionnalités

- Responsive design (desktop / mobile)
- Mode sombre (géré via Tailwind `dark` class)
- Menu mobile basculant (JS)
- Effet "glass" et carte avec animation au hover
- Effets d'apparition au scroll (Intersection Observer)
- Grille d'arrière-plan subtile et texte avec effet de lueur

---

## Stack & Outils

- HTML5
- CSS (Tailwind + styles personnalisés `style.css`)
- JavaScript vanilla (`script.js`)
- Configuration Tailwind : `tailwind.config.js`

Polices utilisées (définies dans le config): Inter (sans), JetBrains Mono (monospace).

---

## Structure du dépôt

```
portfolio_repo/
├── index.html          # Page principale
├── style.css           # Styles personnalisés (glassmorphism, utilitaires)
├── script.js           # Comportements : menu mobile, reveal
├── tailwind.config.js  # configuration Tailwind
└── images/             # captures / vignettes projets
```

---

## Personnalisation

- Modifier les sections et les projets : éditer `index.html`.
- Mettre à jour les images : remplacer les fichiers dans `images/` (gardez les mêmes noms ou mettez à jour les balises `<img>`).
- Couleurs / animations : ajuster `tailwind.config.js` ou `style.css`.

Conseil : utiliser Live Server (VSCode) pour un retour instantané lors des modifications.

---

## Développement & Tests locaux

1. Cloner le dépôt
   ```bash
   git clone https://github.com/pauledithz/Portfolio.git
   cd Portfolio
   ```
2. Ouvrir `index.html` ou lancer un serveur local (voir section Démonstration).

Aucun build step nécessaire (site statique). Si Tailwind JIT/compilation est ajoutée plus tard, ajouter les commandes d'installation et build correspondantes.

---

## Déploiement

- GitHub Pages : définir la branche `main` (ou `gh-pages`) comme source Pages dans les paramètres du repo.
- Netlify / Vercel : connecter le repo et déployer (framework: static site).

---

## À propos / Contact

GitHub : https://github.com/pauledithz

Pour ajouter un e-mail ou un formulaire de contact, modifier la section contact d'`index.html`.

---

## Licence

Aucune licence n'est fournie dans ce dépôt. Ajouter un fichier `LICENSE` si vous souhaitez en déclarer une (MIT recommandé pour portefolios personnels).

---

## Notes & Suggestions

- Ajouter un `CNAME` si vous utilisez un domaine personnalisé.
- Ajouter des meta tags Open Graph et des favicons pour de meilleures partages et apparences.
- Si vous voulez, je peux :
  - générer un `LICENSE` (MIT),
  - ajouter CI/CD pour déploiement automatique,
  - préparer une branche `gh-pages` et un push (nécessite autorisation push),
  - enrichir le README avec des badges et captures d'écran intégrées.

