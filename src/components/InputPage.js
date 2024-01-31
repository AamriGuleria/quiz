import React from 'react'
import {useState,useEffect} from 'react'
// import QuestionPage from './QuestionPage';
import { useNavigate } from 'react-router-dom';
const InputPage = () => {
  const navigate = useNavigate();
  const [gen,setgen]=useState("");
  const [df,setdf]=useState("");
  const [t,settype]=useState("");
  const [no,setno]=useState("");
  const sub=async(e,gen,df,t,no)=>{
    e.preventDefault();
    fetch(`https://opentdb.com/api.php?amount=${no}&type=${t}&difficulty=${df}&category=${gen}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      if(data===undefined || data==="" || data.results===undefined || data.results.length===0){
        <p>OOPS! could not get some good questions for you,Try again</p>
      }
      else{
      setTimeout(()=>{
        navigate('/sample',{state:{data}})
      },2000)
    }
    })
  }
  // useEffect(()=>{
  //   const  func=(d)=>{
  //      if(d===undefined){
  //       console.log(d);
  //      }
  //      else{
  //         navigate('/quest',{state:{d}})
  //      }
  //   }
  //   func()
  // },[d,navigate])
  return (
    <div className="main-inp">
      <center>
      <form onSubmit={e=>{sub(e,gen,df,t,no)}}>
        <select id="genre" className="f" required onChange={(e)=>setgen(e.target.value)}>
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment:Books</option>
            <option value="11">Entertainment:Films</option>
            <option value="12">Entertainment:Music</option>
            <option value="13">Entertainment:Musicals & Theaters</option>
            <option value="14">Entertainment:Television</option>
            <option value="15">Entertainment:Video Games</option>
            <option value="16">Entertainment:Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Computers</option>
            <option value="19">Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Arts</option>
            <option value="26">Celibrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
        </select>
        <input id="no" type="number" min="1" max="50" placeholder='Number Of Questions' className="f" required onChange={(e)=>setno(e.target.value)}></input>
        <select id="diff" className="f" required onChange={(e)=>setdf(e.target.value)}>
            <option value="">Any difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        <select className='f' id="type" required onChange={(e)=>settype(e.target.value)}>
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True/False</option>
        </select>
        {/* <input className="f" id="h"type="number" min="0" max="99" placeholder='Hours...' required></input>
        <input className="f" id="m"type="number" min="0" max="59" placeholder='Minutes...' required></input>
        <input className="f" id="s"type="number" min="0" max="59" placeholder='Seconds...' required></input> */}
        <button type="submit" className="s">Play Now</button>
      </form>
      </center>
    </div>
  )
}

export default InputPage
// https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean