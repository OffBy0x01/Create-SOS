// priority: 0

const metals = {
  copper: {
    displayName: 'Copper',
    colour: 0xf59568, // 0xff9933
    stillTexture: '',
    flowingTexture: '',
    ingotId: '',
    blockId: '',
  },
  iron:{
    displayName: 'Iron',
    colour: 0xe7e7e4,
    stillTexture: '',
    flowingTexture: '',
    ingotId: '',
    blockId: '',
  },
  zinc:{
    displayName: 'Zinc',
    colour: 0xe9fff6, //0xf0f4f4
    stillTexture: '',
    flowingTexture: '',
    ingotId: '',
    blockId: '',
  },
  gold:{
    displayName: 'Gold',
    colour: 0xffc638, // 0xecc113 ffc811 ffcf2f ffd22f
    ingotId: '',
    blockId: '',
  },
  brass:{
    displayName: 'Brass',
    colour: 0xffc760, // 0xfab22c 0xe6ac00
    stillTexture: '',
    flowingTexture: '',
    ingotId: '',
    blockId: '',
  },
  andesite_alloy:{
    displayName: 'Andesite Alloy',
    colour: 0xafafb6,
    stillTexture: '',
    flowingTexture: '',
    ingotId: '',
    blockId: '',
  },
}

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

  // computercraft advanced computer joke
  event.create('dead_mouse')
    .displayName('Dead Mouse')
    .maxStackSize(16)
    .tooltip('A dead mouse, complete with bite marks. At least it is whole.')

  event.create('yarn_ball')
    .displayName('Ball of Yarn')
    .maxStackSize(16)
    .tooltip('A ball of yarn. Purrfect!')

  // filling molten metals
  event.create('ingot_casing')
    .displayName('Ingot Casing')
    .maxStackSize(16)
    .tooltip('Used to form ingots from molten metal')
    .fireResistant(true)

  event.create('block_casing')
    .displayName('Block Casing')
    .maxStackSize(16)
    .tooltip('Used to form Blocks from molten metal')
    .fireResistant(true)

  for (const [id, entry] of Object.entries(metals)) {
    event.create(`${id}_filled_block_casing`)
      .displayName(`${entry.displayName} Filled Block Casing`)
      .maxStackSize(64)
      .color(0, entry.colour)
  
      event.create(`${id}_filled_ingot_casing`)
      .displayName(`${entry.displayName} Filled Ingot Casing`)
      .maxStackSize(64)
      .color(0, entry.colour)
  }
})

StartupEvents.registry('fluid', event => {

  for (const [id, entry] of Object.entries(metals)) {
      event.create(`molten_${id}`)
      .thickTexture(entry.colour)
      .bucketColor(entry.colour)
      .displayName(`Molten ${entry.displayName}`)   
    // .stillTexture(entry.stillTexture)
    // .flowingTexture(entry.flowingTexture)
  }
  
})

// rubber -> rubber hand
// deployer automation


// molten metal + ingot casing = ingot,
// molten metal + block casing = block,
// molten metal + ingot cast = ingot + ingot cast,
// molten metal + block cast = ingot + block cast,

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