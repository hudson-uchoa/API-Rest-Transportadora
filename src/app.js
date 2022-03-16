import express from "express";
import cors from "cors";
import clienteController from "./controllers/cliente-controller.js";
import generalMiddleware from "./middleware/general-middleware.js";
import database from "./database/sqlite-db.js";

const app = express();

app.use(express.json());
app.use(cors());

generalMiddleware(app);

clienteController(app, database);

export default app