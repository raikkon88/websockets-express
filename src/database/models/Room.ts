import { model, Schema } from "mongoose"

interface IRoom {
    name: string
    maxPlayers: number
    players: string[]
}

const roomSchema = new Schema<IRoom>({
    name: { type: String, required: true },
    maxPlayers: { type: Number, required: true},
    players: { type: [String], required: true }
})

export const Room = model<IRoom>('Room', roomSchema)