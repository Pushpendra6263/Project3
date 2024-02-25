"use client"
// import Image from 'next/image'
import React from 'react'
import css from './page.module.css'
import { useEffect } from 'react'
import Landing from '@/components/Landing/index'
import Nav from '@/components/Nav/index'
import Gallery from '@/components/Gallery/index'
import SlidingImages from '@/components/SlidingImages/index'
import Footer from '@/components/Footer/index'
import LocomotiveScroll from 'locomotive-scroll'


const page = () => {

  useEffect(() => {
    const locomotivescroll = new LocomotiveScroll();
  })

  return (
    <div className={css.main}>
      <Nav />
      <Landing />
      <Gallery />
      <SlidingImages />
      <Footer />
    </div>
  )
}

export default page