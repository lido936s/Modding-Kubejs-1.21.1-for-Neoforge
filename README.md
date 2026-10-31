# Modding-Kubejs-1.21.1-for-Neoforge

Une collection de scripts et de templates d'automatisation pour **KubeJS** sous Minecraft **1.21.1 (NeoForge)**. Ce dépôt regroupe des exemples pratiques et optimisés pour interconnecter différents mods populaires tels que **Lychee** et **Create**, en appliquant les standards de développement modernes (fonctions réutilisables, tags universels).

---

## 🚀 Contenu du Dépôt

Le dépôt est structuré autour de fichiers de scripts serveurs (`server_scripts`) pour configurer dynamiquement les recettes de votre modpack :

*   **`lychee_pebbles.js`** : Gestion de la récolte de cailloux au clic droit sur la roche à l'aide d'outils (via le mod *Lychee*).
*   **`create_mixer_fluid.js`** : Automatisation et création de recettes de mélange de fluides (via le mod *Create*).

---

## 🛠️ Analyse des Scripts

### 1. Système de Récolte de Cailloux (`lychee_pebbles.js`)
Ce script utilise le mod **Lychee** pour permettre aux joueurs de gratter la roche afin d'en extraire de petits cailloux. Il intègre une fonction template réutilisable pour éviter la duplication de code.

*   **Mécanique de déclenchement :** Un **Clic droit + S'accroupir** (`is_sneaking`) sur un bloc spécifique.
*   **Compatibilité globale :** Utilise le tag universel des pioches (`c:tools/pickaxes`) pour fonctionner de base avec n'importe quelle pioche (Fer, Diamant, mods tiers, etc.).
*   **Système de butin (Loot) :** 
    *   Exécute entre **1 et 16 lancers (rolls)** par clic.
    *   Chaque lancer possède **50% de chance** de faire tomber le caillou associé au sol.
*   **Durabilité :** L'outil utilisé perd automatiquement **1 point d'usure** par interaction réussie (`damage_item`).

#### Configuration des blocs et drops :

| Bloc d'origine | Caillou obtenu (Butin) | Tag Outil Requis |
| :--- | :--- | :--- |
| `minecraft:stone` | `havenpebbles:stone_pebble` | `c:tools/pickaxes` |
| `minecraft:andesite` | `havenpebbles:andesite_pebble` | `c:tools/pickaxes` |
| `minecraft:diorite` | `havenpebbles:diorite_pebble` | `c:tools/pickaxes` |
| `minecraft:granite` | `havenpebbles:granite_pebble` | `c:tools/pickaxes` |

---

### 2. Recettes de Mélangeur Create (`create_mixer_fluid.js`)
Ce script permet d'étendre les possibilités du mod **Create** en ajoutant des recettes personnalisées pour le **Mélangeur Mécanique (Mechanical Mixer)** utilisant des fluides et des composants liquides pour vos progressions personnalisées.

---

## ⚙️ Prérequis et Installation

### 1. Mods Requis
Pour que ces scripts s'exécutent correctement, assurez-vous d'avoir installé les mods suivants sur votre instance de jeu :
*   **NeoForge** (Version 1.21.1)
*   **KubeJS**
*   **Lychee**
*   **Create**

### 2. Déploiement des fichiers
Pour appliquer ces modifications sur votre jeu ou votre serveur :
1. Téléchargez ou clonez ce dépôt GitHub.
2. Copiez les fichiers `.js` de votre choix.
3. Collez-les dans le répertoire de votre instance Minecraft à cet emplacement précis :
   ```text
   📁 votre_instance/
   └── 📁 kubejs/
       └── 📁 server_scripts/
           ├── 📄 lychee_pebbles.js
           └── 📄 create_mixer_fluid.js
   ```
4. Lancez votre jeu ou exécutez la commande `/kubejs reload` directement en jeu pour appliquer les modifications instantanément sans redémarrer.

---

## 📈 Évolutions et Contributions
Les scripts présents sur ce dépôt sont pensés pour être facilement extensibles. Si vous souhaitez ajouter un nouveau type de roche ou un nouveau mélange de fluide, il vous suffit de dupliquer la ligne d'enregistrement correspondante à la fin de chaque fichier en y insérant vos propres IDs d'items.

N'hésitez pas à ouvrir une *Issue* ou une *Pull Request* pour proposer des optimisations ou ajouter de nouvelles intégrations de mods !


