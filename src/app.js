const express = require("express");
const path = require("path");
const app = express();
const routerHome = require('./routes/homeRoutes/homeRoutes');


app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use("/", routerHome);
// app.use("/introduccion", routerHome);
// app.use("/objetivos", routerHome);
// app.use("/objetivosE", routerHome);
// app.use("/unidadUno", routerHome);
// app.use("/diaOcho", routerHome);
// app.use("/diaNueve", routerHome);
// app.use("/diaDiez", routerHome);

app.listen(3000, ()=>{
    console.log("servidor activo en el puerto 3000");
});

