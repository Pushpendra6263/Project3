'use client'
import React from 'react'
import css from './slidingimages.module.css'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
    {
        color : "#E7E8EA",
        img : 'prjt1.png'
    },
    {
        color : "#D7D7DC",
        img : 'prjt2.png'
    },
    {
        color : "#E7E7E7",
        img : 'prjt3.png'
    },
    {
        color : "#22242B",
        img : 'prjt4.png'
    }
]

const slider2 = [
    {
        color : "#D7E4EC",
        img : 'prjt5.png'
    },
    {
        color : "#fbe1e7",
        img : 'prjt6.png'
    },
    {
        color : "#D7D4CF",
        img : 'prjt7.png'
    },
    {
        color : "#E4DFDB",
        img : 'prjt8.png'
    }
]

const index = () => {
    const sliderref1 = useRef(null)
    const sliderref2 = useRef(null)
    const container = useRef(null)
    
    const { scrollYProgress } = useScroll({
        trigger: container,
        start: "top bottom",
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div 
        className={css.slidingImages}
        ref={container}
    >
        <motion.div 
            className={css.slider}
            ref={sliderref1}
            style={{ x: x1 }}
        >
            {slider1.map((image, index) =>{
                return(
                    <div className={css.image} key={index} style={{backgroundColor : `${image.color}`}}>
                        <img src={`${image.img}`} alt="" />
                    </div>
                )
            })}

        </motion.div>

        <motion.div 
            className={css.slider}
            ref={sliderref2}
            style={{ x: x2 }}
        >
            {slider2.map((image , index ) =>{
                return(
                    <div className={css.image} key={index} style={{backgroundColor : `${image.color}`}}>
                        <img src={`${image.img}`} alt="" />
                    </div>
                )
            })}

        </motion.div>

    </div>
  )
}

export default index