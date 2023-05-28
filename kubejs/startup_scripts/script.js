// priority: 0
console.setDebugEnabled(true)

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// StartupEvents.registry('server.started', event => {
// 	if (event.server.isNewWorld) {
// 		event.server.runCommand(`/summon ad_astra:lander ~ ~ ~ {CustomName:'{"text":"Aventus Lander"}', Items:[{id:"minecraft:diamond",Count:1b}]}`)
// 		event.server.runCommand('/say <!> Warning - Destination \'NULL\' is not covered by your insurance policy. <!>');
// 		event.server.runCommand('/say <!> Travel to the nearest collection location \'Jupiter-471\' at your earliest convenience. <!>');
// 		event.server.runCommand('/say <i> A service charge of 10,000 credits has been deducted from your account in accordance with our emergency lander dispension policy. <i>');
// 	  }
// })