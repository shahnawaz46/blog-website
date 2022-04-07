import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    frontImage: {
        type: String,
        required: true
    },

    blogImage: {
        type: String,
        required: true
    }

}, { timestamps: true })


export default mongoose.models.blog || mongoose.model("blog", blogSchema)