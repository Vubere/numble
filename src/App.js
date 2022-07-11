import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Navbar from './components/Navbar'
import InputArea from './components/mainComponents/InputArea'
import NumberPad from './components/mainComponents/NumberPad'
import {setStatFromLS} from './components/mainComponents/inputSlice'

export default function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('stats')){
      const statistics = JSON.parse(localStorage.getItem('stats'))
      dispatch(setStatFromLS(statistics))
    }
  })
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
