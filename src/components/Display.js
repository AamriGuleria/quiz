import React from 'react'
import { useState ,useEffect} from 'react'
import {useLocation} from "react-router-dom"
const Display = () => {
    const location=useLocation()
    const [aam,setaam]=useState([])
    let arr=location.state;
    let a=arr.correct
    let b=arr.userans;
    let c=arr.quest;
    let score=arr.score
    function func(a,b){
      console.log(score)
    }
    useEffect(()=>{
      func(a,b);
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
      <p className="footer">Keep Playing! Keep Going!🤍</p>
    </div>
  )
}

export default Display
