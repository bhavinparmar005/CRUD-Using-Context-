// import React, { useState } from 'react'
// import { useCrud } from '../../Crudprovider'

// const Demo = () => {

//     const {additem}=useCrud()

//     const [text,setText]= useState("")

// const submitData=(e)=>{

//     e.preventDefault()

//     let obj ={
//         text: text,
//         id: Math.random(Math.floor()*100)
//     }

//     additem(obj)
//     setText("")

// }

//   return (
//     <>
// <form onSubmit={submitData}>
//     <input type="text" onChange={(e)=>{setText(e.target.value)}} value={text} />
//     <button type='submit'>submit</button>
// </form>

//     </>
//   )
// }

// export default Demo
