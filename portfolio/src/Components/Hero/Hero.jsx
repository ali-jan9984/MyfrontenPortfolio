import React from 'react';
import myImage from '../../Assests/img .jpg.jpg';
import sytles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={sytles.container}>
        <div className={sytles.content}>
            <h1 className={sytles.title}>Hi, I'm Ali-Jan</h1>
        <p className={sytles.description}>I'm front-end Developer with 2 Years of Experience using React,Tailwind and other frameworks. Reach out if you'd like to learn more!</p>
        <a href='mailto:myemail@email.com' className={sytles.contactBtn}>Contact Me</a>
        </div>
        <img src={myImage} alt='Hero image' className={sytles.heroImg}/>
        <div className={sytles.topBlur}></div>
        <div className={sytles.BottomBlur}></div>
    </section>
  )
}
