import React, {useLayoutEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateClasses } from './inputSlice'

function InputRow({ classNames, idNum }) {
  const inputArray = useSelector((state) => state.inputArray)
  const dispatch = useDispatch()
  
  const { currentRow } = useSelector((state) => state.columnRowCounter)
  const {
    isValueEqual,
    isValueGreater,
    isValueLesser,
    similarIndexes,
    similarDigitsDIffIndex,
  } = useSelector((state) => state.numberFetch.validate)
  function decideClass(i) {
    let classNames = isValueEqual
      ? 'inputRow green'
      : isValueGreater? 'inputRow yellow'
      : isValueLesser? 'inputRow white'
      : 'inputRow';
    dispatch(updateClasses({ value: classNames, row: i }))
  }
  const inputRowArr = []
  for (let i = 0; i < 5; i++) {
    inputRowArr.push(
      <div className="inputDiv" key={i} id={i}>
        {inputArray[idNum].value[i]}
      </div>
    )
  }
  decideClass(idNum)
  return <div className={}>{inputRowArr}</div>
}
export default function InputArea() {
  const inputArray = useSelector((state) => state.inputArray)
  const inputArea = []
  
  console.log()

  for (let i = 0; i < 6; i++) {
    inputArea.push((
        <InputRow key={i} idNum={i}
        />
      )
    )
  }
  return <div className="inputArea">{inputArea}</div>
}
