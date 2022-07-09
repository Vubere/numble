import React, { useState } from "react";

export default function Settings({setSettingOpen}){
  
  return(
    <>
      <div className="settings-container">
        <div className="settings">
          <h2>SETTINGS</h2>
          <span onClick={setSettingOpen}>x</span>
          <div>
            Hard Mode <span>Any revealed hints must be in subsequent guesses.</span>
          </div>
          <div>Dark theme</div>
          <div>feedback and questions</div>
        </div>
      </div>
    </>
  )
}