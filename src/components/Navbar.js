import React, { useState } from 'react'
import Statistics from './navbarComponents/Statistics'
import Help from './navbarComponents/Help'
import Settings from './navbarComponents/Settings'
import Menu from './navbarComponents/Menu'

export default function Navbar({statsOpen, setStatOpen}) {
  const [helpOpen, setHelpOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
  return (
    <header>
      <nav className="left">
        <div>
          <i className="i menuIcon" onClick={() => setMenuOpen(!menuOpen)}></i>
          {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
        </div>
        <div>
          <i className="i helpIcon" onClick={() => setHelpOpen(!helpOpen)}></i>
          {helpOpen && <Help setHelpOpen={setHelpOpen} />}
        </div>
      </nav>
      <div className="i heading" role="heading" aria-level="1">
        Numble
      </div>
      <nav className="right">
        <div>
          <i className="i stat" onClick={() => setStatOpen(!statsOpen)}></i>{' '}
          {statsOpen && <Statistics setStatOpen={setStatOpen} />}
        </div>
        <div>
          <i
            className="i setting"
            onClick={() => setSettingsOpen(!settingsOpen)}
          ></i>
          {settingsOpen && <Settings setSettingsOpen={setSettingsOpen} />}
        </div>
      </nav>
    </header>
  )
}
