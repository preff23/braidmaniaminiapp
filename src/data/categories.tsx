import { ReactNode } from 'react';
import { FlagIcon, BulbIcon, HandIcon, CapIcon, CamIcon, LockIcon } from '@/components/Icons';

export type Category = {
  key: string;
  title: string;
  icon: ReactNode;
  links: { title: string; url: string }[];
};

export const categories: Category[] = [
  {
    key: 'start',
    title: 'С ЧЕГО НАЧАТЬ НОВИЧКУ',
    icon: <FlagIcon />,
    links: [
      { title: 'Ссылки на материалы и инструменты', url: 'https://t.me/arinabraidsPRO/6' },
      { title: 'Полезные ссылки', url: 'https://t.me/arinabraidsPRO/565' },
      { title: 'С чего начать', url: 'https://t.me/arinabraidsPRO/120' },
      { title: 'Как найти модель', url: 'https://t.me/arinabraidsPRO/10' },
    ]
  },
  {
    key: 'lifehacks',
    title: 'ПОЛЕЗНЫЕ ЛАЙФХАКИ В ПЛЕТЕНИИ',
    icon: <BulbIcon />,
    links: [
      { title: 'Уход за локонами', url: 'https://t.me/arinabraidsPRO/210' },
      { title: 'Стрижка кудрей', url: 'https://t.me/arinabraidsPRO/38' },
      { title: 'Стрижка термоволокна', url: 'https://t.me/arinabraidsPRO/95' },
      { title: 'Прячем волосы в хвосте', url: 'https://t.me/arinabraidsPRO/217' },
      { title: 'Кудри без крючка', url: 'https://t.me/arinabraidsPRO/259' },
      { title: 'Расплетение кудрей точечно', url: 'https://t.me/arinabraidsPRO/265' },
      { title: 'Крепление канекалона', url: 'https://t.me/arinabraidsPRO/381' },
      { title: 'Ровные деления', url: 'https://t.me/arinabraidsPRO/397' },
      { title: 'Крепление косы без карабина', url: 'https://t.me/arinabraidsPRO/485' },
    ]
  },
  {
    key: 'practice',
    title: 'ПРАКТИКА',
    icon: <HandIcon />,
    links: [
      { title: 'Кудрявые концы', url: 'https://t.me/arinabraidsPRO/141' },
      { title: 'Упражнение на безопасный брейд', url: 'https://t.me/arinabraidsPRO/20' },
      { title: 'Метод крепления кудрей', url: 'https://t.me/arinabraidsPRO/32' },
      { title: 'Скоростной узел', url: 'https://t.me/arinabraidsPRO/39' },
      { title: 'Косы у лица', url: 'https://t.me/arinabraidsPRO/93' },
      { title: 'Термозамещение без полувосьмерки', url: 'https://t.me/arinabraidsPRO/245' },
      { title: 'Добавление прядей в брейд', url: 'https://t.me/arinabraidsPRO/425' },
      { title: 'Хвост на резинке', url: 'https://t.me/arinabraidsPRO/507' },
    ]
  },
  {
    key: 'mk',
    title: 'МК И СКИДКИ УЧАСТНИКАМ ГРУППЫ',
    icon: <CapIcon />,
    links: [
      { title: 'Курс «Краевая»', url: 'https://t.me/arinabraidsPRO/137' },
      { title: 'Курс «Точечное замещение»', url: 'https://t.me/arinabraidsPRO/105' },
      { title: 'Кудри на каркас', url: 'https://t.me/arinabraidsPRO/152' },
      { title: 'Брейды', url: 'https://t.me/arinabraidsPRO/226' },
      { title: 'Практикум: 3 вида плетения', url: 'https://t.me/arinabraidsPRO/469' },
    ]
  },
  {
    key: 'tutorials',
    title: 'ТУТОРИАЛЫ НА СЕБЕ',
    icon: <CamIcon />,
    links: [
      { title: 'Два хвоста', url: 'https://t.me/arinabraidsPRO/146' },
      { title: 'Длинная коса', url: 'https://t.me/arinabraidsPRO/149' },
      { title: 'Брейды', url: 'https://t.me/arinabraidsPRO/177' },
      { title: 'Афрокосы', url: 'https://t.me/arinabraidsPRO/180' },
      { title: 'Завитая коса', url: 'https://t.me/arinabraidsPRO/201' },
      { title: 'Афролоконы', url: 'https://t.me/arinabraidsPRO/234' },
      { title: 'Афрокудри точечно', url: 'https://t.me/arinabraidsPRO/251' },
      { title: 'Афрохвост', url: 'https://t.me/arinabraidsPRO/395' },
      { title: 'Сенегалки', url: 'https://t.me/arinabraidsPRO/445' },
    ]
  },
  {
    key: 'secret',
    title: 'СЕКРЕТНЫЕ МАТЕРИАЛЫ',
    icon: <LockIcon />,
    links: [
      { title: 'Очищение', url: 'https://t.me/arinabraidsPRO/195' },
      { title: 'Мышление', url: 'https://t.me/arinabraidsPRO/208' },
      { title: 'Если нет клиентов', url: 'https://t.me/arinabraidsPRO/235' },
      { title: 'План на 20 рилс', url: 'https://t.me/arinabraidsPRO/62' },
      { title: 'Вложения в брейдинг', url: 'https://t.me/arinabraidsPRO/255' },
      { title: 'X.mind таблица по контенту', url: 'https://t.me/arinabraidsPRO/287' },
      { title: 'Как учиться онлайн', url: 'https://t.me/arinabraidsPRO/319' },
      { title: 'Зизи — новый тренд?', url: 'https://t.me/arinabraidsPRO/526' },
    ]
  },
];
