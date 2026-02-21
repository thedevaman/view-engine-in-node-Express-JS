import express from 'express'
import path from 'path'
//import { fileURLToPath } from 'url'; //jab views folder me ejs by default views dhundhta h

const app = express();

//const __filename = fileURLToPath(import.meta.url);//jab views folder me ejs by default views dhundhta h
//const __dirname = path.dirname(__filename);//jab views folder me ejs by default views dhundhta h

app.use(express.urlencoded({extended:false}))//for body penchanane k liye

app.set('view engine','ejs') 
//app.set('views', path.join(__dirname, 'templates'));//jab views folder me ejs by default views dhundhta h isme "templates" new folder name

app.get('/',(req,res)=>{

    res.render("addUser")

})

app.post('/submit-user',(req,res)=>{

    res.render("submitUsers",req.body)

})

app.get('/users',(re1,res)=>{
    const users = ['test1','test2','test3','test4']
    const islogin = false
    res.render("users",{users:users,islogin:islogin})
})


app.listen(3200)