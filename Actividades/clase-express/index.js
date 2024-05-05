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


  app.get("/",(req,res)=>{
    resultadoSelect=req.query.id;
    const rows=db.prepare("SELECT * from usuarios").all();
    res.render("index",msgs=rows);
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