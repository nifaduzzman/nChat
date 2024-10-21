import { NextResponse } from "next/server"
import {connectDB} from '../../../libs/config/mogodb'
import Chat from '../../../libs/models/chatData'


export async function POST(request){
  await connectDB();
  const {user,message} = await request.json()
  await Chat.create({user,message})

  return NextResponse.json({message:"Okey"})
}

export async function GET(){
  await connectDB();
  const data = await Chat.find()
  return NextResponse.json(data);
  
}