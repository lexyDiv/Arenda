const React = require('react');
const GameCard = require('./GameCard');

function CardList() {
  const cards = [
    {
      title: 'Shadow of WarCraft II',
      image: 'wc/title_images/first.png',
      text1: 'Реал-тайм стратегия по мотивам WarCraft II от Blizzard. Проект разрабатывается на чистом JS, без использования фреймворков и библиотек.',
      text2: 'Правая кнопка мыши в игре - это левая кнопка мыши с зажатым пробелом. Для более комфортного скроулинга экрана в игре, рекомендуется перейти в полноэкранный режим, чаще всего это F11',
      text3: 'Версия для ПК, мобильная в разработке.',
      id: 'wc',
    },
    {
      title: 'Boulder Dash',
      image: 'boulder/title.jpg',
      text1: 'Версия классической игры-головоломки на многих игровых платформах и компьютерах. Проект на JS и Three.js, для отрисовки 3d графики.',
      text2: 'По умолчанию управление стрелками на клаве. Другие кнопки можно выбрать в меню игры.',
      text3: 'Версия для ПК, мобильная в разработке.',
      id: 'boulder',
    },
  ];

  return (
    <div id="cards">
      {cards.map((card) => <GameCard key={card.id} card={card} />)}
    </div>
  );
}

module.exports = CardList;
