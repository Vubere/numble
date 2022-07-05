import React from 'react'
import Navbar from './components/Navbar'
import InputArea from './components/mainComponents/InputArea'
import NumberPad from './components/mainComponents/NumberPad'
import Statistics from './components/navbarComponents/Statistics'
import Help from './components/navbarComponents/Help'
import Settings from './components/navbarComponents/Settings'
import Menu from './components/navbarComponents/Menu'
import Main from './components/Main'

export default function App() {
  return (
    <>
      <Navbar />
      <Statistics />
      <Menu />
      <Help />
      <Settings />
      <Main>
        <InputArea />
        <NumberPad />
      </Main>
    </>
  )
}
