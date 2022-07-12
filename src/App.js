import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Navbar from './components/Navbar'
import InputArea from './components/mainComponents/InputArea'
import NumberPad from './components/mainComponents/NumberPad'
import {setStatFromLS} from './components/mainComponents/inputSlice'
import { useState } from 'react'

export default function App() {
  const dispatch = useDispatch()
  const [statsOpen, setStatOpen] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('stats')){
      const statistics = JSON.parse(localStorage.getItem('stats'))
      dispatch(setStatFromLS(statistics))
    }
  }, [])

  return (
    <>
      <Navbar statsOpen={statsOpen} 
      setStatOpen={setStatOpen}/>
      <main>
        <InputArea setStatOpen={setStatOpen}/>
        <NumberPad />
      </main>
    </>
  )
}
