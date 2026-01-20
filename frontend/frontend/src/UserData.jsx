import React from 'react'

const urlData = "http://localhost:5100/api/users/getdata"

const UserData = () => {
  const userDataHandler = async () => {
    try {
      const incomingData = await fetch(urlData) 
      const newIncData = await incomingData.json()
      console.log("newIncData", newIncData);
    } catch (error) {
      console.log(error);
    }
  }
  userDataHandler()
  return (
    <div>
      
    </div>
  )
}

export default UserData
