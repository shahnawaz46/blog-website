import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../../styles/blog.module.scss';

const Create = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [frontImage, setFrontImage] = useState()
    const [blogImage, setBlogImage] = useState()

    const formHanlde = async (e) => {
        e.preventDefault()

        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("description", description)
        formdata.append("frontImage", frontImage)
        formdata.append("blogImage", blogImage)

        try {
            const res = await axios.post('http://localhost:3000/api/blog/create', formdata)
            console.log(res.data.message)

        } catch (error) {
            console.log(error.response.data)
        }

        e.target.reset()
    }

    return (
        <div className={style['create-blog-div']}>
            <form className={style['create-blog-form']} onSubmit={formHanlde}>
                <span>Title</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />

                <span>Description</span>
                <textarea cols="30" rows="8" onChange={(e) => setDescription(e.target.value)}></textarea>

                <span>Blog Image</span>
                <input type="file" onChange={(e) => setBlogImage(e.target.files[0])} />

                <span>Front Image</span>
                <input type="file" onChange={(e) => setFrontImage(e.target.files[0])} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create