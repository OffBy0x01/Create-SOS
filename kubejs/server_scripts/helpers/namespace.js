const C = (name) => `create:${name}`
const CC = (name) => `computercraft:${name}`
const AA = (name) => `adastra:${name}`
const MC = (name) => `minecraft:${name}`
const SG = (name) => `silentgear:${name}`

const potion = (potionID, bottle) => Item.of('minecraft:potion', `{Potion:"${potionID}", Bottle:"${bottle}"}`)

const potionFluid = (potionID, count, bottle) => Fluid.of('create:potion', count, `{Potion:"${potionID}", Bottle:"${bottle}"}`)