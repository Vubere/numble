import { useDispatch, useSelector } from 'react-redux'
import { numberClicked, removeNumber } from './numberSlice'
import {
  updateBlockValue,
  deleteBlockValue,
  updateClasses,
  updateValidation,
} from './inputSlice'
import {
  countColumnsRow,
  deleteColumn,
  goToNewRow,
} from './features/columnRowCounterSlice'
import { updateStats } from './inputSlice'
import { memo, useMemo } from 'react'

export default memo(function NumberPad() {
  const { generatedNumber, clickedNumberArray } = useSelector(
    (state) => state.numberFetch
  )

  const dispatch = useDispatch()
  const colRow = useSelector((state) => state.columnRowCounter)
  const blocksAreFull = useSelector(
    (state) => state.columnRowCounter.blocksAreFull
  )
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
    if (blocksAreFull) return
    if (colRow.rowIsFull) {
      dispatch(
        updateValidation({
          generatedNumber,
          clickedNumberArray,
        })
      )
      dispatch(updateStats())
      dispatch(updateClasses())
      dispatch(goToNewRow())
    }
  }
  const del = () => {
    if (blocksAreFull || clickedNumberArray.length === 0) {
      return
    }
    dispatch(
      deleteBlockValue({
        column: colRow.currentColumn,
        row: colRow.currentRow,
        rowIsFull: colRow.rowIsFull,
      })
    )
    dispatch(deleteColumn())
    dispatch(removeNumber())
  }

  const numberArr = useMemo(() => {
    const arr = []
    for (let i = 0; i <= 9; i++) {
      arr.push(
        <button className="button normal" onClick={fetchNumber(i)} key={i}>
          {i}
        </button>
      )
    }
    return arr
  })
  return (
    <footer>
      <div className="buttonContainer">
        {numberArr}
        <button
          className="button normal enter"
          onClick={() => {
            enter()
          }}
        >
          ENTER
        </button>
        <button className="button normal del" onClick={del}>
          <i className="i delIcon"></i>
        </button>
      </div>
    </footer>
  )
})
