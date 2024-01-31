import React from 'react'
import { useState ,useEffect} from 'react'
import {useLocation} from "react-router-dom"
const Display = () => {
    const location=useLocation()
    const [score,setscore]=useState(0)
    let arr=location.state;
    let a=arr.correct
    let b=arr.userans;
    let c=arr.quest;
    useEffect(()=>{
      for(let i=0;i<a.length;i++){
        if(a[i]===b[i]){
          setscore(score+1);
        }
      }
    },[a,b])
  return (
    <div className="main">
      {/* <h4>Results</h4> */}
      <div className="report">Report</div>
      <center className='center'>
      {
        c.map((ele,index)=>{
          return(
            <>
            <div className='cont'>
            <fieldset>
            <p className="q">{ele}</p>
            <p>{(b[index]===""||b[index]===undefined?"no answer choosen":`your answer is ${b[index]}`)}</p>
            <p>Correct answer is <span>{a[index]}</span></p>
            </fieldset>
            </div>
            </>
          )
        })
      }
      </center>
      <p className="score">Your score is {score} out of {a.length}</p>
    </div>
  )
}

export default Display
