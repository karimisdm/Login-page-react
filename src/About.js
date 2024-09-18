import React from "react";
import {useNavigate} from "react-router-dom";

const About=()=>{
    let navigate=useNavigate();
    return(
    <React.Fragment>
     <div>this is about page</div>
     <button onClick={()=>{navigate('/')}}>Go to Home</button>
    </React.Fragment>

)
}
export default About;