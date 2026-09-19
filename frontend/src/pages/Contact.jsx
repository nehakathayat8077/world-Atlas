import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit =async (e)=>{
    e.preventDefault()

    const data = {name:name.trim(), email:email.trim() , message:message.trim()}

    try{
      const response = await fetch("http://localhost:5000/api/contact",{
        method:"POST",
          headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
      })
      const result = await response.json()
      
      if(response.ok){
        alert("Message sent successfully!")

        setName("")
        setEmail("")
        setMessage("")

      }else{
        alert("Failed to send message")
      }

    }catch(error){
      console.log("error",error)
      alert("something went wrong")
    }
  }
  return (
    <div className=' bg-gray-950 h-full w-full text-white flex-1 flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-3xl md:4xl lg:5xl font-bold mt-10'>Contact Us</h1>
      <form action="" 
      className='px-3 py-2  flex flex-col gap-5 w-100'
      onSubmit={handleSubmit}>
        <input
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
         className='px-3 py-2 bg-gray-700 rounded outline-none' type="text" placeholder='Enter your name'/>
        <input 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='px-3 py-2 bg-gray-700 rounded outline-none' type="text" placeholder='Enter your email' />
        <textarea
        value={message}
        onChange={(e)=>{
          setMessage(e.target.value)
        }}
  className='px-3 py-2 bg-gray-700 rounded min-h-50 outline-none resize-none'
  placeholder='Enter your message'
></textarea>
        <button className='px-3 py-2 bg-gray-700 rounded-2xl hover:scale-105 hover:bg-gray-600 transition-all ' >Send</button>
      </form>
    </div>
  )
}

export default Contact
