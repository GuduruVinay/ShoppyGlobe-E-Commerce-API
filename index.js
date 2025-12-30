import express from "express";

// Express Object
const app = express();

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send("Root Route");
})

// Local Host at PORT
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server RUNNING ON PORT: ${PORT}`);
});