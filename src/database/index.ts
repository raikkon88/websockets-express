import { connect } from 'mongoose'

export const getConnection = async (): Promise<void> => {
    await connect(process.env.MONGO_URI)
}