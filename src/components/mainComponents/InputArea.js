import { useMemo } from 'react'
import { useSelector } from 'react-redux'

function InputRow({inputArray, idNum }) {
  const rowVal = inputArray[idNum].value
  const inputRowArr= useMemo(()=> {
    const rowArr = []
    for (let i = 0; i < 5; i++) {
      rowArr.push(
        <div className={inputArray[idNum].value[i].classes[0]} key={i} id={i}>
          {inputArray[idNum].value[i].value}
        </div>
      )
    }
    return rowArr
  }, [idNum, rowVal])

  return <div className={inputArray[idNum].classes[0]}>{inputRowArr}</div>
}

export default function InputArea({setStatOpen}) {
  const inputArray = useSelector((state) => state.inputArray)
  const blocksAreFull = useSelector((state)=>
  state.columnRowCounter.blocksAreFull)
  const openstat = () => setStatOpen(true)
  if(inputArray.validate.isValueEqual||blocksAreFull){
    setTimeout(openstat, 800)
  }
  const inputArea = []
  for (let i = 0; i < 6; i++) {
    inputArea.push(<InputRow inputArray={inputArray} key={i} idNum={i} />)
  }
  return <div className="inputArea">{inputArea}</div>
}
