import express from 'express'

const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
  
    res.render('home',{name:'Test Singh',contact_no: 1478523690,email:'test@gamil.com'})

})




app.listen(3200)