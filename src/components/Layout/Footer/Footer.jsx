import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACTS } from '../../../utils/constants';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__column}>
            <div className={styles.footer__logo}>
              <div className={styles.footer__logoIcon}>RDI</div>
              <span className={styles.footer__logoText}>
                Профессиональные<br />дизельные решения
              </span>
            </div>
            <p className={styles.footer__description}>
              Ремонт и обслуживание дизельных двигателей любой сложности. Более 15 лет на рынке.
            </p>
          </div>

          <div className={styles.footer__column}>
            <h4 className={styles.footer__title}>Контакты</h4>
            <ul className={styles.footer__list}>
              <li>
                <a href={`tel:${CONTACTS.phoneLink}`} className={styles.footer__link}>
                  📞 {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACTS.email}`} className={styles.footer__link}>
                  ✉️ {CONTACTS.email}
                </a>
              </li>
              <li className={styles.footer__link}>
                📍 {CONTACTS.address}
              </li>
              <li className={styles.footer__link}>
                🕐 Пн-Пт: {CONTACTS.workHours.weekdays}, Сб: {CONTACTS.workHours.saturday}, Воскресенье: {CONTACTS.workHours.sunday}
              </li>
            </ul>
          </div>

          <div className={styles.footer__column}>
            <h4 className={styles.footer__title}>Быстрые ссылки</h4>
            <ul className={styles.footer__list}>
              <li>
                <Link to="/" className={styles.footer__link}>Главная</Link>
              </li>
              <li>
                <Link to="/services" className={styles.footer__link}>Услуги</Link>
              </li>
              <li>
                <a href="#contacts" className={styles.footer__link}>Контакты</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            © {new Date().getFullYear()} RDI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;