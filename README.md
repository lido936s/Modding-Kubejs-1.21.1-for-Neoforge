# Modding-Kubejs-1.21.1-for-Neoforge

![Minecraft Version](https://shields.io)
![Modloader](https://shields.io)
![API](https://shields.io)

Une collection complète de scripts d'automatisation, de recettes personnalisées et de templates réutilisables développée pour **KubeJS** sous **Minecraft 1.21.1 (NeoForge)**. 

Ce dépôt sert de vitrine technique et de base modulaire pour interconnecter des mods populaires axés sur la technologie, la survie de type Skyblock et les interactions contextuelles avancées, en appliquant les standards de développement modernes (fonctions d'abstractions, réduction de la duplication de code et utilisation de tags universels).

---

## 🔌 Mods Utilisés & Écosystème

Pour que l'intégralité des scripts présents dans ce dépôt s'exécute sans erreur, votre modpack doit inclure les mods et dépendances listés ci-dessous :

### 核心 / Coeur du Système
*   **[KubeJS (NeoForge)](https://curseforge.com)** : L'API principale permettant de manipuler les recettes, les événements serveurs/clients et le comportement du jeu en JavaScript.
*   **[Rhino](https://curseforge.com)** : Dépendance interne obligatoire de KubeJS servant de moteur d'exécution JavaScript.

### 🛠️ Intégrations et Mécaniques de Gameplay
*   **[Lychee](https://curseforge.com)** : Mod de gestion de recettes personnalisées basé sur des interactions physiques (clic droit sur bloc, objets lancés au sol, entités, fluides). Utilisé ici pour créer des interactions complexes et immersives.
*   **[Create](https://curseforge.com)** : Mod technologique de cinématique et de transfert d'énergie. Utilisé ici pour étendre les capacités du mélangeur mécanique avec des fluides.
*   **[Ex Deorum](https://curseforge.com)** : Mod de type Skyblock (successeur spirituel d'Ex Nihilo). Utilisé pour l'outil de type Crochet (`exdeorum:crook`) et le Ver à soie (`exdeorum:silkworm`).
*   **[Haven Pebbles](https://curseforge.com)** : Ajoute de petits cailloux spécifiques (Stone, Andésite, Diorite, Granite) récoltables.

---

## 🛠️ Analyse Détaillée des Scripts (`server_scripts/`)

Les scripts tirent profit du principe de programmation **DRY** (*Don't Repeat Yourself*) en encapsulant les syntaxes JSON complexes de Lychee et Create dans des fonctions JavaScript épurées.

### 1. Récolte de Cailloux (`lychee_pebbles.js`)
Gère l'extraction de petits cailloux en grattant de la roche naturelle.
*   **Condition contextuelle :** Le joueur doit obligatoirement être **accroupi** (`is_sneaking`).
*   **Outil requis :** Utilise le tag universel moderne **`c:tools/pickaxes`**. N'importe quelle pioche (vanilla ou modifiée) est compatible.
*   **Algorithme de butin :** Déclenche entre **1 et 16 lancers (rolls)** simultanés à chaque clic. Chaque lancer applique une chance de **50%** de faire apparaître le caillou au sol.
*   **Durabilité :** Applique 1 point d'usure (`damage_item`) sur la pioche par interaction.

### 2. Récolte sur le Feuillage (`lychee_leavesdrop.js`)
Permet de récupérer des ressources cruciales de Skyblock en frappant les feuilles d'arbres.
*   **Condition contextuelle :** Le joueur doit être **accroupi** (`is_sneaking`).
*   **Outil requis :** Le crochet d'Ex Deorum (`exdeorum:crook`). Applique également un point d'usure.
*   **Butins et probabilités indépendantes par clic :**
    *   `exdeorum:silkworm` (Ver à soie) : **50%** de chance.
    *   `minecraft:stick` (Bâton) : **20%** de chance.
    *   `minecraft:oak_leaves` (Feuilles de chêne) : **10%** de chance.

### 3. Recettes de Mélangeur de Fluides (`create_mixer_fluid.js`)
Permet de créer des recettes sur mesure pour le **Mélangeur Mécanique (Mechanical Mixer)** de Create. Ce script étend les mécaniques de l'usine à fluides en combinant des composants liquides et des ingrédients solides/liquides pour générer de nouveaux alliages ou fluides customisés nécessaires aux progressions de modpacks.

---

## 📂 Structure du Répertoire KubeJS

Voici l'arborescence recommandée pour intégrer proprement ces fichiers à votre projet de modding :

```text
📁 votre_instance_minecraft/
└── 📁 kubejs/
    └── 📁 server_scripts/
        ├── 📄 lychee_pebbles.js        # Recettes d'extraction de cailloux (Lychee)
        ├── 📄 lychee_leavesdrop.js     # Recettes d'arbre au crochet (Lychee)
        └── 📄 create_mixer_fluid.js    # Recettes du mélangeur à fluides (Create)
```

---

## ⚙️ Installation & Rechargement

1. Téléchargez ou clonez ce dépôt GitHub.
2. Déplacez vos fichiers `.js` dans le dossier `kubejs/server_scripts/` de votre instance.
3. Lancez votre jeu. 
4. **Le point fort de KubeJS :** Si vous modifiez un script en cours de partie, vous n'avez pas besoin de redémarrer Minecraft. Exécutez simplement la commande suivante dans le chat pour appliquer les changements à chaud :
   ```text
   /kubejs reload
   ```

---

## 📈 Évolutions et Contributions

Toutes les fonctions de ce dépôt sont pensées pour être hautement extensibles. Pour ajouter un bloc ou un fluide, il suffit d'ajouter une seule ligne à la fin du script concerné en suivant le modèle de la fonction template. 

Les *Pull Requests* sont les bienvenues pour ajouter des intégrations avec d'autres mods technologiques ou magiques (comme *Blood Magic*, *Botania* ou *Thermal Expansion*) sous l'environnement 1.21.1 NeoForge !
