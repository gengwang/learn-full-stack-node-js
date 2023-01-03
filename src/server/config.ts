const PORT = process.env.PORT ?? "8800";
const HOST = process.env.HOST ?? "0.0.0.0";
const SERVER_URL = `http://${HOST}:${PORT}`;

export default {
    PORT,
    HOST,
    SERVER_URL,
}