import React from "react";
import { resetStats } from "../mainComponents/inputSlice";
import { useDispatch } from "react-redux";

export default function Settings({setSettingOpen}){
  const dispatch = useDispatch()

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
          <div onClick={()=>{
            dispatch(resetStats())
          }}>Reset stats</div>
          <div>feedback and questions</div>
        </div>
      </div>
    </>
  )
}