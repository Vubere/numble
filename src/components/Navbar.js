import React from 'react'
import Statistics from './navbarComponents/Statistics'
import Help from './navbarComponents/Help'
import Settings from './navbarComponents/Settings'
import Menu from './navbarComponents/Menu'

export default function Navbar({openStates}) {
  return (
    <header>
      <nav className="left">
        <div>
          <i className="i menuIcon" onClick={() => openStates.setMenuOpen(!openStates.menuOpen)}></i>
          {openStates.menuOpen && <Menu setMenuOpen={openStates.setMenuOpen} />}
        </div>
        <div>
          <i className="i helpIcon" onClick={() => openStates.setHelpOpen(!openStates.helpOpen)}></i>
          {openStates.helpOpen && <Help setHelpOpen={openStates.setHelpOpen} />}
        </div>
      </nav>
      <div className="i heading" role="heading" aria-level="1">
        Numbe
      </div>
      <nav className="right">
        <div>
          <i className="i stat" onClick={() => openStates.setStatOpen(!openStates.statsOpen)}></i>{' '}
          {openStates.statsOpen && <Statistics setStatOpen={openStates.setStatOpen} />}
        </div>
        <div>
          <i
            className="i setting"
            onClick={() => openStates.setSettingsOpen(!openStates.settingsOpen)}
          ></i>
          {openStates.settingsOpen && <Settings setSettingsOpen={openStates.setSettingsOpen} />}
        </div>
      </nav>
    </header>
  )
}
