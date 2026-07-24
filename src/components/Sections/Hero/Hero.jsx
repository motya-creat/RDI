import React from 'react';
import Button from '../../UI/Button/Button';
import { CONTACTS } from '../../../utils/constants';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__overlay} />
      
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__text}>
            <span className={styles.hero__badge}>
              Профессиональный ремонт дизелей
            </span>
            
            <h1 className={styles.hero__title}>
              Ваш грузовик не заводится?
              <br />
              <span className={styles.hero__highlight}>
                Мы вернем его к жизни
              </span>
            </h1>
            
            <p className={styles.hero__subtitle}>
              Диагностика, ремонт и обслуживание дизельных двигателей любой сложности.
              Гарантия качества — более 15 лет опыта.
            </p>
            
            <div className={styles.hero__actions}>
              <Button 
                variant="primary" 
                size="large" 
                className={styles.hero__button}
                onClick={() => {
                  document.getElementById('contacts')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Нужна срочная помощь?
              </Button>
              
              <a href={`tel:${CONTACTS.phoneLink}`} className={styles.hero__phone}>
                <span className={styles.hero__phoneLabel}>Или звоните</span>
                <span className={styles.hero__phoneNumber}>{CONTACTS.phone}</span>
              </a>
            </div>
          </div>

          {/* <div className={styles.hero__car}>
            <div className={styles.hero__carContent}>
              <div className={styles.hero__carIcon}></div>
              <span className={styles.hero__carName}>Профессиональный ремонт</span>
              <span className={styles.hero__carSub}>Грузовой техники</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;