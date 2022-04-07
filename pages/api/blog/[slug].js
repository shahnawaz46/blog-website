import BlogCollection from "../../../models/BlogCollection"

export default async function handler(req, res) {
    const { slug } = req.query
    console.log(slug);
    try {
        const blog = await BlogCollection.findOne({ slug })
        // console.log(blog);
        return res.status(200).json({ blog })

    } catch (error) {
        return res.status(500).json({ error: error.message, message: "Internal Server Error" })
    }
}