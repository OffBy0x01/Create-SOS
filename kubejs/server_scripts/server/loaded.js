ServerEvents.loaded(e => {
	//Server first load warning
	const serverData = e.server.persistentData
	e.server.runCommandSilent(`/gamerule spawnradius 128`)
  e.server.runCommandSilent(`/reload`)
	if (!serverData.firstLoad) {
		
		
		console.warn('First server load! Lag may be present for a few minutes.')
    serverData.firstLoad = true
	}
})