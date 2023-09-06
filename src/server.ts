import express, {Express} from 'express';

export default function createServer() : Express {
    const server = express();
    server.use(express.json);
    return server;
}