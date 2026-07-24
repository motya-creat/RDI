import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACTS } from '../../../utils/constants';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Отслеживаем скролл
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при смене страницы
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Блокируем скролл body при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
      <div className="container">
        <div className={styles.header__inner}>
          {/* Логотип */}
          <Link to="/" className={styles.header__logo} onClick={closeMenu}>
            <div className={styles.header__logoIcon}>RDI</div>
            <span className={styles.header__logoText}>
              Профессиональные<br />дизельные решения
            </span>
          </Link>

          {/* Навигация */}
          <nav className={`${styles.header__nav} ${isMenuOpen ? styles['header__nav--open'] : ''}`}>
            <div className={styles.header__navInner}>
              <Link 
                to="/" 
                className={`${styles.header__navLink} ${location.pathname === '/' ? styles['header__navLink--active'] : ''}`}
                onClick={closeMenu}
              >
                Главная
              </Link>
              <Link 
                to="/services" 
                className={`${styles.header__navLink} ${location.pathname === '/services' ? styles['header__navLink--active'] : ''}`}
                onClick={closeMenu}
              >
                Услуги
              </Link>
              <a 
                href="#contacts" 
                className={styles.header__navLink}
                onClick={closeMenu}
              >
                Контакты
              </a>
              
              {/* Мобильные контакты */}
              <div className={styles.header__mobileContacts}>
                <a href={`tel:${CONTACTS.phoneLink}`} className={styles.header__mobilePhone}>
                  {CONTACTS.phone}
                </a>
                <button 
                  className={styles.header__mobileButton}
                  onClick={() => {
                    closeMenu();
                    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </nav>

          {/* Десктопные контакты */}
          <div className={styles.header__contacts}>
            <a href={`tel:${CONTACTS.phoneLink}`} className={styles.header__phone}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {CONTACTS.phone}
            </a>
            <button 
              className={styles.header__button}
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Заказать звонок
            </button>
          </div>

          {/* Бургер-меню */}
          <button 
            className={`${styles.header__burger} ${isMenuOpen ? styles['header__burger--active'] : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;