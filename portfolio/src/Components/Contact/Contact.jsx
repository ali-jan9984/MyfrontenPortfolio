import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.content}>
        <h2 className={styles.title}>Contact Me</h2>
        <h2 className={styles.description}><p>Feel free to reach out!</p></h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
            <i class="fa-brands fa-linkedin fa-bounce"></i>
                <a href="">www.linkedIn.com</a>
            </li>
            <li className={styles.link}>
            <i class="fa-brands fa-facebook fa-beat"></i>
                <a href="">www.facebook.com</a>
            </li>
            <li className={styles.link}>
            <i class="fa-brands fa-github fa-bounce"></i>
                <a href="">www.github.com</a>
            </li>
        </ul>
    </footer>
  )
}
