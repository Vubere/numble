import React, { useState } from 'react'
import Statistics from './navbarComponents/Statistics'
import Help from './navbarComponents/Help'
import Settings from './navbarComponents/Settings'
import Menu from './navbarComponents/Menu'

export default function Navbar() {
  const [statsOpen, setStatOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
      <div onClick={() => setMenuOpen(!menuOpen)}>
        menu{menuOpen && <Menu />}
      </div>
      <div onClick={() => setHelpOpen(!helpOpen)}>?{helpOpen && <Help />}</div>
      <div className="heading">Numble</div>
      <div onClick={() => setStatOpen(!statsOpen)}>
        stats{statsOpen && <Statistics setStatOpen={setStatOpen} />}
      </div>
      <div onClick={() => setSettingsOpen(!settingsOpen)}>
        settings{settingsOpen && <Settings />}
      </div>
    </header>
  )
}
