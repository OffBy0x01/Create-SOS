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

function interactionHelper(event, entities, holdingItems, dropsWithChance, expiryMs){

  const compareStringOrRegex = (stringOrRegex, value) => {
    if (typeof stringOrRegex === 'string') {
      return value === stringOrRegex
    } else if (stringOrRegex instanceof RegExp) {
      return stringOrRegex.test(value)
    }
    return false
  }
  
  if ( // expiry invalid
    isNaN(expiryMs) || 
    expiryMs < 0 ||
    expiryMs > 60*60e3
  ) {
    throw Error(`Invalid expiry '${expiryMs}' - must be 0 < number < 60*60e3`)
  }

  if( // no matching entities or items
    false === entities.some(e => compareStringOrRegex(e, event.target.type)) ||
    false === holdingItems.some(i => compareStringOrRegex(i, event.player.mainHandItem.id ))
  ) {
    return
  }

  event.player.tell("matching items")

  if ( // already interacted and previous interaction NOT expired
    event.target.persistentData?.lastInteracted !== undefined &&
    event.target.persistentData.lastInteracted < (Date.now() + expiryMs)
    ) {
    return
  }

  event.player.tell("interaction valid")

  for (const [item, opts] of Object.entries(dropsWithChance)) {
    event.player.tell(`${item}:${JSON.stringify(opts, null, 2)}`)
    event.player.tell(Math.random() <= (opts?.chance ?? 1))
    if (Math.random() <= (opts?.chance ?? 1)) {
      const entityDrop = event.level.createEntity("item")
      entityDrop.x = event.target.x
      entityDrop.y = event.target.y
      entityDrop.z = event.target.z
      entityDrop.item = item
      entityDrop.item.count = opts.count
      entityDrop.motionY = 0.32

      event.player.tell("attempting to spawn item")

      entityDrop.spawn()

      if (opts?.damageHeldItem) event.player.damageHeldItem()
      if (opts?.allowOtherDrops) continue

      event.target.persistentData.lastInteracted = (Date.now() + expiryMs)
      return
    }
  }  
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
  interactionHelper(event, [/minecraft:zombie/, /minecraft:chicken/], [/minecraft:shears/], {
    'minecraft:rotten_flesh':{
      count: 2,
      chance: 1,
      damageHeldItem: true,
    }
  }, 30e3)
})
