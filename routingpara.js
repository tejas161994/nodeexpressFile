const express=require('express');
const app=express();

app.use(express.json());

const courses=[{id:1,name:'course1'},
{id:2,name:'course2'},
{id:3, name:'course3'}];

app.get('/', (req,res)=>{

   res.send("Hello worls") 
});

app.get('/api/courses', (req,res)=>{

    res.send(courses);
});

app.post('/api/courses',(req,res)=>{
const course={
    id: courses.length+1,
    name: req.body.name,
    clas: req.body.class

};

if(!req.body.name || req.body.name.length <3){

    res.status(404).send("page not ound")
}

courses.push(course);
res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
const course= courses.find(c=>c.id=== parseInt(req.params.id));
if(!course) res.status(404).send("Invalid course");
res.send(course);


});



//api/courses/1

// app.get('/api/posts/:year/:month',(req,res)=>{
//  res.send(req.params);
// });

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query);
   });
const port=process.env.PORT ||3000;
app.listen(port, ()=>console.log(`Listening on port ${port}...`));