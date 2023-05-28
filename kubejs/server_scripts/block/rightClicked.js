const chargeRespawnObeliskWithSouls = (event) => {
  if (event.server === null) return
  const handItem = event.player.mainHandItem
  if (
    // target block is respawn obelisk
    /respawnobelisks:respawn_obelisk.*/.test(event.block.id) &&
    // item in hand is soul crystal
    handItem.id === 'spirit:soul_crystal' &&
    // soul crystal has charge
    (handItem?.nbt?.StoredEntity?.Souls ?? 0) > 0
  ) {
    const obelisk = event.block.getEntityData()

    // entity data not null & obelisk not fully charged
    if (obelisk !== null && obelisk.Charge < 100) {
      // charge either by souls or remaining capacity, whichever is lower
      const chargeAmount = Math.min(100 - obelisk.Charge, handItem.nbt.StoredEntity.Souls)
      handItem.nbt.StoredEntity.Souls -= chargeAmount
      obelisk.Charge += chargeAmount
      // update block & item data
      handItem.setNbt(handItem.nbt)
      event.block.setEntityData(obelisk)

      if (handItem.nbt.StoredEntity.Souls === 0) {
        // soul crystal now contains no souls, reset soul type
        handItem.setNbt({})
      }
    }    
  }
}

const fillDisenchantingWithSoulFluid = (event) => {
  const TANK_CONTENT_MAX = 1000
  const SOUL_TO_HYPER_EX = 2
  const handItem = event.player.mainHandItem

  if (handItem.id !== 'spirit:soul_crystal') return

  if (undefined === handItem.nbt?.StoredEntity?.Souls) return

  const disenchanterBlock = event.block.getEntityData()
  const tankContent = disenchanterBlock.Tanks[0].TankContent
  if (
    tankContent.Amount < TANK_CONTENT_MAX && (
      tankContent.FluidName === 'minecraft:empty' || 
      tankContent.FluidName === CEI("hyper_experience")
    )
  ){
    const extractAmount = Math.min((TANK_CONTENT_MAX - tankContent.Amount) / SOUL_TO_HYPER_EX, SOUL_TO_HYPER_EX * handItem.nbt.StoredEntity.Souls)
    tankContent.Amount += SOUL_TO_HYPER_EX * extractAmount
    tankContent.FluidName = CEI("hyper_experience")
    event.block.setEntityData(disenchanterBlock)
  }
}

BlockEvents.rightClicked(event => {
  // fillDisenchantingWithSoulFluid(event)

  // chargeRespawnObeliskWithSouls(event)
})