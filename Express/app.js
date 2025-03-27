const express = require('express')
const morgan = require('morgan')

const mymiddlewarefunction1 = require("./middleware/middle1")
const mymiddlewarefunction2 = require("./middleware/middle2")

app = express()

//Custom Middleware
app.use(mymiddlewarefunction1)
app.use(mymiddlewarefunction2)

//GET,POST,DELETE using JSON
app.use(express.json())

//Third party middleware
app.use(morgan('tiny'))

const courses = [
    {id:1,name:'Java'},
    {id:2,name:'Python'},
    {id:3,name:'C#'}
]

//DISPLAY or READ operation
app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.get('/about',(req,res)=>{
    res.send("We create impact")
})

app.get('/contact',(req,res)=>{
    res.send("Contact us at abc@xzy.gmail.com")
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})


//CREATE operation
app.post('/courses', (req,res)=>{
   const course = {
    id : courses.length+1,
    name : req.body.name
   } 

   courses.push(course)
   res.send(course)
})


//UPDATE operation
app.put('/courses/:coursename',(req,res)=>{
    //console.log(req.params.coursename)
    let course = courses.find(course=> course.name == req.params.coursename)
    if(!course){
        res.status(404).send("The course you are looking for does not exits")
    }
    else{
        course.name = req.body.name
    }
})

//DELETE operation - course name
// app.delete('/courses/:coursename',(req,res)=>{
//     let updatedcourse = courses.filter(course => course.name !== req.params.coursename)

//     courses = updatedcourse

//     res.send(courses)    
// })

//DELETE operation - using id
app.delete('/course/:id',(req,res)=>{
    console.log(req.params)
    let course = courses.find(course => course.id == parseInt(req.params.id))
    
    //If the id is different from mentioned
    if(!course){
        res.status(404).send("The course you are looking for does not exits")
    }
    else{
        const index = courses.indexOf(course)
        courses.splice(index,1)
        res.send(course)
    }
})

//Adjust routes accroding to the input mentioned in courses array
app.get('/course/:id',(req,res)=>{
    console.log(req.params)
    let course = courses.find(course => course.id == parseInt(req.params.id))
    
    //If the id is different from mentioned
    if(!course){
        res.status(404).send("The course you are looking for does not exits")
    }
    else{
        res.send(course)
    }
})


//Dynamically assigning the port
const port = process.env.PORT || 3000


//Checking the on which port it is running
app.listen(port, ()=>console.log("Port is running on "+port))