import express from 'express'
import expressWs from 'express-ws'
import { getConnection } from './database';
import dotenv from 'dotenv'
import RoomRouter from './routers/roomRouter'
import logger from './logger';

const { app, getWss, applyTo } = expressWs(express())
const port = 8080; // default port to listen

dotenv.config()

app.use('/room', RoomRouter)

app.listen( port, async () => {
    logger.info( `server started at http://localhost:${ port }`)
    await getConnection()
});

app.ws('/echo/:id', (ws, req) => {
    ws.on('message', (msg) => {
        logger.info(msg)
        ws.send(msg);
    });
})