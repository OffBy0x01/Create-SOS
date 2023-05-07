const removeNonSilentTools = (event) => {
    // remove all vanilla tools except wooden (use silent gear!)
    event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_pickaxe/ });
    event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_axe/ });
    event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_shovel/ });
    event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_hoe/ });
    event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden).+_sword/ });
    event.remove({ type: 'minecraft:crafting_shaped', output: /farmersdelight:(?!wooden).+_knife/ });
}