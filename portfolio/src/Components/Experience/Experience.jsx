import React from 'react';
import skill from '../../Data/Skill';
import History from '../../Data/History';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <>
      <h2 className={styles.title}>Experience</h2>
    <section id="experience" className={styles.container}>
    
      <div className={styles.content}>
        <div className={styles.skills}>
          {skill.map((skillItem, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImage}>
                <img src={skillItem.imageSrc} alt={skillItem.title} width={"50px"} />
              </div>
              <p>{skillItem.title}</p>
            </div>
          ))}
        </div>
      </div>
      <ul className={styles.history}>
        {History.map((historyItem, id) => (
          <li key={id} className={styles.historyItem}>
            <img src={historyItem.imageSrc} alt={`${historyItem.organisation} logo`} width={"100px"} />
            <div className={styles.historyItemDetails}>
              <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul className={styles.experienceList}>
                {historyItem.experiences.map((experience, expId) => (
                  <li key={expId} className={styles.experienceItem}>
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
}

