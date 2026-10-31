ServerEvents.recipes(event => {

    /**
     * Crée une recette d'interaction de bloc Lychee pour obtenir des cailloux.
     * 
     * @param {string} blockIn - Le bloc d'origine (ex: "minecraft:stone")
     * @param {string} itemOut - L'item donné en récompense (ex: "havenpebbles:stone_pebble")
     * @param {string} toolTag - Le tag de l'outil requis (Par défaut: "c:tools/pickaxes")
     */
    function makePebbleRecipe(blockIn, itemOut, toolTag = "c:tools/pickaxes") {
        event.custom({
            type: "lychee:block_interacting",
            item_in: {
                tag: toolTag // Utilisation de 'tag' au lieu de 'item'
            },
            block_in: {
                blocks: [blockIn]
            },
            contextual: [
                {
                    type: "is_sneaking"
                }
            ],
            post: [
                {
                    type: "random",
                    rolls: {
                        min: 1,
                        max: 16
                    },
                    entries: [
                        {
                            type: "drop_item",
                            id: itemOut,
                            contextual: {
                                type: "chance",
                                chance: 0.50
                            }
                        }
                    ]
                },
                {
                    type: "damage_item"
                }
            ]
        });
    }

    // --- ENREGISTREMENT DE VOS RECETTES ---
    // Note : Pas besoin de mettre le "#" devant le tag dans les arguments ci-dessous.
    
    // Stone
    makePebbleRecipe("minecraft:stone", "havenpebbles:stone_pebble");

    // Andesite
    makePebbleRecipe("minecraft:andesite", "havenpebbles:andesite_pebble");

    // Diorite
    makePebbleRecipe("minecraft:diorite", "havenpebbles:diorite_pebble");

    // Granite
    makePebbleRecipe("minecraft:granite", "havenpebbles:granite_pebble");
    
    // Exemple si vous voulez utiliser une pelle (shovels) pour un bloc de terre :
    // makePebbleRecipe("minecraft:dirt", "minecraft:clay_ball", "c:tools/shovels");

});
