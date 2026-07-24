import React from 'react';
import { SERVICES } from '../../utils/constants';
import styles from './ServicesPage.module.scss';

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <div className="container">
        <h1 className={styles.servicesPage__title}>Наши услуги</h1>
        <p className={styles.servicesPage__subtitle}>
          Полный спектр услуг по ремонту и обслуживанию дизельной техники
        </p>

        <div className={styles.servicesPage__grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.servicesPage__card}>
              <div className={styles.servicesPage__cardIcon}>{service.icon}</div>
              <h3 className={styles.servicesPage__cardTitle}>{service.title}</h3>
              <p className={styles.servicesPage__cardDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.servicesPage__support}>
          <h2>ТЕХ ПОДДЕРЖКА</h2>
          <p className={styles.servicesPage__supportPrice}>Консультация от 500 рублей</p>
          <p className={styles.servicesPage__supportText}>
            Профессиональная консультация по вопросам ремонта и обслуживания дизельных двигателей
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;