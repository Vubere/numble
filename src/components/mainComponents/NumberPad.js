import React from 'react'
import { useDispatch, useSelector,  } from 'react-redux'
import { numberClicked } from './numberSlice'
import { updateBlockValue } from './inputSlice'
import { countColumnsRow } from './columnRowCounterSlice'

export default function NumberPad() {
  const dispatch = useDispatch()
  const colRow = useSelector(state=>state.columnRowCounter)

  const fetchNumber = (i)=>()=>{
    if(colRow.blocksAreFull) return
    dispatch(numberClicked(i))
    dispatch(updateBlockValue({
      row: colRow.currentRow, 
      column:colRow.currentColumn, 
      value:i
    }))
    dispatch(countColumnsRow())
    console.log(i)
  }
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
