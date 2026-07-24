import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import styles from './ServicesList.module.scss';

const mainServices = [
  {
    id: 1,
    title: 'Генераторы',
    description: 'Ремонт и обслуживание дизельных генераторов любой мощности',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Компьютерная диагностика, СИП, Тюнинг',
    description: 'Профессиональная диагностика, чип-тюнинг и настройка СИП',
    icon: '🔧',
  },
  {
    id: 3,
    title: 'Ремонт топливной системы КМРЛ',
    description: 'Полный цикл ремонта топливной аппаратуры Common Rail',
    icon: '⛽',
  },
  {
    id: 4,
    title: 'Ремонт грузовой техники',
    description: 'Ремонт ходовой части, узлов и агрегатов грузовых автомобилей',
    icon: '🚛',
  },
];

const ServicesList = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.services__header}>
          <span className={styles.services__badge}>Что мы предлагаем</span>
          <h2 className={styles.services__title}>Основные услуги</h2>
          <p className={styles.services__subtitle}>
            Полный спектр услуг по ремонту и обслуживанию дизельной техники
          </p>
        </div>

        <div className={styles.services__grid}>
          {mainServices.map((service) => (
            <div key={service.id} className={styles.services__card}>
              <div className={styles.services__cardIcon}>{service.icon}</div>
              <h3 className={styles.services__cardTitle}>{service.title}</h3>
              <p className={styles.services__cardDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.services__support}>
          <h3 className={styles.services__supportTitle}>ТЕХ ПОДДЕРЖКА</h3>
          <p className={styles.services__supportPrice}>Консультация от 500 рублей</p>
          <p className={styles.services__supportText}>
            Профессиональная консультация по вопросам ремонта и обслуживания дизельных двигателей
          </p>
        </div>

        <div className={styles.services__footer}>
          <Link to="/services">
            <Button variant="primary" size="large">
              Все услуги →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;