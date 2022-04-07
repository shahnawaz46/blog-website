import BlogCollection from '../../../models/BlogCollection';
import Connection from '../../../lib/Connection';

export default async function handler(req, res) {
    try {
        await Connection()
        const allBlogs = await BlogCollection.find({})
        return res.status(200).json({ allBlogs })

    } catch (error) {
        return res.status(500).json({ error: error.message, message: "Internal Server Error" })
    }
}