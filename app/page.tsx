"use client"
import Link from "next/link";

import InputCom from "./components/InputCom";
import Message from "./components/Message";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState('Nifad')
  const handleChange = (e:any)=>{
    setUser(e.target.value)
    // console.log(e.target.value)
    // console.log(user)
  }
  const [data,setData] = useState([])

  // console.log(data)
  return (
   <main className="h-screen pb-20 md:w-[60%]  bg-slate-800 w-full flex flex-col justify-between items-center mx-auto">
    <div className="flex justify-between py-6 bg-slate-500 w-full px-12">
        <Link href={'/'}>nMessage</Link>
        <div>
          <label htmlFor="users">Choose a user: </label>
          <select id="users" value={user} onChange={handleChange}>
            <option value="Nifad">Nifad</option>
            <option value="Nasim">Nasim</option>
          </select>    
        </div>
    </div>
    <div className="w-full ">

      <div className="w-full  max-h-[70%] p-12 bg-slate-500 flex-col flex justify-end gap-8">

        {
            data.map((item:any)=>(
              <Message key={item._id} user={user} data={item}/>
            ))
        }
      </div>
      <InputCom data={data} setData={setData} user={user}/>
    </div>
    
   </main>
  );
}
