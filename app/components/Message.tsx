import React from 'react'

function Message({user,data}:{
  user:String;
  data:any
}) {
  return (
    <div className={`w-full  p-1 flex ${user === data.user?" justify-end bg-sky-400":"bg-slate-600 "} `} >
      <p className=' p-1'>
        {data.message}

      </p>

  </div>

  )
}

export default Message
