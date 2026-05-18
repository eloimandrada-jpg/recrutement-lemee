# 🏆 Recrutement Le Mée Sports Football

Application de gestion du recrutement U15/U16 pour le club de football Le Mée Sports Football.

## 🚀 Fonctionnalités

- **Gestion des joueurs** : Ajouter, modifier et supprimer des fiches joueurs
- **Suivi du recrutement** : Statuts, priorités, évaluations détaillées
- **Filtrage avancé** : Par catégorie, statut, priorité et recherche libre
- **Génération de PDF** : Fiches individuelles ou exports en masse
- **Dashboard** : Vue d'ensemble avec statistiques en temps réel
- **Synchronisation en temps réel** : Avec Supabase

## 📋 Structure du projet

```
src/
├── components/          # Composants React réutilisables
│   ├── Badge.jsx       # Badge pour les statuts
│   ├── ClubLogo.jsx    # Logo du club
│   ├── PlayerCard.jsx  # Carte joueur affichée dans la liste
│   └── PlayerForm.jsx  # Formulaire d'ajout/modification
├── constants/          # Constantes et configuration
│   └── index.js        # Postes, statuts, couleurs, etc.
├── lib/                # Bibliothèques
│   └── supabase.js     # Client Supabase
├── utils/              # Fonctions utilitaires
│   └── pdf.js          # Génération de PDF
└── App.jsx             # Composant principal
```

## 🔧 Installation

```bash
npm install
```

## ⚙️ Configuration

1. Créer un fichier `.env.local` à la racine du projet
2. Ajouter les variables d'environnement :

```
VITE_SUPABASE_URL=https://votre-url.supabase.co
VITE_SUPABASE_KEY=votre_clé_publique
```

## 🏃 Démarrage

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📦 Build

```bash
npm run build
```

## 🔐 Sécurité

Les identifiants Supabase ne doivent **jamais** être commitées dans le contrôle de version. Utiliser les variables d'environnement (`.env.local`) qui sont ignorées par Git.

## 📝 Licences

Projet interne Le Mée Sports Football
