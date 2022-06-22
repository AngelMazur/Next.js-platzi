import React from 'react'
import Link from 'next/link'

import style from './NavBar.module.css'

const Navbar = () => {
  return (
    <nav>
      <menu className={style.container}>
        <Link href="/">
            <a className={style.brand}>Home</a>
        </Link>
        <Link href="/about">
            <a className={style.brand}>About</a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar
