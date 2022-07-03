import React from 'react'
import Navbar from './components/Navbar'
import InputArea from './components/InputArea'
import NumberPad from './components/NumberPad'
import Statistics from './components/Statistics'
import Help from './components/Help'
import Settings from './components/Settings'
import Menu from './components/Menu'

export default function App(){
  return(
    <>
      <Navbar/>
      <Statistics/>
      <Menu/>
      <Help/>
      <Settings/>
      <InputArea/>
      <NumberPad/>
    </>
  )
}