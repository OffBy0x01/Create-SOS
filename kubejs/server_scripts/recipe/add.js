ServerEvents.recipes(event => {
  // Add recipes here
  addCreateRecipes(event)
  addSpiritRecipes(event)
})

const addCreateRecipes = (event) => {
    // manual depot application 
      // andesite alloy -> andesite alloy block
      // event.shaped('day_0x01:andesite_alloy_block', 
      // 	[ 'AAA','AAA','AAA' ], 
      // 	{
      // 		A: 'create:andesite_alloy',	
      // 	},
      // )
      // andesite alloy block -> andesite alloy
      // event.shaped('9x create:andesite_alloy', 
      // 	[ 'A' ], 
      // 	{
      // 		A: '0x01:andesite_alloy_block',
      // 	},
      // )
      // ~ Compacting ~
      // calcite from bonemeal, gravel and lava
      event.custom({
          "type": "create:compacting",
          "ingredients": [
            {
              "item": "minecraft:bone_meal"
            },
            {
              "item": "minecraft:gravel"
            },
            {
              "fluid": "minecraft:lava",
              "nbt": {},
              "amount": 100
            }
          ],
          "results": [
            {
              "item": "minecraft:calcite"
            }
          ]
      })
      // crimsite from iron nugget, deepslate and lava
      event.custom({
          "type": "create:compacting",
          "ingredients": [
            {
              "item": "minecraft:iron_nugget"
            },
            {
              "item": "minecraft:deepslate"
            },
            {
              "fluid": "minecraft:lava",
              "nbt": {},
              "amount": 100
            }
          ],
          "results": [
            {
              "item": "create:crimsite"
            }
          ]
      })
      // verdium from copper nugget, deepslate and lava
      event.custom({
          "type": "create:compacting",
          "ingredients": [
              {
                  "item": "create:copper_nugget"
              },
              {
                  "item": "minecraft:deepslate"
              },
              {
                  "fluid": "minecraft:lava",
                  "nbt": {},
                  "amount": 100
              }
          ],
          "results": [
              {
              "item": "create:veridium"
              }
          ]
      })
      // ochrum from clay, dripstone and lava
      event.custom({
          "type": "create:compacting",
          "ingredients": [
            {
              "item": "minecraft:gold_nugget"
            },
            {
              "item": "minecraft:dripstone_block"
            },
            {
              "fluid": "minecraft:lava",
              "nbt": {},
              "amount": 100
            }
          ],
          "results": [
            {
              "item": "create:ochrum"
            }
          ]
        })
        // asurine from zinc nugget, deepslate and lava
        event.custom({
          "type": "create:compacting",
          "ingredients": [
            {
              "item": "create:zinc_nugget"
            },
            {
              "item": "minecraft:deepslate"
            },
            {
              "fluid": "minecraft:lava",
              "nbt": {},
              "amount": 100
            }
          ],
          "results": [
            {
              "item": "create:asurine"
            }
          ]
        })
        // ~ Crushing ~
        // red sand from scoria
        event.custom({
          "type": "create:crushing",
          "ingredients": [
            {
              "item": "create:scoria"
            }
          ],
          "results": [
            {
              "item": "minecraft:red_sand"
            },
            {
              "item": "minecraft:red_sand",
              "chance": 0.25
            },
          ],
          "processingTime": 100
        })
}

const addSpiritRecipes = (event) => {
    // ~ Create Bulk Haunting ~
    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: "minecraft:glowstone_dust",
            }
        ],
        results: [
            {
                item: "spirit:soul_powder",
                count: 2,
            }
        ]
    })
    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: "minecraft:glowstone",
            }
        ],
        results: [
            {
            item: "spirit:soul_powder",
            count: 8,
            }
        ]
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
        {
            "item": "quark:soul_bead"
        }
        ],
        "results": [
        {
            "item": "spirit:soul_powder",
            count: 2
        },
        {
            "item": "quark:blue_shard",
            "chance": 0.25
        },
        {
            "item": "create:experience_nugget",
            "chance": 0.25
        },
        ],
        "processingTime": 150
    })
    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: "minecraft:deepslate",
            }
        ],
        results: [
            {
                item: "spirit:soul_slate",
            }
        ]
    })
}