ServerEvents.recipes(event => {
    // modify recipes here
    // modifyComputerCraftRecipes(event)
    // modifyAdAstraRecipes(event)  
})

const modifyComputerCraftRecipes = (event) => {
  // remove default recipies
  event.remove({ type: 'minecraft:crafting_shaped', output: /computercraft:computer_.+/ })
  event.remove({ id: 'computercraft:computer_advanced_upgrade' })
  event.remove({ type: 'minecraft:crafting_shaped', output: /computercraft:pocket_computer.+/ })
  // add tier-appropriate recipes (sorry)
  event.shaped('computercraft:computer_normal', 
    [ 
      'SRS',
      'RER',
      'SDS' 
    ], 
    {
      S: 'create:sturdy_sheet',	
      R: 'minecraft:redstone',
      E: 'create:electron_tube',
      D: 'create:display_board'
    },
  )
  event.shaped('computercraft:computer_advanced', 
    [ 
      'BRB',
      'RPR',
      'BCB' 
    ], 
    {
      B: 'create:brass_sheet',
      R: 'minecraft:redstone',
      P: 'create:precision_mechanism',
      C: 'computercraft:computer_normal',	
    },
  )
}

const modifyAdAstraRecipes = (event) => {
  // this'll be fun...
  event.replaceInput({output: /(adastra:space_helmet)|(adastra:space_suit)|(adastra:space_pants)|(adastra:space_boots)/}, 'adastra:steel_ingot', 'create:sturdy_sheet');
}