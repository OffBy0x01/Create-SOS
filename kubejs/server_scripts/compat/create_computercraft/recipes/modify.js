ServerEvents.recipes(event => {
  // modify recipes here
  modifyComputerCraftRecipes(event)
})

const modifyComputerCraftRecipes = (event) => {
  // including remove events in modify because alternative immediatedly added 
  event.remove({ id: CC('computer_normal') })
  event.shaped('computercraft:computer_normal', 
    [ 
      'SCS',
      'RPR',
      'SDS' 
    ], 
    {
      S: 'create:sturdy_sheet',	
      C: 'createaddition:copper_spool',
      R: 'minecraft:redstone',
      P: 'create:precision_mechanism',
      D: 'create:display_board'
    },
  )
  event.remove({ id: CC('computer_advanced_upgrade') })
  event.remove({ id: CC('computer_advanced') })
  event.shapeless('computercraft:computer_advanced', [
    'computercraft:computer_normal',
    ]
  )
}