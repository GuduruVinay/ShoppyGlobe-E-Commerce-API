import express from "express";
// import shoppyglobeRoute from "./routes/shoppyglobe.routes.js"; 

// Express Object
const app = express();

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send("Root Route");
})

// shoppyglobeRoute(app);

// Local Host at PORT
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server RUNNING ON PORT: ${PORT}`);
});