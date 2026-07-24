import React, { useState } from 'react';
import { sendEmail } from '../../../api/sendEmail';
import Button from '../../UI/Button/Button';
import styles from './RequestForm.module.scss';

const RequestForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    vehicleType: '',
    problem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.vehicleType) {
      setError('Пожалуйста, выберите тип техники');
      return;
    }
    if (step === 2 && !formData.problem) {
      setError('Пожалуйста, выберите проблему');
      return;
    }
    setError('');
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) {
      setError('Пожалуйста, введите номер телефона');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const result = await sendEmail({
      name: formData.name || 'Не указано',
      phone: formData.phone,
      message: `Тип техники: ${formData.vehicleType}\nПроблема: ${formData.problem}\nКомментарий: ${formData.message}`,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        message: '',
        vehicleType: '',
        problem: '',
      });
      setStep(1);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } else {
      setError('Ошибка отправки. Попробуйте позже или позвоните нам.');
    }
  };

  const vehicleTypes = [
    { value: 'truck', label: '🚛 Грузовая техника' },
    { value: 'special', label: '🏗️ Спецтехника' },
    { value: 'other', label: '🔧 Другая техника' },
  ];

  const problems = [
    { value: 'no-start', label: 'Не заводится' },
    { value: 'smoke', label: 'Дымит' },
    { value: 'knock', label: 'Стучит' },
    { value: 'power-loss', label: 'Потеря мощности' },
    { value: 'other', label: 'Другая проблема' },
  ];

  if (isSuccess) {
    return (
      <div className={styles.form__success}>
        <div className={styles.form__successIcon}>✅</div>
        <h3 className={styles.form__successTitle}>Заявка отправлена!</h3>
        <p className={styles.form__successText}>
          Спасибо! Мы перезвоним вам в течение 3 минут.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <div className={styles.form__header}>
        <h3 className={styles.form__title}>
          {step === 1 && 'Шаг 1: Выберите технику'}
          {step === 2 && 'Шаг 2: Опишите проблему'}
          {step === 3 && 'Шаг 3: Оставьте контакты'}
        </h3>
        <div className={styles.form__steps}>
          <span className={`${styles.form__step} ${step >= 1 ? styles['form__step--active'] : ''}`}>1</span>
          <span className={`${styles.form__step} ${step >= 2 ? styles['form__step--active'] : ''}`}>2</span>
          <span className={`${styles.form__step} ${step >= 3 ? styles['form__step--active'] : ''}`}>3</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form__body}>
        {step === 1 && (
          <div className={styles.form__stepContent}>
            <label className={styles.form__label}>Тип техники</label>
            <div className={styles.form__options}>
              {vehicleTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  className={`${styles.form__option} ${
                    formData.vehicleType === type.value ? styles['form__option--selected'] : ''
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, vehicleType: type.value }))}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.form__stepContent}>
            <label className={styles.form__label}>Выберите основную проблему</label>
            <div className={styles.form__options}>
              {problems.map((problem) => (
                <button
                  key={problem.value}
                  type="button"
                  className={`${styles.form__option} ${
                    formData.problem === problem.value ? styles['form__option--selected'] : ''
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, problem: problem.value }))}
                >
                  {problem.label}
                </button>
              ))}
            </div>
            <textarea
              name="message"
              placeholder="Опишите подробнее (необязательно)"
              value={formData.message}
              onChange={handleChange}
              className={styles.form__textarea}
              rows="3"
            />
          </div>
        )}

        {step === 3 && (
          <div className={styles.form__stepContent}>
            <div className={styles.form__field}>
              <label className={styles.form__label} htmlFor="name">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={handleChange}
                className={styles.form__input}
              />
            </div>
            <div className={styles.form__field}>
              <label className={styles.form__label} htmlFor="phone">
                Номер телефона <span className={styles.form__required}>*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={handleChange}
                className={styles.form__input}
                required
              />
            </div>
          </div>
        )}

        {error && <div className={styles.form__error}>{error}</div>}

        <div className={styles.form__actions}>
          {step > 1 && (
            <Button type="button" variant="secondary" size="medium" onClick={prevStep}>
              Назад
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" variant="primary" size="medium" onClick={nextStep}>
              Далее →
            </Button>
          ) : (
            <Button type="submit" variant="primary" size="large" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RequestForm;