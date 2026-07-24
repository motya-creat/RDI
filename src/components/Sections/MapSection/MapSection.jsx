import React, { useEffect, useRef } from 'react';
import { CONTACTS } from '../../../utils/constants';
import RequestForm from '../RequestForm/RequestForm';
import styles from './MapSection.module.scss';

const MapSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['map--visible']);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.map} ref={sectionRef} id="contacts">
      <div className="container">
        <div className={styles.map__header}>
          <span className={styles.map__badge}>Как нас найти</span>
          <h2 className={styles.map__title}>Контакты и адрес</h2>
        </div>

        <div className={styles.map__inner}>
          <div className={styles.map__info}>
            <div className={styles.map__contacts}>
              <div className={styles.map__contact}>
                <span className={styles.map__contactIcon}>📍</span>
                <div>
                  <h4>Адрес</h4>
                  <p>{CONTACTS.address}</p>
                </div>
              </div>
              <div className={styles.map__contact}>
                <span className={styles.map__contactIcon}>📞</span>
                <div>
                  <h4>Телефон</h4>
                  <a href={`tel:${CONTACTS.phoneLink}`} className={styles.map__phone}>
                    {CONTACTS.phone}
                  </a>
                </div>
              </div>
              <div className={styles.map__contact}>
                <span className={styles.map__contactIcon}>✉️</span>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${CONTACTS.email}`} className={styles.map__email}>
                    {CONTACTS.email}
                  </a>
                </div>
              </div>
              <div className={styles.map__contact}>
                <span className={styles.map__contactIcon}>🕐</span>
                <div>
                  <h4>Режим работы</h4>
                    <div className={styles.map__time}>
                        <p>Пн-Пт: {CONTACTS.workHours.weekdays}</p>
                        <p>Сб: {CONTACTS.workHours.saturday}</p>
                        <p>Воскресенье: {CONTACTS.workHours.sunday}</p>
                    </div>
                </div>
              </div>
            </div>

            <div className={styles.map__form}>
              <h3 className={styles.map__formTitle}>Оставить заявку</h3>
              <RequestForm />
            </div>
          </div>

          <div className={styles.map__wrapper}>
            <iframe id="map_732242740" frameborder="0" width="100%" height="600px" src="https://makemap.2gis.ru/widget?data=eJw1js1qw0AMhN9FvS5Bu6X-2QdI6C23QksOxqskC2trWSvQ1PjdK9utTmJGmvlm4BKoUDgRDyQl0gT-awZ5ZgIPR-rkUQgM5MKZimz-DD0nLuq_oGvs1akvUdL6oWugqS8xS-RxF37ex0Df4C3-z2Lgthc-17i_tjPHUfS-Z4WKYycbTF0d6rZ21lTVARvE5qLfMYBvnFsuBoYun3mKe90MqRPwemrRYftmIK2yZlTYYv2qMMyDolgNUUxO6eNOlD43VcqDll8JUVVm" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;