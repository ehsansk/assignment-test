import React,{useState,useEffect, } from 'react'
import userlistContext from './ContextUser'
import axios from 'axios';

function UserContext(props) {
 const [data,setData] = useState([]);

 useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=1')
    .then((response)=>{
        console.log("response data=>",response.data)
        setData(response.data.data)
    }).catch((error)=>{
        console.log(error)
    })
 },[])
  return (
    <userlistContext.Provider value={data}>
        {props.children}
    </userlistContext.Provider>
  )
}

export default UserContext 