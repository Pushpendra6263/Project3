'use client'
import React from 'react'
import css from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button3 from '@/components/Button3/index'




const index = () => {

  const [Time, setTime] = useState(new Date().toLocaleTimeString())

    setInterval(() => {

      setTime(new Date().toLocaleTimeString().replace(/(.*)\D\d+/ , '$1'));
    }, 1000);
    console.log(setTime);
  

  return (

    <div className={css.footer}>

      <div  className={css.circle} data-scroll data-scroll-speed=".1"></div>

      <div className={css.mid}>

        <div className={css.text}>

          <h1>
            <Image src={'/me.png'} width={80} height={80} />
            Let's work <br /> together
          </h1>

          <Image src={'/arrow.svg'} width={20} height={20} style={{rotate : "90deg"}}/>

        </div>

        <div className={css.line}>
          <Button3>
            <p>Get in Touch</p>
          </Button3>
        </div>

        <div className={css.buttons}></div>

      </div>
     
     <div className={css.footerBottom}>

        <div className={css.left}>

          <div className={css.box}>
            <p>Version</p>
            <h3>2023 Edition</h3>
          </div>

          <div className={css.box}>
            <p>Local Time</p>
            <h3>{Time}</h3>
          </div>

        </div>

        <div className={css.right}>

          <div className={css.box}>
            <p>Socials</p>
            <Link href='#'>Awwwards <span className={css.l1}></span><span className={css.l2}></span></Link>
          </div>

          <div className={css.box}>
            <p></p>
            <Link href='#'>Instagram <span className={css.l1}></span><span className={css.l2}></span></Link>
          </div>

          <div className={css.box}>
            <p></p>
            <Link href='#'>Dribble <span className={css.l1}></span><span className={css.l2}></span></Link>
          </div>

          <div className={css.box}>
            <p></p>
            <Link href='#'>LinkedIn <span className={css.l1}></span><span className={css.l2}></span></Link>
          </div>

        </div>

     </div>


    </div>
  )
}

export default index