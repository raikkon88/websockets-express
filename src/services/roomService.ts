import { Room } from "../database/models/Room";

export default class RoomService {

    async createNewRoom(name: string, maxPlayers: number) {
        const room = new Room({
            name,
            players: [],
            maxPlayers
        })
        await room.save()
        return room
    }

}