const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const myfile=fs.readFileSync('index.html')

const port=7000;


app.use('/css', express.static('css'))
// app.use(express.static('image'))
app.use('/js', express.static('js'))
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.end(myfile)
})
app.post('/',(req,res)=>{
    namee=req.body.name
    num=req.body.number
    mail=req.body.email
    date=req.body.adate
    
    res.end(myfile)
  
    let outputToWriteinFile=`New Appointment: Name-${namee}, contact number-${num}, email: ${mail}, appointment date:${date}.`
    fs.writeFileSync('output.txt',outputToWriteinFile)
})


app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})