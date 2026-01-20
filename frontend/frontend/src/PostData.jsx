import React, { useState } from 'react'

const postUrlData = "http://localhost:5100/api/users/datapost"

const PostData = () => {
  const [userName, setUserName] = useState(" ")
  const [password, setPassword] = useState(" ")
  const [email, setEmail] = useState(" ")
  const userDataHandler = async (e) => {
    e.preventDefault()
    try {
      const userData = await fetch(postUrlData, {
        method: "POST",
        headers: {
          "Content-Tpe": "application.json"
        },
        body: JSON.stringify({
          userName, email, password
        }),
      });
      const data = await userData.json();
      console.log("data", userData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={userDataHandler} >
      <h3>Username: </h3>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      <h3>Password: </h3>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <h3>Email: </h3>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostData
