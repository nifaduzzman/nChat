const { default: mongoose } = require("mongoose")


export const connectDB = async( )=>{
  try {
    await mongoose.connect('mongodb+srv://nifaduzzaman2005:nifad2005@cluster0.kjup1.mongodb.net/nMessages')
    console.log("Db connected.")
    
  } catch (error) {
    console.log("DB connection faild",error)
  }
}