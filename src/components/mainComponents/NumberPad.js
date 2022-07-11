import { useDispatch, useSelector } from 'react-redux'
import { numberClicked, removeNumber } from './numberSlice'
import { updateBlockValue, deleteBlockValue, updateClasses, updateValidation,  } from './inputSlice'
import { countColumnsRow, deleteColumn, goToNewRow} from './features/columnRowCounterSlice'
import { updateStats } from './inputSlice'


export default function NumberPad() {
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
  if(blocksAreFull||clickedNumberArray.length===0){
    return
  }
  dispatch(deleteBlockValue({
    column: colRow.currentColumn,
    row: colRow.currentRow,
    rowIsFull: colRow.rowIsFull
  }))
  dispatch(deleteColumn())
  dispatch(removeNumber())
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
        <button className="button normal enter" onClick={enter}>
          ENTER
        </button>
        <button className="button normal del"
        onClick={del}>Del</button>
      </div>
    </footer>
  )
}
