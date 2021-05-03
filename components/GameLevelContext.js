import { useContext, createContext, useState } from 'react'

const gameLevelModes = {
  easy: {
    value: 200,
    label: 'EASY：200秒',
  },
  normal: {
    value: 150,
    label: 'NORMAL：150秒',
  },
  hard: {
    value: 100,
    label: 'HARD：100秒',
  },
  god: {
    value: 60,
    label: 'GOD：60秒',
  },
}

const GameLevelContext = createContext({
  gameLevel: gameLevelModes.normal.value,
  setGameLevel: () => {},
})

const GameLevelProvider = ({ children }) => {
  const [gameLevel, setGameLevel] = useState(gameLevelModes.normal.value)
  return (
    <GameLevelContext.Provider value={{ gameLevel, setGameLevel }}>
      {children}
    </GameLevelContext.Provider>
  )
}

const useGameLevelContext = () => useContext(GameLevelContext)
export {
  GameLevelProvider,
  useGameLevelContext,
  gameLevelModes,
  GameLevelContext,
}
