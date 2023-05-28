function safeGet(propertyPath, object) {
  const properties = propertyPath.split('.')
  let nestedObject = object

  for (let property of properties) {
    if (nestedObject && typeof nestedObject === 'object' && property in nestedObject) {
      nestedObject = nestedObject[property]
    } else {
      return null
    }
  }

  return nestedObject
}

const getRandomNumBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const compareStringOrRegex = (stringOrRegex, value) => {
  if (typeof stringOrRegex === 'string') {
    return value === stringOrRegex
  } else if (stringOrRegex instanceof RegExp) {
    return stringOrRegex.test(value)
  }
  return false
}

// 
const interactionHelper = (event, entities, holdingItems, dropsWithChance, opts) => {  
  if ( // expiry invalid
    isNaN(opts.expiryMs) || 
    opts.expiryMs < 0 ||
    opts.expiryMs > 24*60*60e3
  ) {
    throw Error(`Invalid expiryMs '${opts.expiryMs}' - must be 0 < expiryMs < 24*60*60e3`)
  }

  if( // no matching entities or items
    false === entities.some(e => compareStringOrRegex(e, event.target.type)) ||
    false === holdingItems.some(i => compareStringOrRegex(i, event.player.mainHandItem.id ))
  ) {
    return
  }

  if ( // already interacted and previous interaction NOT expired
    event.target.persistentData?.lastInteracted !== undefined &&
    event.target.persistentData.lastInteracted < (Date.now() + opts.expiryMs)
    ) {
    return
  }

  for (const [item, itemOpts] of Object.entries(dropsWithChance)) {
    if (Math.random() <= (itemOpts?.chance ?? 1)) {
      let entityDrop = event.level.createEntity("item")
      entityDrop.x = event.target.x
      entityDrop.y = event.target.y
      entityDrop.z = event.target.z
      entityDrop.item = item
      entityDrop.item.count = getRandomNumBetween(itemOpts.minCount ?? 0, itemOpts.maxCount ?? 1)
      entityDrop.motionY = 0.3
      entityDrop.motionX = 0.01
      entityDrop.spawn()

      if (itemOpts?.allowOtherDrops) continue
      break
    }
  }
  if (opts.damageHeldItem) event.player.damageHeldItem()  
  event.target.persistentData.lastInteracted = (Date.now() + opts.expiryMs)
  event.cancel()
}

const getPlayerPos = (player) => {
  const pos = player.getPos()
  return {
      x: Math.round(pos.x()),
      y: Math.round(pos.y()),
      z: Math.round(pos.z()),
  }
}

ItemEvents.entityInteracted(event =>{
  console.log(event.target)
  interactionHelper(event, [/minecraft:zombie/, "minecraft:chicken"], [/.*:shears/, "minecraft:stick"], {
    'minecraft:feather':{
      minCount: 1,
      maxCount: 5,
      chance: 1,
    }
  }, {
    expiryMs: 30e3, // 30s
    damageHeldItem: true,
  })
})
