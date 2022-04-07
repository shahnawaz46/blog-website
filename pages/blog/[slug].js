import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import style from '../../styles/blog.module.scss'


export async function getStaticPaths() {
    const res = await axios.post(`http://localhost:3000/api/blog/get`)

    const paths = res.data.allBlogs.map((value) => ({ params: { slug: value.slug } }))
    // console.log(paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // console.log(params);
    try {
        const res = await axios.post(`http://localhost:3000/api/blog/${params.slug}`)
        // console.log(res.data);
        return {
            props: {
                data: res.data.blog
            }
        }

    } catch (error) {
        return {
            props: {
                data: null
            }
        }
    }
}

const Blog = ({ data }) => {

    function createMarkup(description) {
        return { __html: description };
    }

    // console.log(data);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
            {
                data ?
                    <div className={style["blog-main-div"]}>
                        <div className={style["blog-heading"]}>
                            <h2>{data.title}</h2>
                            <span>by shahnawaz at {data.createdAt}</span>
                        </div>
                        <div dangerouslySetInnerHTML={createMarkup(data.description)}></div>
                        <div className={style["blog-image"]}>
                            <Image src={`/blog_images/${data.blogImage}`} layout="fill" objectFit='contain' alt='blog-image' />
                        </div>
                    </div>
                    :
                    <div>Something wrong</div>
            }
        </div>
    )
}

export default Blog