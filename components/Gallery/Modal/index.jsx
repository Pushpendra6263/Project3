import React from 'react'
import css from './modal.module.css'
import Image from "next/image";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const animateVarients = {

    initial: { transform: "translate(-50%, -50%) scale(0)" },

    open: {
        transform: "translate(-50%, -50%) scale(1)",
        transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
    },

    exit: {
        transform: "translate(-50%, -50%) scale(0)",
        transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
    },
};

const index = ({modal,projects}) => {

    const { active, index } = modal;

    const modalContainer = useRef(null);
    const cursor = useRef(null);


    // useEffect(() => {

    //     let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
    //         duration: 0.8,
    //         ease: "power3",
    //     });

    //     let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
    //         duration: 0.8,
    //         ease: "power3",
    //     });

    //     let xMoveCursor = gsap.quickTo(cursor.current, "left", {
    //         duration: 0.45,
    //         ease: "power3",
    //     });

    //     let yMoveCursor = gsap.quickTo(cursor.current, "top", {
    //         duration: 0.45,
    //         ease: "power3",
    //     });

    //     window.addEventListener("mousemove", (e) => {
    //         const { pageX, pageY } = e;
    //         xMoveContainer(pageX);
    //         yMoveContainer(pageY);
    //         xMoveCursor(pageX);
    //         yMoveCursor(pageY);
    //     });
    // }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
                duration: 0.8,
                ease: "power3",
            });
    
            let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
                duration: 0.8,
                ease: "power3",
            });
    
            let xMoveCursor = gsap.quickTo(cursor.current, "left", {
                duration: 0.45,
                ease: "power3",
            });
    
            let yMoveCursor = gsap.quickTo(cursor.current, "top", {
                duration: 0.45,
                ease: "power3",
            });
    
            const handleMouseMove = (e) => {
                const { pageX, pageY } = e;
                xMoveContainer(pageX);
                yMoveContainer(pageY);
                xMoveCursor(pageX);
                yMoveCursor(pageY);
            };
    
            window.addEventListener("mousemove", handleMouseMove);
    
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, []);

    return (
        <>
            <motion.div
                variants={animateVarients}
                initial="initial"
                animate={active ? "open" : "exit"}
                ref={modalContainer}
                className={css.modalContainer}
            >
                <div
                    className={css.modalSlider}
                    style={{ top: index * -100 + "%" }}
                >
                    {projects.map((project, index) => {
                        const { image, color } = project;
                        return (
                            <div
                                key={index}
                                className={css.modal}
                                style={{ backgroundColor: `${color}` }}
                            >
                                <Image
                                    src={`/${image}`}
                                    width={350}
                                    height={0}
                                    alt="image"
                                />
                            </div>
                        );
                    })}

                </div>
            </motion.div>
            
            <motion.div
                variants={animateVarients}
                initial="initial"
                animate={active ? "open" : "exit"}
                className={css.cursor}
                ref={cursor}
            >
                View
            </motion.div>
        </>
    )
}

export default index