// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	hideVanillaTools(event)
	hideComputerCraft(event)
})

REIEvents.hide(event => {
	hideVanillaTools(event)
	hideComputerCraft(event)
})

const hideVanillaTools = (event) => {
  // hide all vanilla tools except wooden (use silent gear!)
  event.hide(/minecraft:(?!wooden).+_pickaxe/)
  event.hide(/minecraft:(?!wooden).+_axe/)
  event.hide(/minecraft:(?!wooden).+_shovel/)
  event.hide(/minecraft:(?!wooden).+_hoe/)
  event.hide(/minecraft:(?!wooden).+_sword/)
  event.hide(/farmersdelight:(?!wooden).+_knife/)
}

const hideComputerCraft = (event) => {
  event.hide(/computercraft:pocket_computer_normal/)
	event.hide(/computercraft:pocket_upgrade/)
	event.hide(/computercraft:pocket_computer_advanced/)
	event.hide(/computercraft:turtle_normal/)
	event.hide(/computercraft:turtle_advanced/)
}