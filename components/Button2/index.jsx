'use client'
import React from 'react'
import css from './button.module.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const index = ({ children }) => {

    const circle = useRef(null);
    const timeline = useRef(null);

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(
                circle.current,
                {
                    top: "0%",
                    scale: 1.5,
                    duration: 0.5,
                    ease: "power3.in",
                },
                "enter"
            )
            .to(
                circle.current,
                {
                    top: "-250%",
                    height: "125px",
                    scale: 1.5,
                    duration: 0.5,
                    ease: "power3.in",
                },
                "exit"
            );
    }, []);

    const handleMouseEnter = () => {
        timeline.current.tweenFromTo("enter", "exit");
    };
    const handleMouseLeave = () => {
        timeline.current.play();
    };

    return (
        <>
            <div 
             className={css.button}
             onMouseEnter={() => handleMouseEnter()}
             onMouseLeave={() => handleMouseLeave()}
             >
                {children}
            <div ref={circle} className={css.circle}></div>
            </div>
        </>
    )
}

export default index
