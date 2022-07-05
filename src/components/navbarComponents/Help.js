import React, { useState } from 'react'

export default function Help() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {open&&<div className="help-container">
        <div className="help">
          <h2>HOW TO PLAY</h2>
          <span>x</span>
          <p>Guess the number in six tries.</p>
          <p>
            If your guess is lesser you get a red border. if it is greater you get
            a yellow border.
          </p>
          <p>
            After each guess the color of the tile will change to show how close
            you are.
          </p>
          <ul>
            <li>Transparent if the number is contained.</li>
            <li>Yellow if the digit is in the number but in the wrong spot</li>
            <li>Green if digit is in number and in the right spot</li>
          </ul>
        </div>
      </div>
      }
    </>
  )
}
