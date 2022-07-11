import React, { useState } from "react";

export default function Menu(){

  return(
    <>
      <div className="menu-container">
        <div className="menu">
          <h2>Games</h2>
          <p>MORE FROM VICTOR UBERE</p>
          <ul>
            <li>
              <div onClick={()=>{
                window.location.assign("https://Vubere.github.io")
              }}>Tetrix</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}