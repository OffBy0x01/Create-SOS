PlayerEvents.loggedIn(e => {
const playerData = e.player.persistentData
  const {x,y,z} = getPlayerPos(e.player)

    // first login events
	if (!playerData.hasLoggedIn) {
    e.player.getServer().runCommandSilent(`/summon ad_astra:lander ${x} ${y} ${z} {CustomName:'{"text":"Aventus Lander"}', Inventory:[
			{id:"minecraft:air",Count:1}, 
			{id:"minecraft:air",Count:1},
			{id:"minecraft:leather_chestplate",Count:1},
			{id:"minecraft:leather_leggings",Count:1},
			{id:"minecraft:wooden_pickaxe",Count:1},
			{id:"minecraft:wooden_axe",Count:1},
      {id:"minecraft:bread",Count:10}
		]}`)

	  e.player.tell(Component.yellow(`<?> A service charge of 10,000 credits has been deducted from your account in accordance with our emergency lander dispension policy. <?>`))
    e.player.tell(Component.red(`<!> Warning - Destination \'NULL\' is not covered by your insurance policy. <!>`))
	  e.player.tell(Component.red(`<!> Travel to the nearest collection location \'Glacia-471\' at your earliest convenience. <!>`))
    e.player.tell(Component.green(`<+> A complimentary 'EXPIRED SURVIVAL KIT - DO NOT USE' has been provided for no additional cost, good luck out there spacer!`))
	  
    playerData.hasLoggedIn = true
	}
})