import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Root Route");
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server RUNNING ON PORT: ${PORT}`);
});