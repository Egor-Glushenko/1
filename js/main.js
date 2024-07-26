let tg = window.Telegram.WebApp;
tg.expand();


function myFunction() { //функция нажатия на экран
    $("#myEl").trigger('click');
    $("#myEl").trigger('touchstart');
}
window.onload = myFunction;

//открытие через кнопку========================================================================================
const botToken = 'AAFPKnNof0MrkVuEqJOML7TlUHlQF9ky2jU';
const chatId = '817948942';
const url = 'https://egor-glushenko.github.io/step2.3/';

const markup = {
  inline_keyboard: [
    [
      {
        text: 'Play',
        url: url + chatId
      }
    ]
  ]
};

const params = {
  method: 'sendMessage',
  parse_mode: 'Markdown',
  chat_id: chatId,
  text: 'Click the button to play',
  reply_markup: JSON.stringify(markup)
};

fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(params)
});
//конец открытия через кнопку=============================================================================================
/*
Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
тут мы делаем так:
при нажатии на главную кнопку отправляем данные телеграму
*/

//==============================================================================usermane=======================================

let usercard = document.getElementById("usercard");//карточка пользователя
let p = document.createElement("p");//параграф
//инфа о пользователе
p.innerText = `${tg.initDataUnsafe.user.username}`;
usercard.appendChild(p);//добавляем дочерний элемент

//==============================================end username===================================================================

// СДЕЛАТЬ ВКЛАДКУ ДРУЗЬЯ И КНОПКУ ПОДЕЛИТЬСЯ:

function shareGame() {
    var gameUrl = "https://t.me/TryTap_bot";
    var shareText = "Play with me in this awesome game!";
    var encodedUrl = encodeURIComponent(gameUrl);
    var encodedText = encodeURIComponent(shareText);
    var telegramUrl = "https://t.me/share/url?url=" + encodedUrl + "&text=" + encodedText;
    window.open(telegramUrl, "_blank");
}
//ПОДУМАТЬ КАК ОТОБРАЖАТЬ ПРИГЛАШЕННЫХ ДРУЗЕЙ 

//================================================================================================share====================================

/*const telegramApiUrl = 'https://api.telegram.org/botYOUR_BOT_TOKEN'; // замените на ваш токен бота
const chatIdShare = null; // ID чата, в который будет отправлена ссылка

document.getElementById('share-btn').addEventListener('click', async () => {
  try {
    // Получаем список контактов Telegram
    const response = await fetch(`${telegramApiUrl}/getContacts`);
    const contacts = await response.json();

    // Создаем список контактов для выбора
    const contactList = contacts.result.map((contact) => ({
      id: contact.user_id,
      name: contact.first_name,
    }));

    // Отображаем список контактов для выбора
    const contactSelect = document.createElement('select');
    contactList.forEach((contact) => {
      const option = document.createElement('option');
      option.value = contact.id;
      option.text = contact.name;
      contactSelect.appendChild(option);
    });

    const chooseContactModal = document.createElement('div');
    chooseContactModal.innerHTML = `
      <h2>Выберите контакт</h2>
      <form>
        <label for="contact-select">Контакт:</label>
        <select id="contact-select">${contactSelect.innerHTML}</select>
        <button type="submit">Отправить</button>
      </form>
    `;

    document.body.appendChild(chooseContactModal);

    // Обработка отправки формы
    chooseContactModal.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const selectedContactId = chooseContactModal.querySelector('#contact-select').value;
      chatIdShare = selectedContactId;

      // Отправляем ссылку в Telegram
      const link = 'https://example.com/your-link'; // замените на вашу ссылку
      const message = `Вот интересная ссылка: ${link}`;
      const response = await fetch(`${telegramApiUrl}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatIdShare,
          text: message,
        }),
      });

      if (response.ok) {
        alert('Ссылка отправлена!');
      } else {
        alert('Ошибка отправки ссылки!');
      }

      // Удаляем модальное окно
      chooseContactModal.remove();
    });
  } catch (error) {
    console.error(error);
  }
}); */
//==================================================== end share =========================================================================================