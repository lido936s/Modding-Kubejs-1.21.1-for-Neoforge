// ==========================================
// CONFIGURATION DE LA RECETTE A PERSONNALISER
// ==========================================
const CONFIG = {
  modIdRequis: 'create',                           // Le mod qui doit être chargé
  itemResultat: 'kubejs:sky_machine_cake',         // L'item final obtenu
  
  // Ingrédients requis dans le mélangeur (Mixing)
  fluideIngredient: 'undergarden:virulent_mix_source',
  fluideQuantite: 1000,                            // Quantité en mb (1000 mb = 1 seau)
  
  itemsIngredients: [
    'undergarden:underbeans',
    'create:dough'
  ]
};

// ==========================================
// CODE SYSTEME (Ne pas modifier sauf si besoin)
// ==========================================
ServerEvents.recipes(event => {
  // Vérifie si le mod requis est présent
  if (Platform.isLoaded(CONFIG.modIdRequis)) {
    
    // Supprime l'ancienne recette de l'item final pour éviter les conflits
    event.remove({ output: CONFIG.itemResultat });
    
    // Prépare la liste complète des ingrédients (Fluide + Items)
    const tousLesIngredients = [
      Fluid.of(CONFIG.fluideIngredient, CONFIG.fluideQuantite),
      ...CONFIG.itemsIngredients
    ];
    
    // Génère la recette de mixage Create (Chauffée)
    event.recipes.create
      .mixing([CONFIG.itemResultat], tousLesIngredients)
      .heated();
  }
});
