'use client'
import React from 'react'
import css from './gallery.module.css'
import Text from './Text/index'
import { useState } from 'react'
import Project from './Projects/index'
import Modal from './Modal/index'
import Button2 from '@/components/Button2/index'

const Projects = [
    {
        name : "Project1",
        desc : "Project 1 description",
        image : 'project1.png',
        color : '#595959'
    },
    {
        name : "Project2",
        desc : "Project 2 description",
        image : 'project2.png',
        color : '#ffe6ce'
    },
    {
        name : "Project3",
        desc : "Project 3 description",
        image : 'project3.png',
        color : '#dadada'
    },
    {
        name : "Project4",
        desc : "Project 4 description",
        image : 'project4.png',
        color : '#e9ffe0'
    }
]


const index = () => {

    const [modal, setModal] = useState({ active: false, index: 0 });
    
  return (
    <div className={css.gallery}>

        <Text/>

        {/* <h1>Projects</h1> */}

            <div className={css.projects}>

                {Projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            project={project}
                            index={index}
                            setModal={setModal}
                        />
                    );
                })}
            </div>

            <Modal modal={modal} projects={Projects} />
            <Button2>
                <p>More Work</p>
            </Button2>
    </div>
  )
}

export default index