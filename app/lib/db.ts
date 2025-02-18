import mongoose from 'mongoose'

const url = process.env.MONGODB_URL

if (!url) {
    throw new Error("MONGODB_URL is not set")
}
let connection: typeof mongoose;


const connectDd = async () => {

    try {

        if (!connection) {
            connection = await mongoose.connect(url)
        }
    } catch (error) {
        throw new Error("Error connecting to database" + error)
    }


}



export default connectDd