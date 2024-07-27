'use client'
import css from './landing.module.css'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from 'react';
import { useEffect } from 'react';

const index = () => {

    const slider = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    });

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent });
        gsap.set(secondText.current, { xPercent });

        xPercent += direction * 0.1;
        requestAnimationFrame(animate);
    };

  return (
    <div className={css.landing}>
        <Image src={"/me3.png"} fill={true} alt="bhai ki photo" data-scroll data-scroll-speed="-.3" />

        <div className={css.content}>

            <Image src={'/arrow.svg'} width={30} height={30} data-scroll
                  data-scroll-direction="Horizontal"  data-scroll-speed="0.1"/>   

            <h1  data-scroll data-scroll-speed="-.0.2">Freelance <br /> Designer & Developer</h1>  

        </div>

        <div className={css.slidContainer}>
                <div ref={slider} className={css.slider}> 
                    <h1 ref={firstText}>Pushpendra Dubey -</h1>
                    <h1 ref={secondText}>Pushpendra Dubey -</h1>
                </div>
            </div>

    </div>
  )
}

export default index