import mongoose from "mongoose";

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@user-data.ra6rg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connection = {
    conn: null
}

const Connection = async () => {

    if (connection.conn) {
        return connection.conn
    }

    try {

        const res = await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true })

        connection.conn = res

    } catch (error) {
        console.log("Database Error : ", error);
    }
}

export default Connection;