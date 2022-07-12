import React from "react";
import { resetStats } from "../mainComponents/inputSlice";
import { useDispatch } from "react-redux";

export default function Settings({setSettingsOpen}){
  const dispatch = useDispatch()

  return(
    <>
      <div className="settingsContainer">
        <div className="settings">
          <h2>SETTINGS</h2>
          <i className="i cancel" onClick={()=>setSettingsOpen(false)}></i>
          <div onClick={()=>{
            dispatch(resetStats())
          }}>Reset stats</div>
          <div onClick={()=>{
            window.location.assign('https://twitter.com/victorubere')
          }}>Twitter page</div>
        </div>
      </div>
    </>
  )
}