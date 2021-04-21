import express from "express";

import "./database";

const app = express();

/**
 * GET = BUSCAR;
 * POST = CRIAR;
 * PUT = ALTERAR;
 * DELETE = DELETAR;
 * PATCH = ALTERAR DADO ESPECIFICO ex: Senha do User;
 */



app.get("/", (req, res) => {
    return res.json(
       { message: "Ola NLW5-NODE"
    });
});

app.post("/users", (req, res) => {
    return res.json( { message: "usuário salvo com sucesso"})
})

app.listen(3333, ()=> console.log("Server is running on port 3333"))