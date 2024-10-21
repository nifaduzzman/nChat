"use client"
import React, { useEffect, useState } from 'react'
import { BsSendFill } from "react-icons/bs";
function InputCom({data,setData,user}:any) {
  const [draft,setDraft] = useState("")
  const [apiCall, setApiCall] = useState(false)
  const handleClick = ()=>{
    if(draft!==""){
      fetch('/api/chat',{
        method:'post',
        body:JSON.stringify({user,message:draft})
      })
      setDraft("")
      setApiCall(!apiCall)
    }
  }
  useEffect(()=>{
    const fetchData =()=>{
      fetch('api/chat')
      .then(res=>res.json())
      .then(res=>setData(res))
    }
    fetchData()
  },[apiCall])
  return (
    <div className="flex w-full justify-center gap-2">
      <input type="text" className="w-1/3 px-4 py-2 "
      onChange={(e)=>setDraft(e.target.value)}
      value={draft}
      />
      <BsSendFill className="text-4xl text-green-400 cursor-pointer hover:text-green-500 active:text-green-700"
        onClick={handleClick}
      />
    </div>
  )
}

export default InputCom