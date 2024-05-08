const express = require('express')
const db = require('better-sqlite3')('usuarios.sqlite');

const app = express()
const port = 3000

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//ejercicio 6.1

  app.get('/usuaris', (req, res) => {
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from usuarios").all();
    res.json(rows)
  })

  app.get('/usuari', (req, res) => {
    usuariosID=req.query.id;
    const rows=db.prepare("SELECT * from usuarios where ID=?").get(usuariosID);
    res.json(rows)
  })

  app.get('/productes', (req, res) => {
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from productes").all();
    res.json(rows)
  })


  app.get('/producte', (req, res) => {
    productesID=req.query.id;
    const rows=db.prepare("SELECT * from productes where ID=?").get(productesID);
    res.json(rows)
  })

  app.get('/comandes', (req, res) => {
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from comandes c join productes p on c.producte_id=p.id join usuarios u on c.usuario_id=u.id ").all();
    res.json(rows)
  })

  app.get('/comanda', (req, res) => {
    productesID=req.query.id;
    const rows=db.prepare("SELECT * from comandes c join productes p on c.producte_id=p.id join usuarios u on c.usuario_id=u.id and C.ID=?").get(productesID);
    res.json(rows)
  })

///////////////////////////////////////////////////////////////////////////////
// Actividad 6.2

app.get('/usuario', (req, res) => {
  res.render("usuario")
})

app.post("/usuario",(req,res) =>{
   console.log(req.body)
   if (!req.body.nombre || !req.body.email) {
    throw new Error ("Nombre o email incorrecto");
  }
   if (req.body.nombre && req.body.email) {
     const statement=db.prepare("insert into usuarios (nombre,email)VALUES (?,?)")
     statement.run(req.body.nombre,req.body.email)
   }
   res.redirect("usuario")
})

app.get('/producto', (req, res) => {
  res.render("producto")
})

app.post("/producto",(req,res) =>{
  console.log(req.body)
  if (!req.body.nombre || !req.body.precio ||req.body.precio<0) {
    throw new Error ("Nombre o precio incorrecto");
  }
  if (req.body.nombre && req.body.precio) {
    const statement=db.prepare("insert into productes (nombre,precio)VALUES (?,?)")
    statement.run(req.body.nombre,req.body.precio)
  }
  res.redirect("producto")
})


///////////////////////////////////////////////////////////////////////////////////

  app.get("/",(req,res)=>{
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from usuarios").all();
    res.render("index",msgs=rows);
  })


  app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
  })