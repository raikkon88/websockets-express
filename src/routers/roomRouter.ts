import { Router } from "express";
import RoomService from "../services/roomService";
import logger from "../logger";


const router = Router()

router.post('/', async (req, res) => {
    const roomService = new RoomService()
    const room = await roomService.createNewRoom('room', 4)
    return res.send(room)
})


router.ws('/echo/:id', (ws, req) => {
    ws.on('message', (msg) => {
        logger.info(msg)
        ws.send(msg);
    });
})

export default router