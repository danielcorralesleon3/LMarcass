const express = require("express")
const db = require("better-sqlite3")("usuarios.sqlite");

const app = express()
const port = 3000

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//ejercicio 6.1

app.get("/usuarios", (req, res) => {
  resultadoSelect = req.query.id;
  const rows = db.prepare("SELECT * from usuarios").all();
 
  res.render("usuarios", usuarios = rows)
})

app.get("/usuari", (req, res) => {
  usuariosID = req.query.id;
  const rows = db.prepare("SELECT * from usuarios where ID=?").get(usuariosID);
  res.json(rows)
})

app.get("/productos", (req, res) => {
  resultadoSelect = req.query.id;
  const rows = db.prepare("SELECT * from productes").all();
  res.render("productos", { producto: rows })
})


app.get("/producte", (req, res) => {
  productesID = req.query.id;
  const rows = db.prepare("SELECT * from productes where ID=?").get(productesID);
  res.json(rows)
})

app.get("/comandes", (req, res) => {
  resultadoSelect = req.query.id;
  const rows = db.prepare("SELECT * from comandes c join productes p on c.producte_id=p.id join usuarios u on c.usuario_id=u.id ").all();

  res.render("comandes", { comanda: rows })
})



///////////////////////////////////////////////////////////////////////////////
// Actividad 6.2

app.get("/usuario", (req, res) => {
  res.render("usuario")
})

app.post("/usuario", (req, res) => {
  console.log(req.body)
  if (!req.body.nombre || !req.body.email) {
    throw new Error("Nombre o email incorrecto");
  }
  if (req.body.nombre && req.body.email) {
    const statement = db.prepare("insert into usuarios (nombre,email)VALUES (?,?)")
    statement.run(req.body.nombre, req.body.email)
  }
  res.redirect("usuario")
})

app.get("/producto", (req, res) => {
  res.render("producto")
})

app.post("/producto", (req, res) => {
  console.log(req.body)
  if (!req.body.nom || !req.body.precio || req.body.precio < 0) {
    throw new Error("Nombre o precio incorrecto");
  }
  if (req.body.nom && req.body.precio) {
    const statement = db.prepare("insert into productes (nom,precio)VALUES (?,?)")
    statement.run(req.body.nom, req.body.precio)
  }
  res.redirect("producto")
})


///////////////////////////////////////////////////////////////////////////////////
// Actividad 6.3

app.get("/detalles", (req, res) => {
  id = req.query.ID
  const row = db.prepare("SELECT * from usuarios where ID = ?").get(id);
  res.render("detalles", { usuario: row })
})

///////////////////////////////////////////////////////////////////////////////////
// Actividad 6.4

app.get("/comanda", (req, res) => {
  const rowsproductos = db.prepare("SELECT * from productes").all()
  const rowsusuario = db.prepare("SELECT * from usuarios").all()

  res.render("comanda", { usuarios: rowsusuario, productes: rowsproductos });
})
app.post("/comanda", (req, res) => {
  if (req.body.usuario_id && req.body.producte_id) {
    const statement = db.prepare("INSERT INTO comandes (usuario_id, producte_id) VALUES (?,?)")
    statement.run(req.body.usuario_id, req.body.producte_id)
  }
  res.redirect("comandes");
})
//////////////////////////////////////////////////////////////////////
//Actividad 6.5


app.get("/usuarioedit", (req, res) => {
  const ID = req.query.ID
  const selectusuario = db.prepare("SELECT * from usuarios where ID = ?").get(ID);
  res.render("usuarioedit", { selectusuario: selectusuario });
})

app.post("/usuarioedit", (req, res) => {

  console.log(req.body)
  const statement = db.prepare("UPDATE usuarios SET nombre = ?, email = ? WHERE ID = ?")
  statement.run(req.body.nombre, req.body.email, req.body.ID)


  res.redirect("usuarios");
})

app.get("/producteedit", (req, res) => {
  const id = req.query.id;
  const producte_select = db.prepare("SELECT * from productes where id = ?").get(id)
  res.render("producteedit", { producte_select: producte_select });
})


app.post("/producteedit", (req, res) => {
  console.log(req.body)
  if (req.body.nom && req.body.precio && req.body.id) {
    const statement = db.prepare("UPDATE productes SET nom = ?, precio = ? WHERE id = ?")
    statement.run(req.body.nom, req.body.precio, req.body.id)
  }
  res.redirect("productos");
})



app.get("/comandesedit", (req, res) => {
  const id = req.query.id
  const usuarios = db.prepare("SELECT * from usuarios").all()
  const productes = db.prepare("SELECT * from productes").all()
  const comanda = db.prepare("SELECT * from comandes where id = ?").get(id)
  res.render("comandesedit", { comanda: comanda, usuarios: usuarios, productes: productes });

})


app.post("/comandesedit", (req, res) => {
  const statement = db.prepare("UPDATE comandes SET usuario_id = ?, producte_id = ? WHERE id = ?")
  statement.run(req.body.productes, req.body.usuarios, req.body.comanda)


  if (req.body.usuarios && req.body.productes && req.body.id) {
    const statement = db.prepare("UPDATE comandes SET usuario_id = ?, producte_id = ? WHERE id = ?")
    statement.run(req.body.usuarios, req.body.productes, req.body.id)

  }
  res.redirect("comandes");
  console.log(req.body)
})


///////////////////////////////////////////////////////////////////////////////////


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

