import fastify, { FastifyInstance } from "fastify";
import { cardRoutes } from "./routes/card.routes";

import cors from "@fastify/cors";

const PORT = Number(process.env.PORT) || 4000;

const app: FastifyInstance = fastify();

const setCors = async () => {
    await app.register(cors, {
        origin: "*",
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    });
};

setCors();

app.register(cardRoutes, {
    prefix: "/card",
});

app.listen(
    {
        port: PORT,
        host: "0.0.0.0",
    },
    () => {
        console.log(`[ server ] running on http://0.0.0.0:${PORT}`);
    }
);
