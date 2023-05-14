ServerEvents.recipes(event => {
  // Add recipes here
  addSpiritRecipes(event)
})

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