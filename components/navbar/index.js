import React from 'react';
import style from './navbar.module.scss';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style["navbar-image"]}>
                <img src="/logo.webp" alt="logo" />
            </div>
            <nav className={style.nav} >
                <ul>
                    <li>
                        <Link href={'/'} >
                            <a>Home</a>
                        </Link>
                    </li>

                    <li>
                        <Link href={'/category'} >
                            <a>Category</a>
                        </Link>
                    </li>

                    <li>
                        <Link href={'/about'} >
                            <a>About</a>
                        </Link>
                    </li>

                    <li>
                        <Link href={'/blog/create'} >
                            <a>Create Blog</a>
                        </Link>
                    </li>
                </ul>

                <div className={style["input-div"]}>
                    <input type="text" placeholder='Search here...' />
                    <BsSearch style={{ color: 'black' }} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar