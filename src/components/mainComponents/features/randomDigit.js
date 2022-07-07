export default function randomFiveDigits() {
  let arr = []
  let i = 5,
    digit,
    occurenceObject = {}
  while (i !== 0) {
    digit = Math.floor(Math.random() * 10)
    if(arr.length===0&&digit===0){
      while(digit===0){
        digit = Math.floor(Math.random() * 10)
      }
    }
    if(occurenceObject[digit]){
      while(occurenceObject[digit]){
        digit = Math.floor(Math.random() * 10)
      }
    }
    arr.push(digit)
    occurenceObject[digit] = 1
    i--
  }
  return Number(arr.join(''))
}
