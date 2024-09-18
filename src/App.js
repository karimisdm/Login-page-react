import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Component } from 'react';
import Course from './Course';
import axios, { Axios } from 'axios';
import {BrowserRouter as Router,Routes,Route,link, Link} from 'react-router-dom'
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Profile from './Profile';
import { createContext } from 'react';
import {QueryClient,QueryClientProvider} from 'react-query'
import SubmitForm from './SubmitForm';
import {useForm} from 'react-hook-form'


//conditional rendering
/*function App() {
  const classes=[
    {name:'html',finished:true},
    {name:'css', finished:true},
    {name:'Java', finished:false}
  ]
  return(
    <div className='App'>
      {classes.map((myclass,index)=>{
        //return <h1 key={index}>{myclass.finished===true && myclass.name}</h1>
        return myclass.finished && <h1 key={index}>{myclass.name}</h1>

      })}

    </div>
   
  )
  
}*/


//useState

/* function App(){
  const [courseList,setCourseList]=useState([]);
  const [newCourse,setNewCourse]=useState("")

  function handdleChange(e){
    setNewCourse(e.target.value)
  }
  function addCourse(){
    const course={
      coursName:newCourse,
      id:courseList.length===0? 1 :courseList[courseList.length-1].id+1
    }
    setCourseList([...courseList,course])
  }
  function deleteCourse(courseId){
     const newCourseList =courseList.filter((course)=>{
      if (courseId === course.id) return false
      return true

    })
    setCourseList(newCourseList)

  }

  return (
    <div className='App'>
     <div className='addCourse'>
      <input type='text' onChange={handdleChange}></input>
      <button onClick={addCourse}>Add Course</button>
     </div>
     

     <div className='List'>
       {courseList.map((course,index)=>{
        return(
        <Course key={index} course={course} deleteCourse={deleteCourse}></Course>
        )

       })}

     </div>

    </div>
  )
} */

//useEffect

/* function App(){

  const [reason,setReason]=useState(" ")
 
  function fetchExcuse(excuse){
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
      setReason(res.date[0].excuse)
    })
  }
  return(
  <div className='App'>
    <h1>Generate an excuse</h1>
      <button onClick={()=> fetchExcuse("party")}>Party</button>
      <button onClick={()=> fetchExcuse("family")}>Family</button>
      <button onClick={()=> fetchExcuse("office")}>Office</button>
      <p>{reason}</p>
  </div>

  );
}*/


//Rout-React
 // export const ProfileContext=createContext();
/* function App(){
  const [username,setUsername]=useState(" ");

  return(
    <div className='App'>
      <ProfileContext.Provider value={{username,setUsername}}>
      <Router>
        <div>my header page</div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile/:name?/:id?' element={<Profile/>}/>
          <Route path='/*' element={<div>Not Found</div>}/>
        </Routes>
        <div>my footer page</div>
      </Router>
      </ProfileContext.Provider>
    </div>
  )
}
export default App; */

//React-query API
/* function App(){
  const [username,setUsername]=useState(" ");
  const client= new QueryClient();
  return(
    <div className='App'>
      <QueryClientProvider client={client}>
      <Router>
        <div>my header page</div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile/:name?/:id?' element={<Profile/>}/>
          <Route path='/*' element={<div>Not Found</div>}/>
        </Routes>
        <div>my footer page</div>
      </Router>
      </QueryClientProvider>
     
    </div>
  )
}
export default App;*/


function App(){
  return (
    <div className='App'>
      <SubmitForm/>
    </div>
  )
}

export default App;

