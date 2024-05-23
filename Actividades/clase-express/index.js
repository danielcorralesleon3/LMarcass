const express = require('express')
const db = require('better-sqlite3')('usuarios.sqlite');

const app = express()
const port = 3000

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//ejercicio 6.1

  app.get('/usuarios', (req, res) => {
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from usuarios").all();
    console.log(rows);
    res.render('usuarios', usuarios = rows)
  })

  app.get('/usuari', (req, res) => {
    usuariosID=req.query.id;
    const rows=db.prepare("SELECT * from usuarios where ID=?").get(usuariosID);
    res.json(rows)
  })

  app.get('/productos', (req, res) => {
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from productes").all();
    res.render('productos' ,{producto: rows})
  })


  app.get('/producte', (req, res) => {
    productesID=req.query.id;
    const rows=db.prepare("SELECT * from productes where ID=?").get(productesID);
    res.json(rows)
  })

  app.get('/comandes', (req, res) => {
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from comandes c join productes p on c.producte_id=p.id join usuarios u on c.usuario_id=u.id ").all();
    
    res.render('comandes', {comanda: rows})
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
  if (!req.body.nom || !req.body.precio ||req.body.precio<0) {
    throw new Error ("Nombre o precio incorrecto");
  }
  if (req.body.nom && req.body.precio) {
    const statement=db.prepare("insert into productes (nom,precio)VALUES (?,?)")
    statement.run(req.body.nom,req.body.precio)
  }
  res.redirect("producto")
})


///////////////////////////////////////////////////////////////////////////////////
// Actividad 6.3

app.get('/detalles', (req, res) => {
  id = req.query.ID
  console.log("req.query "+ req.query);
  const row = db.prepare('SELECT * from usuarios where ID = ?').get(id);
  console.log("row "+row);
  res.render('detalles', { usuario: row })
})







///////////////////////////////////////////////////////////////////////////////////

  app.get("/",(req,res)=>{
    
  })


  app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
  })