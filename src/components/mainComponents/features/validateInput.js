import { useSelector } from "react-redux";


function useValidateInput(num){
  const generatedNumber = useSelector(state=>{
    return state.numberFetch.generatedNumber
    })
  const colRow = useSelector(state =>state.columnRowCounter)
  const inputArray = useSelector(state =>state.inputArray[colRow.currentRow])
  let inputedNumber = 0
  for(let i in inputArray){
    if(Number(i)===4){
      inputedNumber = Number(inputArray[i])
      break
    }
    inputArray[i] = Number(inputArray[i]*10**(4-i))
    inputedNumber+=inputArray[i]
  }
  return ({
    isValueEqual: inputedNumber===num,
    isValueGreater: inputedNumber>num,
    isValueLesser: inputedNumber<num,
    similarIndexes: [],
    similarDigitsDIffIndex: []
  })
}