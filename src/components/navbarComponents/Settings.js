import React, { useState } from "react";

export default function Settings(){
  const [open, setOpen] = useState(false)
  
  return(
    <>
    {open&&
      <div className="settings-container">
        <div className="settings">
          <h2>SETTINGS</h2>
          <div>
            Hard Mode <span>Any revealed hints must be in subsequent guesses.</span>
          </div>
          <div>Dark theme</div>
          <div>feedback and questions</div>
        </div>
      </div>
    }
    </>
  )
}