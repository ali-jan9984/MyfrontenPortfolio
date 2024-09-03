import React from 'react';
import myImage from '../../Assests/Boy-Laptop.png';
import cursor from '../../Assests/Cursor-icon-illustration.png';
import server from '../../Assests/server.webp';
import UiDesigner from '../../Assests/ui 2.webp';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src={myImage} alt='About Image' width={"400px"} className={styles.aboutImage}/>
        <ul className={styles.aboutImage}>
            <li className={styles.aboutItem}><img src={cursor} alt="cursor icon" width={'50px'}/>
        <div className={styles.aboutItemText}>
            <h3>Fronntend Developmen</h3>
            <p>I'm frontend Developer with experience in building Responsive Website and Optimized Sites.</p>
        </div>
        </li>
            <li className={styles.aboutItem}><img src={server} alt="server icon" width={'50px'}/>
        <div className={styles.aboutItemText}>
            <h3>Backend Developmen</h3>
            <p>I have experience building fast and Optimized back-end and Apis.</p>
        </div>
        </li>
            <li className={styles.aboutItem}><img src={UiDesigner} alt="Ui Design" width={'50px'}/>
        <div className={styles.aboutItemText}>
            <h3>Ui Designer</h3>
            <p>I have design multiple landing pages and have created design systems as well.</p>
        </div>
        </li>
        </ul>
        </div>
    </section>
  )
}
