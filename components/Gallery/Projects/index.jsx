'use client'
import css from "./projects.module.css";

function Project({ project, index, setModal }) {
    const { name, desc } = project;
    return (
        <div
            className={css.project}
            onMouseEnter={() => setModal({ active: true, index: index })}
            onMouseLeave={() => setModal({ active: false, index: index })}
        >
            <h1>{name}</h1>
            <h4>{desc}</h4>
        </div>
    );
}

export default Project;