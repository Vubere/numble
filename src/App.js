import React from 'react'
import Navbar from './components/Navbar'
import InputArea from './components/mainComponents/InputArea'
import NumberPad from './components/mainComponents/NumberPad'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <InputArea />
        <NumberPad />
      </main>
    </>
  )
}
