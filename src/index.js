import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: "Cristian",
  lastName: "Mellibosky",
  avatar:"https://i.imgur.com/i1tmH.png"
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return  <h1>Hola {getName(user)}</h1>
  }
  return <h1>Hola Stranger</h1>
}
const name = 'Cristian'

const element = (
<div>
  {getGreeting(user)}
  <img src={user.avatar}/>  
</div>
)

const container = document.getElementById("root")

ReactDOM.render(element, container)