import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import InputArea from './components/mainComponents/InputArea'
import NumberPad from './components/mainComponents/NumberPad'
import { setStatFromLS } from './components/mainComponents/inputSlice'
import { useState } from 'react'

export default function App() {
  const dispatch = useDispatch()
  const [statsOpen, setStatOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const openStates = {
    menuOpen,
    setMenuOpen,
    statsOpen,
    setStatOpen,
    helpOpen,
    setHelpOpen,
    settingsOpen,
    setSettingsOpen,
  }
  if (menuOpen) {
    if (helpOpen) {
      setHelpOpen(false)
    }
    if (statsOpen) {
      setStatOpen(false)
    }
    if (settingsOpen) {
      setSettingsOpen(false)
    }
  } else if (helpOpen) {
    if (menuOpen) {
      setMenuOpen(false)
    }
    if (statsOpen) {
      setStatOpen(false)
    }
    if (settingsOpen) {
      setSettingsOpen(false)
    }
  } else if (statsOpen) {
    if (helpOpen) {
      setHelpOpen(false)
    }
    if (menuOpen) {
      setMenuOpen(false)
    }
    if (settingsOpen) {
      setSettingsOpen(false)
    }
  } else if (settingsOpen) {
    if (helpOpen) {
      setHelpOpen(false)
    }
    if (statsOpen) {
      setStatOpen(false)
    }
    if (menuOpen) {
      setMenuOpen(false)
    }
  }
  useEffect(() => {
    if (localStorage.getItem('stats')) {
      const statistics = JSON.parse(localStorage.getItem('stats'))
      dispatch(setStatFromLS(statistics))
    }
  }, [])

  return (
    <>
      <Navbar openStates={openStates}/>
      <main>
        <InputArea setStatOpen={setStatOpen} />
        <NumberPad />
      </main>
    </>
  )
}
