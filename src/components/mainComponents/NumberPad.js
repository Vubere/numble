import React from 'react'
import { useDispatch } from 'react-redux'
import { numberClicked } from './numberSlice'

export default function NumberPad() {
  const dispatch = useDispatch()
  const fetchNumber = (i)=>()=>
   dispatch(numberClicked(i))
  let numberArr = []
  for (let i = 0; i <= 9; i++) {
    numberArr.push(
      <button className="button normal" onClick={fetchNumber(i)} key={i} id={i}>
        {i}
      </button>
    )
  }
  return (
    <footer>
      <div className="buttonContainer">
        {numberArr}
        <button className="button normal enter">ENTER</button>
        <button className="button normal enter">Del</button>
      </div>
    </footer>
  )
}
