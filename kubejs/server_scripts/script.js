// priority: 0

console.setDebugEnabled(true)

const depotApplicationRecipe = (event, output, inputInHand, inputOnDepot, isAssisted, inputInOffhand, offHandHasDurability) => {
	// credit to "squoshi, JS dev's nightmare" on latvian.dev discord
	if (event.block == 'create:depot' && event.block.entityData.HeldItem != undefined && event.player.mainHandItem.id == inputInHand) {
    console.log(`clicked create:depot containing '${event.block.entityData.HeldItem}' with ${event.player.mainHandItem.id}`)

		let depotItem = event.block.inventory.getAllItems().toArray()
		let handItem = event.player.mainHandItem
		let offhandItem = event.player.offHandItem
    console.log(`depotItem:${depotItem}`)
    console.log(`handItem:${handItem}`)
    console.log(`offhandItem:${offhandItem}`)
		event.cancel()
		if (inputOnDepot == depotItem && inputInHand == handItem && isAssisted == false) {
			if (event.block.entityData.HeldItem.Item.id == inputOnDepot && event.player.mainHandItem == inputInHand) {
				handItem.count--
				event.block.inventory.extract(0, Item.of(inputOnDepot).count, false)
				event.player.give(output)
			}
		} else if (inputOnDepot == depotItem && inputInHand == handItem && offhandItem == inputInOffhand && isAssisted == true) {
			let depotItem = event.block.inventory.get(0)
			let handItem = event.player.mainHandItem
			let offhandItem = event.player.offHandItem
			event.cancel()
			if (inputOnDepot == depotItem && inputInHand == handItem && inputInOffhand == offhandItem) {
				if (event.block.entityData.HeldItem.Item.id == inputOnDepot && event.player.mainHandItem == inputInHand && event.player.offHandItem == inputInOffhand) {
					handItem.count--
					event.block.inventory.extract(0, Item.of(inputOnDepot).count, false)
					event.player.give(output)
					if (offHandHasDurability == true) {
						event.player.damageHeldItem("OFF_HAND", 1)
					}
				}
			}
		}
	}
}

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

