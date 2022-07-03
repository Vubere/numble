import React from 'react'

export default function NumberPad() {
  let numberArr = []
  for (let i = 0; i <= 9; i++) {
    numberArr.push(
      <button className="button normal" key={i}>
        {i}
      </button>
    )
  }
  return (
    <footer>
      <div className="buttonContainer">
        {numberArr}
        <button className="button normal enter">ENTER</button>
        <button className="button normal enter">Del</button>
      </div>
    </footer>
  )
}
