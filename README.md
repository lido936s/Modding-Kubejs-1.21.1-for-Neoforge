# 🗺️ Guide Pas à Pas : Installation et Déploiement

Attention les mods ou liens présent conduit juste aux site de curseforge pour des raisons évidente de compatibilité avec la version de votre neoforge ou autre dépendance  .

Ce guide vous accompagne étape par étape pour installer l'environnement de développement, configurer les dépendances nécessaires et déployer les scripts KubeJS de ce dépôt sur votre instance Minecraft.

---

## 🛠️ Étape 1 : Préparation du Modpack (NeoForge 1.21.1)

Avant d'ajouter les scripts, votre instance Minecraft doit être configurée sous le chargeur de mods **NeoForge** en version **1.21.1**. 

### Téléchargement des Mods Requis
Téléchargez et placez les fichiers `.jar` suivants dans le dossier `mods` de votre instance :

#### L'infrastructure de Scripting (Obligatoire)
*   **[KubeJS (NeoForge)](https://curseforge.com)** : L'API qui lit et exécute vos fichiers JavaScript.
*   **[Rhino (NeoForge)](https://curseforge.com)** : Le moteur JavaScript requis par KubeJS.

#### Les Moteurs de Recettes & Contenu (Selon vos besoins)
*   **[Lychee](https://curseforge.com)** : Requis pour les interactions de blocs (`lychee_pebbles.js` et `lychee_leavesdrop.js`).
*   **[Create](https://curseforge.com)** : Requis pour les recettes de fluides mécaniques (`create_mixer_fluid.js`).
*   **[Ex Deorum](https://curseforge.com)** : Requis pour l'usage du Crook et l'obtention des vers à soie.
*   **[Haven Pebbles](https://curseforge.com)** : Requis pour enregistrer les objets de petits cailloux.

---

## 📂 Étape 2 : Initialisation des Dossiers KubeJS

1. Lancez Minecraft avec les mods installés au moins **une première fois** jusqu'au menu principal, puis fermez le jeu.
2. Cette action va générer automatiquement un dossier nommé `kubejs` à la racine de votre instance de jeu (au même niveau que le dossier `mods` ou `saves`).

---

## 📥 Étape 3 : Téléchargement et Déploiement des Scripts

1. Rendez-vous sur la page principale de ce dépôt GitHub.
2. Cliquez sur le bouton vert **Code** puis sur **Download ZIP** (ou clonez le dépôt si vous utilisez Git).
3. Extrayez l'archive téléchargée sur votre ordinateur.
4. Copiez les fichiers de scripts qui vous intéressent (`lychee_pebbles.js`, `lychee_leavesdrop.js`, `create_mixer_fluid.js`).
5. Collez-les dans le sous-dossier serveur de votre instance à l'emplacement exact suivant :
   ```text
   📁 votre_instance_minecraft/
   └── 📁 kubejs/
       └── 📁 server_scripts/
           ├── 📄 lychee_pebbles.js
           ├── 📄 lychee_leavesdrop.js
           └── 📄 create_mixer_fluid.js
   ```

---

## 🔄 Étape 4 : Application et Test en Jeu

L'un des plus grands avantages de KubeJS est sa capacité à recharger les recettes à chaud sans avoir à relancer tout le jeu.

1. Lancez votre monde solo ou connectez-vous à votre serveur (assurez-vous d'avoir les permissions d'opérateur `/op`).
2. Ouvrez la console de chat et tapez la commande suivante :
   ```text
   /kubejs reload
   ```
3. **Vérification visuelle :** Si le rechargement réussit, un message blanc et vert s'affichera dans votre chat confirmant la compilation des scripts. Si une erreur de syntaxe est présente, une notification rouge apparaîtra avec la ligne exacte de l'erreur.
4. **Test pratique :** Équipez-vous d'une pioche, accroupissez-vous (`Shift`) et faites un clic droit sur un bloc de pierre (`Stone`). Des cailloux doivent instantanément sauter du bloc et apparaître au sol !
