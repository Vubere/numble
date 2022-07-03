import React, { useState } from "react";

export default function Menu(){
  const [open, setOpen] = useState(false)

  return(
    <>
    {
      open&&
      <div className="menu-container">
        <div className="menu">
          <h2>Games</h2>
          <p>MORE FROM VICTOR UBERE</p>
          <ul>
            <li>
              <a href="Vubere.github.io">Tetrix</a>
            </li>
          </ul>
        </div>
      </div>
    }
    </>
  )
}