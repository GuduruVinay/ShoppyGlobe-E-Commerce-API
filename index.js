import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.routes.js";

// Express Object
const app = express();

mongoose.connect("mongodb+srv://guduruvinay3_db_user:taBsur5r3zhwcG08@cluster0.spt52f4.mongodb.net/")
.then((res) => { console.log("DATABASE IS CONNECTED") })
.catch((err) => { console.log("ERROR IN CONNECTING DATABASE") })

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send("Root Route");
})

productRoute(app)

// Local Host at PORT
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server RUNNING ON PORT: ${PORT}`);
});