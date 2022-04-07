import Connection from "../../../lib/Connection";
import BlogCollection from "../../../models/BlogCollection";
import nc from 'next-connect';
import slugify from "slugify";
import multer from "multer";
import path from 'path'


export const config = {
    api: {
        bodyParser: false,
    },
}


// multer for store images in folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'public', 'blog_images'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})


handler.use(upload.fields([
    { name: "blogImage", maxCount: 1 },
    { name: "frontImage", maxCount: 1 }]))
    .post(async (req, res) => {
        try {
            const { title, description } = req.body
            const { blogImage, frontImage } = req.files

            const details = {
                title,
                slug: slugify(title.toLowerCase()),
                description,
                frontImage: frontImage[0].filename,
                blogImage: blogImage[0].filename
            }

            await Connection()

            const isPostExist = new BlogCollection(details)
            await isPostExist.save()

            return res.status(200).json({ message: "Blog Created Susccesfully" })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message, message: "Internal Server Error" })
        }
    })

export default handler
