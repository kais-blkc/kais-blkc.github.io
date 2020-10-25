
// Default cards
const myGames = [
  {
    id: 1,
    title: "Far Cry 5",
    img: "https://nvplay.ru/uploads/images/Reviews/2019/02.17-Far-Cry-5-HD/01.jpg",
    content: "Far Cry 5 — компьютерная игра в жанре шутера от первого лица и action-adventure, разработанная студией Ubisoft Montreal и изданная компанией Ubisoft. Является пятой основной игрой из одноимённой серии игр.",
    cutContent: "Far Cry 5 — компьютерная игра в жанре шутера от первого лица и action-adventure, разработанная студи"
  },
  {
    id: 2,
    title: "Tom Clancy's Ghost Recon: Wildlands",
    img: "https://steamcdn-a.akamaihd.net/steam/apps/460930/capsule_616x353.jpg?t=1602605434",
    content: "Tom Clancy’s Ghost Recon Wildlands — мультиплатформенная компьютерная игра в жанре тактического шутера, разрабатываемая Ubisoft Paris. Игра была анонсирована на E3 2015 года. Это первая игра с открытым миром во франшизе Ghost Recon. Игра вышла на платформах Windows, PlayStation 4 и Xbox One.",
    cutContent: "Tom Clancy’s Ghost Recon Wildlands — мультиплатформенная компьютерная игра в жанре тактического шуте"
  },
  {
    id: 3,
    title: "Ghostrunner",
    img: "https://wallpapershome.ru/images/pages/ico_h/23053.jpg",
    content: "Переведено с английского языка.-Ghostrunner - это предстоящая видеоигра в стиле киберпанк, разработанная польской студией One More Level и совместно изданная All in! Games и 505 Games, которые будут выпущены для Microsoft Windows, Xbox One, PlayStation 4 и Nintendo Switch в октябре 2020 года.",
    cutContent: "Переведено с английского языка.-Ghostrunner - это предстоящая видеоигра в стиле киберпанк, разработа"
  },
  {
    id: 4,
    title: "Cyberpunk 2077",
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1091500/capsule_616x353.jpg?t=1603104939",
    content: "Cyberpunk 2077 — мультиплатформенная компьютерная игра в жанре Action/RPG, разрабатываемая польской студией CD Projekt RED. Игра является продолжением настольной игры «Киберпанк 2020», действия будут происходить спустя 57 лет в большом городе Найт-Сити, расположенном в штате Калифорния.",
    cutContent: "Cyberpunk 2077 — мультиплатформенная компьютерная игра в жанре Action/RPG, разрабатываемая польской "
  },
];

// Variables
const cardsList = document.querySelector('.card-list');
const form = document.forms.formCard;
let btnCreate = form.elements.btnCreate;
let btnClear = form.elements.btnClear;
let id = myGames.length + 1;
let cards = [];
let oldLocal;


myGames.forEach(item => cards.unshift(item));

// Check for the presence of a card
if (localStorage.cards == '[]' || localStorage.length == 0) {
  localStorage.setItem('cards', JSON.stringify(cards));
}

render()

// Load old cards
document.addEventListener('DOMContentLoaded', () => {
  oldLocal = JSON.parse(localStorage.cards);
  cards = oldLocal;
});

// Add card
btnCreate.onclick = e => {
  e.preventDefault();
  let card = {
    id: id,
    title: form.elements.title.value.substring(0, 35),
    img: form.elements.img.value,
    content: form.elements.content.value,
    cutContent: form.elements.content.value.substring(0, 100),
  }

  cards.unshift(card);
  localStorage.cards = JSON.stringify(cards);

  render();
  clearForm();
  id++;
}

// Delete all cards
btnClear.onclick = () => {
  cards = cards.filter(f => f.id == 0);
  localStorage.cards = JSON.stringify(cards);
  render();
}

// Delete card
cardsList.addEventListener('click', e => {
  
  if (e.target.closest('[data-delete]')) {
    e.preventDefault();
    const cardId = +e.target.parentNode.parentNode.parentNode.id;
    cards = cards.filter(f => f.id != cardId);
    localStorage.cards = JSON.stringify(cards);
    render();

  } else if (e.target.closest('[data-more]')) {

    const $card = e.target.parentNode.parentNode.parentNode;
    const cardData = {
      title: $card.querySelector('.card-item-title').innerHTML,
      img: $card.querySelector('img').src,
      content: $card.querySelector('.card-content').innerHTML,
    }

    modal = $.modal(cardData);
    modal.open();
    modal.close();
  }
});

// Convert object to HTML
function toHTML(obj) {
 return  `
  <div class="card-item" id="${obj.id}" data-card>
      <img src="${obj.img}" class="card-img-top" alt="${obj.title}">
      <div class="card-item-body">
        <h5 class="card-item-title">${obj.title}</h5>
        <p class="card-item-text">${obj.cutContent}<span>${obj.cutContent.length == 100 ? '...' : ''}</span>
        </p>
        <p class="d-none card-content">${obj.content}</p>
        <div class="btns">
          <button type="button" class="btn btn-outline-primary" data-more>Подробнее</button>
          <button type="button" class="btn text-danger" data-delete>Удалить</button>
        </div>
      </div>
  </div>
`;
}

// Updating cardslist
function render() {
  const local = JSON.parse(localStorage.cards)
  const html = local.map(item => toHTML(item)).join('');
  cardsList.innerHTML = html;
}

// Clear form
function clearForm() {
  form.elements.title.value = '';
  form.elements.img.value = '';
  form.elements.content.value = '';
  formClose();
}
