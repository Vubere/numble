import React from "react";

function InputRow(){
  const inputRowArr = []
  for(let i=0; i<5; i++){
    inputRowArr.push(<div className='inputDiv' key={i}></div>)
  }
  return(
    <div className=" inputRow">
      {inputRowArr}
    </div>
  )
}
export default function InputArea(){
  
  const inputArea = []
  for(let i=0; i<6; i++){
    inputArea.push(<InputRow key={i}/>)
  }
  return(
    <main>
     {inputArea}
    </main>
  )
}