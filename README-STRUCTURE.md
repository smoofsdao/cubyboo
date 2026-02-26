# 🐻 CUBYBOO WHITELIST - NOUVELLE STRUCTURE

## 📁 STRUCTURE DES FICHIERS

Votre site utilise maintenant une **landing page obligatoire** avec le serment :

```
votre-site/
├── index.html           ← LANDING PAGE (Serment du Guardian)
├── whitelist.html       ← Page de whitelist (protégée)
├── cubyboo-logo.png     ← Logo utilisé partout
└── abstract-logo.png    ← Logo Abstract (optionnel)
```

---

## 🎯 COMMENT ÇA FONCTIONNE

### 1️⃣ L'utilisateur arrive sur votre site

**URL** : `https://votre-site.github.io/nom-repo/`

**Page affichée** : `index.html` (Le serment du Guardian)

### 2️⃣ L'utilisateur lit le serment

- Logo Cubyboo en haut
- Slogan "✨ What we cherish exists. ✨"
- **Tout le texte du serment** visible
- Checkbox pour accepter
- 2 boutons : "Decline" et "I Accept This Oath"

### 3️⃣ Options de l'utilisateur

**Option A - Decline** :
- Message d'alerte : "⚠️ You must accept the Guardian's Oath to access the whitelist."
- Reste sur la page du serment
- Ne peut pas accéder à la whitelist

**Option B - I Accept This Oath** :
- Sauvegarde l'acceptation dans le navigateur
- **Redirection automatique** vers `whitelist.html`
- Accès à la page de whitelist ✅

### 4️⃣ Page de whitelist (protégée)

**Protection automatique** :
- Si l'utilisateur n'a PAS signé le serment
- → Redirection automatique vers `index.html` (le serment)

**Si le serment est signé** :
- ✅ Étape 4 automatiquement cochée
- ✅ Formulaire accessible
- ✅ Champ wallet débloqué
- ✅ Peut soumettre la whitelist

---

## 📤 DÉPLOIEMENT SUR GITHUB

### IMPORTANT : Ordre des fichiers

1. **Supprimez l'ancien index.html** sur GitHub
2. **Uploadez dans cet ordre** :
   - `index.html` (la landing page avec le serment)
   - `whitelist.html` (la page de whitelist)
   - `cubyboo-logo.png`
   - `abstract-logo.png` (si vous l'avez)

### Commandes GitHub :

1. **Allez sur votre repository**
2. **Supprimez l'ancien index.html** :
   - Cliquez sur `index.html`
   - Icône 🗑️ → Delete
   - Commit changes

3. **Uploadez les nouveaux fichiers** :
   - **Add file** → **Upload files**
   - Glissez `index.html` et `whitelist.html`
   - **Commit changes**

4. **Attendez 1-2 minutes** pour le déploiement

---

## ✅ WORKFLOW UTILISATEUR FINAL

### Première visite :

```
User visite le site
    ↓
Arrive sur index.html (Serment)
    ↓
Lit le serment
    ↓
[Decline] → Reste bloqué
    OU
[Accept] → Va à whitelist.html
    ↓
Remplit le formulaire WL
    ↓
Submit → Success! 🎉
```

### Visite ultérieure :

```
User revient sur le site
    ↓
Arrive sur index.html (Serment)
    ↓
Clique "Accept" (déjà signé en localStorage)
    ↓
Va directement à whitelist.html
    ↓
(ou reste sur whitelist.html s'il tape l'URL directement)
```

---

## 🔐 SÉCURITÉ

### Protection de la page whitelist

La page `whitelist.html` est **automatiquement protégée** :

```javascript
// Au chargement de whitelist.html
if (!oathSigned) {
    window.location.href = 'index.html';
    return;
}
```

**Résultat** : Impossible d'accéder à la whitelist sans avoir accepté le serment !

---

## 🎨 AVANTAGES DE CETTE SOLUTION

✅ **Serment obligatoire** - Impossible de contourner  
✅ **Landing page élégante** - Première impression professionnelle  
✅ **Tout le texte visible** - Pas de scroll, pas de modal  
✅ **Protection automatique** - Redirection si pas signé  
✅ **Expérience fluide** - Workflow clair et simple  
✅ **Mémorisation** - Une fois signé, pas besoin de re-signer  

---

## 🧪 TESTER LE SITE

### Test complet :

1. **Videz le cache** :
   ```javascript
   localStorage.clear()
   ```
   (F12 → Console)

2. **Visitez votre site** :
   - URL : `https://votre-site.github.io/nom-repo/`

3. **Vérifiez la landing page** :
   - Logo Cubyboo ✅
   - Slogan ✅
   - Serment complet ✅
   - Checkbox + boutons ✅

4. **Testez "Decline"** :
   - Cliquez sur "Decline"
   - → Message d'alerte ✅
   - → Reste sur la page ✅

5. **Testez "Accept"** :
   - Cochez la checkbox
   - Cliquez "I Accept This Oath"
   - → Redirection vers whitelist.html ✅

6. **Vérifiez whitelist.html** :
   - 4 étapes (dont étape 4 cochée ✅)
   - Formulaire accessible ✅
   - Champ wallet actif ✅

7. **Testez la protection** :
   - Ouvrez une **nouvelle fenêtre privée**
   - Allez directement sur `whitelist.html`
   - → Redirection automatique vers index.html ✅

---

## 📊 STRUCTURE FINALE

### index.html (Landing)
- Page d'accueil du site
- Serment obligatoire
- Porte d'entrée unique

### whitelist.html (Protégée)
- Page de whitelist
- Accessible uniquement après serment
- Formulaire de soumission

---

## 🎯 URLS FINALES

**Landing page (serment)** :
```
https://votre-username.github.io/cubyboo-whitelist/
```

**Whitelist (protégée)** :
```
https://votre-username.github.io/cubyboo-whitelist/whitelist.html
```

---

## 💡 CONSEIL

Partagez toujours l'URL de base (sans `/whitelist.html`) pour que les utilisateurs arrivent sur le serment en premier !

**URL à partager** :
```
https://votre-username.github.io/cubyboo-whitelist/
```

---

© 2026 Cubyboo · What we cherish exists.
