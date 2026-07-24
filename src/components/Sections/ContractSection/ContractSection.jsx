import React, { useEffect, useRef } from 'react';
import styles from './ContractSection.module.scss';

const ContractSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['contract--visible']);
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
    <section className={styles.contract} ref={sectionRef}>
      <div className="container">
        <div className={styles.contract__inner}>
          <div className={styles.contract__content}>
            <h2 className={styles.contract__title}>
              Работаем с юридическими лицами
            </h2>
            <p className={styles.contract__text}>
              Мы заключаем договора с ООО и ИП. Все работы выполняются официально, 
              с полным пакетом документов и гарантийными обязательствами.
            </p>
            <div className={styles.contract__features}>
              <div className={styles.contract__feature}>
                <span className={styles.contract__featureIcon}>📄</span>
                <div>
                  <h4>Официальный договор</h4>
                  <p>Юридически защищенные отношения</p>
                </div>
              </div>
              <div className={styles.contract__feature}>
                <span className={styles.contract__featureIcon}>💰</span>
                <div>
                  <h4>Безналичный расчет</h4>
                  <p>Работаем с НДС и без</p>
                </div>
              </div>
              <div className={styles.contract__feature}>
                <span className={styles.contract__featureIcon}>📋</span>
                <div>
                  <h4>Закрывающие документы</h4>
                  <p>Акты, счета-фактуры, закрывашки</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contract__image}>
            <div className={styles.contract__placeholder}>
              <span>🤝</span>
              <p>Договор с ООО и ИП</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;