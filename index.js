const express=require('express')
const jokerouter=require('./Joke.js')
const Imagejokerouter=require('./Together.js')

const app=express() 
// console.log(jokes.length)
const errorHandler=(err,req,res,next)=>{
    console.log("some wrror occured")
    res.status(500).json({success:false,message:err.message})

    
}
app.use(jokerouter)
app.use(Imagejokerouter)
app.get("/", (req, res) => {
    res.json({ success: true, message: "Welcome to the Random Jokes and Images API",forjoke:"use /joke and for image use /Jokeimage" ,date:new Date() });
    
})

app.use(errorHandler)
   
app.listen(2589,()=>console.log("server created successfully at port number 2589"))