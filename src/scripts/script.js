const openBtn = document.getElementById('openBtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.closeBtn');

function openPopup() {
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
}

openBtn.addEventListener('click', openPopup);

closeBtn.addEventListener('click', closePopup);

window.addEventListener('click', function (event) {
    if (event.target === popup) {
        closePopup();
    }
});


document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const number = document.getElementById('number').value 
        const message = document.getElementById('message').value
        const agree = document.getElementById('agreement').value

        const botToken = '7770363402:AAHiPD7ZMCYRQ91VW_7vmiAHaRJ8N1U_vzA';
        const chatId = '991387497';
        // const botToken = process.env.BOT_TOKEN
        // const chat_id = process.env.CHAT_ID


        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const text = `Имя: ${name}\nEmail: ${email}\nТелефон: ${number}\nСообщение: ${message}\nПольз.соглашение: ${agree}`;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                form.reset();
            } else {
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                console.error('Ошибка при отправке в Telegram:', data);
            }
        })
        .catch(error => {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            console.error('Ошибка:', error);
        });
    });
}); 