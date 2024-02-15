import React from 'react'
import css from './nav.module.css'
import Link from 'next/link'

const index = () => {
  return (
    <>

        <nav className={css.nav}>

            <div className={css.h1}>
                <h1>Code by Pushpendra Dubey</h1>
            </div>

            <div className={css.link}>
                <Link className={css.elm} href='#'>Work <span></span></Link>
                <Link className={css.elm} href='#'>About <span></span></Link>
                <Link className={css.elm} href='#'>Contact <span></span></Link>
            </div>

        </nav>
    </>
  )
}

export default index