import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {addBlock} from "./inputSlice"

function InputRow({idNum}){
  const inputArray = useSelector(state => state.inputArray)

  const inputRowArr = []
  for(let i=0; i<5; i++){
    inputRowArr.push(<div className='inputDiv' key={i} id={i}>{inputArray[idNum][i]}</div>)
  }
  return(
    <div className=" inputRow" id={idNum}>
      {inputRowArr}
    </div>
  )
}
export default function InputArea(){
  const inputArea = []
  for(let i=0; i<6; i++){
    inputArea.push(<InputRow key={i} idNum={i}/>)
  }
  return(
    <div className="inputArea">
     {inputArea}
    </div>
  )
}