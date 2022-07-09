import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberClicked} from './numberSlice'
import { updateBlockValue, updateClasses, updateValidation } from './inputSlice'
import {
  countColumnsRow,
  goToNewRow,
} from './features/columnRowCounterSlice'

export default function NumberPad() {
  const {generatedNumber, clickedNumberArray} = useSelector(state=>
    state.numberFetch)
  const dispatch = useDispatch()
  const colRow = useSelector((state) => state.columnRowCounter)
  const blocksAreFull = useSelector(state=>state.columnRowCounter.blocksAreFull)
  const fetchNumber = (i) => () => {
    if (colRow.blocksAreFull) return
    if (colRow.rowIsFull) return
    dispatch(numberClicked(i))
    dispatch(
      updateBlockValue({
        row: colRow.currentRow,
        column: colRow.currentColumn,
        value: i,
      })
    )
    dispatch(countColumnsRow())
  }
  const enter = () => {
    if(blocksAreFull) return
    if (colRow.rowIsFull) {
      dispatch(updateValidation({
        generatedNumber,
        clickedNumberArray
      }))
      dispatch(updateClasses())
      dispatch(goToNewRow())
    }
  }
  
  let numberArr = []
  for (let i = 0; i <= 9; i++) {
    numberArr.push(
      <button className="button normal" onClick={fetchNumber(i)} key={i}>
        {i}
      </button>
    )
  }
  return (
    <footer>
      <div className="buttonContainer">
        {numberArr}
        <button
          className="button normal enter"
          onClick={enter}
        >
          ENTER
        </button>
        <button className="button normal del">Del</button>
      </div>
    </footer>
  )
}