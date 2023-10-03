const express = require("express");
const path = require("path");
const app = express();
const routerHome = require('./routes/homeRoutes/homeRoutes');


app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use("/", routerHome)

app.listen(3000, ()=>{
    console.log("servidor activo en el puerto 3000");
});

