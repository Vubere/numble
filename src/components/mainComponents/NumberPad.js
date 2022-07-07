import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberClicked, submitClicked } from './numberSlice'
import { updateBlockValue } from './inputSlice'
import {
  countColumnsRow,
  changeColumnIsFull,
  changeRowIsFull,
} from './features/columnRowCounterSlice'

export default memo(function NumberPad() {
  const dispatch = useDispatch()
  const colRow = useSelector((state) => state.columnRowCounter)

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
          onClick={() => {
            if (colRow.rowIsFull) {
              dispatch(submitClicked())
              dispatch(changeRowIsFull())
            }
          }}
        >
          ENTER
        </button>
        <button className="button normal del">Del</button>
      </div>
    </footer>
  )
})
