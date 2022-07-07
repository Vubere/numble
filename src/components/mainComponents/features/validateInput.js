import { useSelector } from 'react-redux'

export function useValidateInput() {
  const {generatedNumber, clickedNumberArray:inputArray } = useSelector((state) => {
    return state.numberFetch
  })

  let inputedNumber = Number(inputArray.join(''))

  let genNumArr = generatedNumber.toString().split('')
  let similarIndex = []
  genNumArr.filter((val, i) => {
    let bool = Number(val) === inputArray[i]
    if (bool) {
      similarIndex.push(i)
    }
    return bool
  })
  let similarDigits = {}
  genNumArr.forEach((val,i)=>{
    if(inputArray.includes(Number(val))){
      let index = inputArray.indexOf(Number(val))
      if(similarDigits[index]){
        index = inputArray.lastIndexOf(Number(val))
      }
      if(i!==index){
        console.log(index, i)
        similarDigits[index] = Number(val)
      }
    }
  })
  console.log(similarDigits)
  return {
    isValueEqual: inputedNumber === generatedNumber,
    isValueGreater: inputedNumber > generatedNumber,
    isValueLesser: inputedNumber < generatedNumber,
    similarIndexes: similarIndex,
    similarDigitsDIffIndex: similarDigits,
  }
}
