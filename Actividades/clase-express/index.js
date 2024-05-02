const express = require('express')
const db = require('better-sqlite3')('usuarios.sqlite');

const app = express()
const port = 3000

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))


  app.get("/",(req,res)=>{
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from usuarios").all();
    res.render("index",msgs=rows);
  })



  app.get('/usuarios', (req, res) => {
    //select
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from usuarios").all();
    res.json(rows)
  })

  app.get('/usuario', (req, res) => {
    //select
    usuariosID=req.query.id;
    const rows=db.prepare("SELECT * from usuarios where ID=?").get(usuariosID);
    res.json(rows)
  })

  app.get('/persona', (req, res) => {
    //select
    //personaId=req.query.id;
    //const rows=db.prepare("SELECT * from usuarios where id=?").get(personaId)
    //res.json(rows)
    //console.log(rows);
    res.render("persona")
  })



app.post("/persona",(req,res) =>{
   // personaId=req.body.id;
   // const rows=db.prepare("SELECT * from personas where id=?").get(personaId)
  //  res.json(rows)
   // console.log(rows);
    console.log(req.body)
    if (req.body.nombre && req.body.apellidos) {
      const statement=db.prepare("insert into personas (nombre,apellidos)VALUES (?,?)")
      statement.run(req.body.nombre,req.body.apellidos)
      console.log(info)
    }
    res.redirect("persona")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})