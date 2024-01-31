import React from 'react'
import {useLocation} from 'react-router-dom'
const QuestionPage = () => {
  const location=useLocation();
  let arr=location.state.data;
  console.log(arr);
  const ans=[];
  const sel=[];
  arr.map((ele)=>{
    ans.push(ele.correct_answer);
  })
  const sub=()=>{
    console.log(sel);
  }
  const selectoption=(key,val,corr)=>{
    if(val===corr){
      sel[key]="correct";
    }
    else{
      sel[key]="incorrect";
    }
  }
  return (
    <>
    <form onSubmit={(e)=>{sub()}}>
    {
      arr.map((ele,index)=>{
        return(
          <>
          <h4>{ele.question}</h4>
          <select id="ans" key={index} onChange={(e,key)=>{selectoption(key,e.target.value,ele.correct_answer)}}>
          <option value="initial">select</option>
            <option value={ele.correct_answer}>{ele.correct_answer}</option>
            {ele.incorrect_answers.map(
            (e)=>{
              return(
                <>
                <option value={e}>{e}</option>
                </>
              )
            }
          )}
          </select>
          </>
        )
      })
    }
    <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default QuestionPage
