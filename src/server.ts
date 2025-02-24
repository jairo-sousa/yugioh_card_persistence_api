import fastify, { FastifyInstance } from "fastify";
import { cardRoutes } from "./routes/card.routes";

import cors from "@fastify/cors";

const PORT = 3100;
const BASE_URL = "http://localhost";

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
    },
    () => {
        console.log(`[ server ] running on ${BASE_URL}/${PORT}`);
    }
);
