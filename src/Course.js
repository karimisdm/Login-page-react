function Course(props){
  return (
    <div >
     <h1>{props.course.coursName}</h1>
     <button onClick={()=>props.deleteCourse(props.course.id)}> X </button>

    </div>
     )



}

export default Course;