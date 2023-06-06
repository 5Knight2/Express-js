
const express=require('express')

console.log('hi again')

const app=express();

app.use((req,res,next)=>{
    console.log("in the middleware");
    next();
});
app.use((req,res,next)=>{
    console.log("in 2nd middleware");
    res.send( { 'key1': 'value' });
})

app.listen(4000);