import React, { useState ,useEffect} from 'react'
import {useLocation,useNavigate} from "react-router-dom"
const Question = () => {
  const [quest,setquest]=useState();
  const [userans,setuserans]=useState([])
  const [correct,setcorrect]=useState([])
    const location=useLocation()
    const navigate=useNavigate()
    let arr=location.state.data.results
    const selectoption=(sol,ind)=>{
        userans[ind]=sol
    }
    useEffect(()=>{
      if(arr!==undefined || arr.length!==0){
        let tmp=[]
        let q=[]
        arr.forEach((item)=>{
          q.push(item.question)
          item.incorrect_answers.push(item.correct_answer)
          shuffleArray(item.incorrect_answers)
          item.incorrect_answers=[...new Set(item.incorrect_answers)]
          tmp.push(item.correct_answer)
        })
        setquest(q)
        setcorrect(tmp)
      }
    },[arr])
    const main=()=>{
      console.log(userans)
      setTimeout(()=>{
        navigate('/display',{state:{userans,correct,quest}})
      },200)
    }
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }
  return (
    <>
    <div className="question">
      <div className="head">
        Your Questions
      </div>
       {
        arr.map((ele)=>{
            return(
            <>
            <div>
              <fieldset className="field">
                <p id={ele.index}>{ele.question}</p>
                <div>
                <select key={ele.index} id="sel" onChange={(e,key)=>{selectoption((e.target.value===""?"empty":e.target.value),arr.indexOf(ele),ele.correct_answer)}}>
                <option className="any"   value="select your choice">select your choice</option>
                  {
                  ele.incorrect_answers.map((e)=>{
                    return(
                      <>
                      <option className={ele.question}  name={ele.question} value={e}>{e}</option>
                      <input type="checkbox" className={ele.question}  name={ele.question} value={e}/>{e}<br></br>
                      </>
                    )
                  }
                    )
                  }
                  </select>
                </div>
                </fieldset> 
            </div>
            </>
            )
        })
       } 
    <button onClick={()=>{main()}} id="button">Submit</button>
    </div>
    </>
  )
}

export default Question
