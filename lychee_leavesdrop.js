ServerEvents.recipes(event => {

    /**
     * Crée une recette d'interaction Lychee pour récolter des ressources sur des blocs (ex: Crook sur des feuilles).
     * 
     * @param {string} blockIn - Le bloc ou le tag de bloc ciblé (ex: "#minecraft:leaves")
     * @param {Array} dropEntries - Liste des objets à drop avec leurs chances (ex: [{ id: "item", chance: 0.5 }])
     * @param {string} tool - L'outil requis (Par défaut: "exdeorum:crook")
     */
    function makeCrookRecipe(blockIn, dropEntries, tool = "exdeorum:crook") {
        // Transformation du tableau simplifié en format JSON valide pour Lychee
        let formattedEntries = dropEntries.map(entry => {
            return {
                type: "drop_item",
                id: entry.id,
                contextual: [
                    {
                        type: "chance",
                        chance: entry.chance
                    }
                ]
            };
        });

        event.custom({
            type: "lychee:block_interacting",
            item_in: {
                item: tool
            },
            block_in: {
                // Gère automatiquement si c'est un tag (#) ou un bloc unique
                [blockIn.startsWith('#') ? 'tag' : 'blocks']: blockIn.startsWith('#') ? blockIn.replace('#', '') : [blockIn]
            },
            contextual: [
                {
                    type: "is_sneaking"
                }
            ],
            post: [
                {
                    type: "random",
                    entries: formattedEntries
                },
                {
                    type: "damage_item"
                }
            ]
        });
    }

    // --- ENREGISTREMENT DE VOS RECETTES ---

    // 1. Votre recette d'origine pour les feuilles (Leaves)
    makeCrookRecipe("#minecraft:leaves", [
        { id: "exdeorum:silkworm", chance: 0.50 },
        { id: "minecraft:stick", chance: 0.20 },
        { id: "minecraft:oak_leaves", chance: 0.10 }
    ]);

    // 2. Exemple pour de la terre (Dirt) avec un autre outil
    /*
    makeCrookRecipe("minecraft:dirt", [
        { id: "minecraft:wheat_seeds", chance: 0.30 },
        { id: "minecraft:pumpkin_seeds", chance: 0.05 }
    ], "minecraft:wooden_hoe");
    */

});
