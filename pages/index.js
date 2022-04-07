import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import style from '../styles/index.module.scss';


export const getStaticProps = async (ctx) => {
  try {
    const res = await axios.get('http://localhost:3000/api/blog/get')
    return {
      props: {
        data: res.data.allBlogs
      }
    }

  } catch (err) {
    // const error = err.response.data.message
    return {
      props: {
        data: []
      }
    }
  }
}


export default function Home(props) {
  return (
    <div className={style["index-div"]}>
      {
        props.data.length > 0 ? props.data.map((value, index) =>
          <div key={index} className={style["index-content"]}>
            <Image src={`/blog_images/${value.frontImage}`} width={300} height={350} objectFit="cover" alt="blog-image" />
            <Link href={`/blog/${value.slug}`.toLowerCase()}>
              <h3 className={style["index-h3"]}>{value.title}</h3>
            </Link>
            <span>created by Shahnawaz </span> <br />
            <span>{value.createdAt}</span>
          </div>)
          :
          <div>Something wrong</div>
      }
    </div>
  )
}
