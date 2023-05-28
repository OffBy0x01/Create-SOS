ServerEvents.recipes(event => {
  createMoltenMetalFilling(event)
  
   
})

const createMoltenMetalFilling = (event) => {
  for (const [id, entry] of Object.entries(metals)) {
    // ingot from ingot casing  
    event.custom({
      "type": "create:filling",
      "ingredients": [
        {
          "fluid": `kubejs:molten_${id}`,
          "amount": 111
        },{
          "item": "kubejs:ingot_casing"
        }
      ],
      "results": [
        {
          "item": `kubejs:${id}_filled_ingot_casing`
        },
      ]
    })
    event.custom({
      "type": "create:splashing",
      "ingredients": [
        {
          "item": `kubejs:${id}_filled_ingot_casing`
        }
      ],
      "results": [
        {
          "item": entry.ingotId
        },
        {
          "item": "kubejs:ingot_casing"
        }
      ]
    })
    // block from block casing
    event.custom({
      "type": "create:filling",
      "ingredients": [
        {
          "fluid": `kubejs:molten_${id}`,
          "amount": 1000
        },{
          "item": "kubejs:block_casing"
        }
      ],
      "results": [
        {
          "item": `kubejs:${id}_filled_block_casing`
        }
      ]
    })
    event.custom({
      "type": "create:splashing",
      "ingredients": [
        {
          "item": `kubejs:${id}_filled_block_casing`
        }
      ],
      "results": [
        {
          "item": entry.blockId
        },
        {
          "item": "kubejs:block_casing"
        }
      ]
    })
  }
}  

// rubber -> rubber hand
// deployer automation


// molten metal + ingot casing = ingot,
// molten metal + block casing = block,
// molten metal + ingot cast = ingot + ingot cast,
// molten metal + block cast = ingot + block cast,