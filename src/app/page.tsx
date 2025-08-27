'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageHeader from '../components/PageHeader';
import BottomNav from '../components/BottomNav';
import CategoryCard from '../components/CategoryCard';
import { mainCategories } from '../data/main';

function paintRocketOnce() {
  const already = sessionStorage.getItem('rocketPainted');
  const titleEl = document.getElementById('page-title');
  const cardEl  = document.getElementById('card-rocket');
  const iconEl  = document.getElementById('rocket-icon');
  const sparkEl = document.getElementById('spark');

  if (!titleEl || !cardEl || !iconEl || !sparkEl) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Цель — центр иконки ракеты
  const tRect = titleEl.getBoundingClientRect();
  const iRect = iconEl.getBoundingClientRect();

  // Старт — справа от заголовка (красиво «вылетает»)
  const startX = tRect.left + tRect.width - 8;
  const startY = tRect.top  + tRect.height * 0.45;

  // Финиш — центр иконки
  const endX = iRect.left + iRect.width  * 0.5;
  const endY = iRect.top  + iRect.height * 0.5;

  // Положить искру в старт
  sparkEl.style.left = `${startX}px`;
  sparkEl.style.top  = `${startY}px`;

  // Вектор смещения относительно start (для keyframes через CSS vars)
  sparkEl.style.setProperty('--sx', '0px');
  sparkEl.style.setProperty('--sy', '0px');
  sparkEl.style.setProperty('--tx', `${endX - startX}px`);
  sparkEl.style.setProperty('--ty', `${endY - startY}px`);

  const applyPaint = () => {
    iconEl.classList.add('rocket--painted');         // SVG: fill станет беловатым
    // Если иконка — SVG, продублируй:
    try {
      const paths = (iconEl as unknown as SVGElement).querySelectorAll('path, use');
      paths.forEach(p => (p as any).style.fill = 'var(--spark-color)');
    } catch {}
    sessionStorage.setItem('rocketPainted', '1');
  };

  // Если уже красили или reduce-motion — без полёта
  if (already === '1' || reduce) {
    applyPaint();
    return;
  }

  // Запускаем плавную анимацию
  sparkEl.style.animation = 'spark-move 900ms cubic-bezier(.2,.7,.15,1) forwards';

  // По завершении — закрасить ракету и убрать искру
  sparkEl.addEventListener('animationend', () => {
    applyPaint();
    // лёгкая вспышка при окраске
    iconEl.animate(
      [
        { filter: 'brightness(1)', opacity: 0.9 },
        { filter: 'brightness(1.25)', opacity: 1 },
        { filter: 'brightness(1)', opacity: 0.95 }
      ],
      { duration: 380, easing: 'cubic-bezier(.2,.7,.15,1)', fill: 'forwards' }
    );
    sparkEl.style.opacity = '0';
  }, { once: true });
}

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Запускаем анимацию искры при монтировании
    requestAnimationFrame(paintRocketOnce);
  }, []);

  const handleCategoryClick = (id: string) => {
    router.push(`/list/${id}`);
  };

  return (
    <div className="container page-transition">
      <PageHeader />
      
      <div className="grid">
        {mainCategories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            count={category.links.length}
            onClick={() => handleCategoryClick(category.id)}
            specialIcon={category.id === 'start'}
            premium={category.id === 'secret'}
            id={category.id === 'start' ? 'card-rocket' : undefined}
          />
        ))}
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
}
