import fastify, { FastifyInstance } from "fastify";

const PORT = 3100;
const BASE_URL = "http://localhost";

const app: FastifyInstance = fastify();

app.listen(
    {
        port: PORT,
    },
    () => {
        console.log(`[ server ] running on ${BASE_URL}/${PORT}`);
    }
);
