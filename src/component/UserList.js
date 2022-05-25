import React, { useContext } from 'react'
import userlistContext from '../context/ContextUser'
function UserList() {
    const newdata = useContext(userlistContext)
    console.log("newdata=>",newdata)
  return (
    <div>
        {newdata.map((el)=>{
            return(
                <ul key={el.id}>
                    <li>{el.email}</li>
                </ul>
            )
        })}
        </div>
  )
}

export default UserList