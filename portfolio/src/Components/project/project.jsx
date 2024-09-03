import React from 'react';
import projects from '../../project';
import ProjectCard from './ProjectCard';
import styles from './project.module.css';

export default function project() {
  return (
    <section id='projects' className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.project}>
          {
            projects.map((project,id)=>{
              return(
               <ProjectCard key={id} project={project}/>
              )
            })
          }
        </div>
    </section>
  )
}
