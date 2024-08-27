import express from 'express'

const app = express();

app.use(express.json());

app.listen(5000, function() {
    console.log("Servidor web em funcionamento!");
})