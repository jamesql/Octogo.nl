/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";

const app = express.Router();

app
    .get("/", async (req,res) => {
        return res.status(200).render("game")
    });

export default app;