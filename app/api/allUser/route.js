import { NextResponse } from "next/server"
import {connectDB} from '../../../libs/config/mogodb.js'


export async function  GET(){
  await connectDB()
  console.log("heited")
  return NextResponse.json({message:"It's working"})
}

