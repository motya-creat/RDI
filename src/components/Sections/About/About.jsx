import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about__inner}>
          <div className={styles.about__content}>
            <span className={styles.about__badge}>О компании</span>
            <h2 className={styles.about__title}>
              Наш опыт — <span className={styles.about__highlight}>ваша надежность</span>
            </h2>
            
            <div className={styles.about__textBlock}>
              <p className={styles.about__text}>
                Компания RDI уже более 15 лет является лидером в производстве и поставке 
                дизельных агрегатов, топливной аппаратуры и комплектующих для промышленного 
                и коммерческого транспорта.
              </p>
              <p className={styles.about__text}>
                Мы сочетаем передовые технологии с многолетним опытом, чтобы предложить 
                нашим клиентам решения, которые действительно работают.
              </p>
            </div>

            <div className={styles.about__features}>
              <div className={styles.about__feature}>
                <span className={styles.about__featureIcon}>✅</span>
                Гарантия качества
              </div>
              <div className={styles.about__feature}>
                <span className={styles.about__featureIcon}>🏭</span>
                Собственное производство
              </div>
              <div className={styles.about__feature}>
                <span className={styles.about__featureIcon}>📜</span>
                Сертифицированная продукция
              </div>
              <div className={styles.about__feature}>
                <span className={styles.about__featureIcon}>💪</span>
                Техническая поддержка
              </div>
            </div>
          </div>

          {/* Вместо статистики - большой текстовый блок о компании */}
          <div className={styles.about__info}>
            <div className={styles.about__infoCard}>
              <h3 className={styles.about__infoTitle}>Почему выбирают нас?</h3>
              <ul className={styles.about__infoList}>
                <li className={styles.about__infoItem}>
                  <span className={styles.about__infoIcon}>🔧</span>
                  <div>
                    <strong>Профессиональный подход</strong>
                    <p>Каждый ремонт выполняем с полной ответственностью за результат</p>
                  </div>
                </li>
                <li className={styles.about__infoItem}>
                  <span className={styles.about__infoIcon}>⚡</span>
                  <div>
                    <strong>Скорость выполнения</strong>
                    <p>Среднее время ремонта — 24 часа. Ценим ваше время</p>
                  </div>
                </li>
                <li className={styles.about__infoItem}>
                  <span className={styles.about__infoIcon}>🛡️</span>
                  <div>
                    <strong>Гарантия качества</strong>
                    <p>Даем гарантию на все виды работ и установленные запчасти</p>
                  </div>
                </li>
                <li className={styles.about__infoItem}>
                  <span className={styles.about__infoIcon}>📋</span>
                  <div>
                    <strong>Официальное оформление</strong>
                    <p>Работаем с ООО и ИП, предоставляем полный пакет документов</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;