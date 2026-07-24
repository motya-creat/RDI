import emailjs from 'emailjs-com';

const SERVICE_ID = 'id';
const TEMPLATE_ID = 'id';
const USER_ID = 'id';

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      message: formData.message || 'Без комментария',
      to_email: 'info@rdi.ru', // почта
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return { success: false, error: error.text || 'Ошибка отправки' };
  }
};