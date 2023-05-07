const getPlayerPos = (player) => {
  const pos = player.getPos()
  return {
      x: Math.round(pos.x()),
      y: Math.round(pos.y()),
      z: Math.round(pos.z()),
  }
}