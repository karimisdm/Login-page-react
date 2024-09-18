import { useContext } from "react";
import { ProfileContext } from "./App";
import { useQuery } from "react-query";
import { Axios } from "axios";


const Home=( )=>{
  // const {username}=useContext(ProfileContext)
  // const {data,isLoading,isError,error}=useQuery(["cat"], ()=>{
    //  return Axios.get("https://catfact.ninja/fact").then((res)=> res.data)})

    return(
    <div>
        this is home page of 
        <h1> </h1>
    </div>
    );
}
export default Home;