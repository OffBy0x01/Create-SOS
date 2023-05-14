EntityEvents.death(event => {
  // testing silentgear compat mod
  return
  // if killer is not player
  if (event.source.type !== 'player') return
  
  // if entity is player
  if ( event.entity.type === 'player') return
  
  // if item is not silentgear
  const player = event.source.actual
  if (player.mainHandItem.mod !== 'silentgear') return
  
  // if gear does not use soul_steel
  if (!silentGearUsingMaterial(player, 'spirit:soul_steel_ingot')) return

  // mod deny list
  if ([ 'immersive_aircraft', 'create' ].includes(event.entity.mod)) return
  
  // entity deny list
  if ([ /ad_astra:tier.*/, /ad_astra:lander.*/ ].some(pattern => pattern.test(event.entity.type))) return


  let emptyCrystal = null
  for (const itemStack of player.inventory) {    
    // not a soul crystal, skip
    if (itemStack.id !== 'spirit:soul_crystal') continue
    // crystal exists but is empty
    if (itemStack.nbt.StoredEntity === undefined) {
      emptyCrystal = itemStack
    // matching type & not full
    } else if (itemStack.nbt.StoredEntity.Type === event.entity.type && itemStack.nbt.StoredEntity.Souls < 512) {
      player.tell(`found a crystal matching '${event.entity.type}', increasing souls by 1`)
      itemStack.nbt.StoredEntity.Souls = itemStack.nbt.StoredEntity.Souls + 1
      // itemStack.nbt = {
      //   Type: itemStack.nbt.StoredEntity.Type,
      //   Souls: itemStack.nbt.StoredEntity.Souls + 1
      // }
      // return so no further actions are taken
      return
    }     
  }

  // if we didn't find any crystals with a matching entity, use a blank one
  if (emptyCrystal !== null) {
    player.tell('didn\'t find any matching crystals, using a blank')
    emptyCrystal.nbt = {
      StoredEntity: {
        Type: event.entity.type,
        Souls: 1
      }
    }
  }
})


const silentGearUsingMaterial = (player, material) => {
  const nbtData = player.mainHandItem.nbt
  const parts = nbtData?.SGear_Data.Construction.Parts ?? []

  for (let i = 0; i < parts.length; i++) {
    const materials = parts[i].Item.tag.Materials
    if (materials) {
      for (let j = 0; j < materials.length; j++) {
        if (materials[j].Item.id === material) {
          return true
        }
      }
    }
  }
  return false
}