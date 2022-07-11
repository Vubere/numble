import { useSelector, useDispatch } from 'react-redux'

function InputRow({ idNum }) {
  const inputArray = useSelector((state) => state.inputArray)
 
  const inputRowArr = []
  for (let i = 0; i < 5; i++) {
    inputRowArr.push(
      <div className={inputArray[idNum].value[i].classes[0]} key={i} id={i}>
        {inputArray[idNum].value[i].value}
      </div>
    )
  }

  return <div className={inputArray[idNum].classes[0]}>{inputRowArr}</div>
}

export default function InputArea() { 
  const inputArea = []
  for (let i = 0; i < 6; i++) {
    inputArea.push(<InputRow key={i} idNum={i} />)
  }
  return <div className="inputArea">{inputArea}</div>
}
