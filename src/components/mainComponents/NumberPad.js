import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberClicked, submitClicked } from './numberSlice'
import { updateBlockValue, updateClasses } from './inputSlice'
import {
  countColumnsRow,
  goToNewRow,
  changeRowIsFull,
} from './features/columnRowCounterSlice'

export default function NumberPad() {
  const dispatch = useDispatch()
  const colRow = useSelector((state) => state.columnRowCounter)
  const {
    validate: {
      isValueEqual,
      isValueGreater,
      isValueLesser,
      similarIndexes,
      similarDigitsDiffIndex,
    },
  } = useSelector((state) => state.numberFetch)
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
    let curRow = colRow.currentRow
    if (colRow.rowIsFull) {
      dispatch(submitClicked())
      if (isValueEqual) {
        dispatch(
          updateClasses({
            row: curRow,
            value: ['inputRow green'],
          })
        )
      } else if (isValueGreater) {
        dispatch(
          updateClasses({
            row: curRow,
            value: ['inputRow yellow'],
          })
        )
      } else if (isValueLesser) {
        dispatch(
          updateClasses({
            row: curRow,
            value: ['inputRow white'],
          })
        )
      }
      dispatch(changeRowIsFull())
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
