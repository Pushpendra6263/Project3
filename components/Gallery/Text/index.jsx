import React from 'react'
import css from './text.module.css'
import Button1 from '@/components/Button1/index'

const index = () => {
    return (
        <div className={css.text}>

            <div className={css.left}>
                <h1>Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.</h1>
                <p>RECENT WORK</p>
            </div>

            <div className={css.right}>
                <h4>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</h4>
                <Button1 >
                   <p> About me</p>
                </Button1>
            </div>

        </div>
    )
}

export default index