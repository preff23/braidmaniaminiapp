export interface Category {
  key: string;
  title: string;
  links: Array<{
    title: string;
    url: string;
  }>;
  backgroundIcon?: string;
}

export const categories: Category[] = [
  {
    key: 'beginner',
    title: 'С ЧЕГО НАЧАТЬ НОВИЧКУ',
    backgroundIcon: '/photo/Flag.png',
    links: [
      { title: 'Основы плетения кос', url: 'https://t.me/braidmania/1' },
      { title: 'Инструменты для начинающих', url: 'https://t.me/braidmania/2' },
      { title: 'Простые техники плетения', url: 'https://t.me/braidmania/3' },
      { title: 'Частые ошибки новичков', url: 'https://t.me/braidmania/4' }
    ]
  },
  {
    key: 'lifehacks',
    title: 'ПОЛЕЗНЫЕ ЛАЙФХАКИ',
    backgroundIcon: '/photo/Light.png',
    links: [
      { title: 'Секреты идеального плетения', url: 'https://t.me/braidmania/5' },
      { title: 'Как закрепить кончики', url: 'https://t.me/braidmania/6' },
      { title: 'Уход за волосами', url: 'https://t.me/braidmania/7' },
      { title: 'Быстрые причёски', url: 'https://t.me/braidmania/8' }
    ]
  },
  {
    key: 'practice',
    title: 'ПРАКТИКА',
    backgroundIcon: '/photo/Scissors.png',
    links: [
      { title: 'Упражнения для рук', url: 'https://t.me/braidmania/9' },
      { title: 'Разминка перед плетением', url: 'https://t.me/braidmania/10' },
      { title: 'Техники расслабления', url: 'https://t.me/braidmania/11' },
      { title: 'Практические задания', url: 'https://t.me/braidmania/12' }
    ]
  },
  {
    key: 'courses',
    title: 'МК И СКИДКИ',
    backgroundIcon: '/photo/Graduation.png',
    links: [
      { title: 'Онлайн курсы', url: 'https://t.me/braidmania/13' },
      { title: 'Мастер-классы', url: 'https://t.me/braidmania/14' },
      { title: 'Скидки на обучение', url: 'https://t.me/braidmania/15' },
      { title: 'Индивидуальные занятия', url: 'https://t.me/braidmania/16' }
    ]
  },
  {
    key: 'tutorials',
    title: 'ТУТОРИАЛЫ',
    backgroundIcon: '/photo/Videocam.png',
    links: [
      { title: 'Видео уроки', url: 'https://t.me/braidmania/17' },
      { title: 'Пошаговые инструкции', url: 'https://t.me/braidmania/18' },
      { title: 'Скоростные техники', url: 'https://t.me/braidmania/19' },
      { title: 'Сложные плетения', url: 'https://t.me/braidmania/20' }
    ]
  },
  {
    key: 'secrets',
    title: 'СЕКРЕТНЫЕ МАТЕРИАЛЫ',
    backgroundIcon: '/photo/Lock.png',
    links: [
      { title: 'Эксклюзивные техники', url: 'https://t.me/braidmania/21' },
      { title: 'Секреты профессионалов', url: 'https://t.me/braidmania/22' },
      { title: 'Закрытые материалы', url: 'https://t.me/braidmania/23' },
      { title: 'VIP контент', url: 'https://t.me/braidmania/24' }
    ]
  }
];
