ServerEvents.recipes(event => {
  // remove recipes here
  removeVanillaTools(event)
  removeComputerCraft(event)
})

const removeVanillaTools = (event) => {
  // remove all vanilla tools except wooden (use silent gear!)
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_pickaxe/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_axe/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_shovel/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_hoe/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_sword/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /farmersdelight:(?!wooden).+_knife/ });
}

const removeComputerCraft = (event) => {
  event.remove({ id: CC('pocket_computer_normal') })
  event.remove({ id: CC('pocket_upgrade') })
  event.remove({ id: CC('pocket_computer_advanced') })
  event.remove({ id: CC('pocket_computer_advanced_upgrade') })
  event.remove({ id: CC('turtle_normal') })
  event.remove({ id: CC('turtle_upgrade') })
  event.remove({ id: CC('turtle_advanced') })
}