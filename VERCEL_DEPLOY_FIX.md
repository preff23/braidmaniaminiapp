# Исправление ошибок деплоя на Vercel

## Проблема
При деплое проекта на Vercel возникают ошибки:
```
Module not found: Can't resolve '@/public/photo/bag.svg'
Module not found: Can't resolve '@/public/photo/flag.svg'
Module not found: Can't resolve '@/public/photo/graduation.svg'
```
и т.д.

## Причина
В Next.js 15 с Turbopack есть конфликт между webpack конфигурацией и Turbopack. Turbopack не поддерживает кастомные webpack правила для SVG файлов.

## Решение

### 1. Отключить Turbopack для production build
В `package.json` изменить:
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",  // Убрать --turbopack
    "start": "next start",
    "lint": "eslint"
  }
}
```

### 2. Заменить импорты SVG на компонент-обертку
Создан компонент `SvgIcon.tsx`, который использует `<img>` теги вместо прямых импортов SVG.

### 3. Упростить next.config.ts
Убрать сложную webpack конфигурацию для SVG.

### 4. Убрать ненужные зависимости
Удалить `@svgr/webpack` из devDependencies.

## Альтернативные решения

### Вариант A: Использовать стандартный webpack (рекомендуется)
- Убрать `--turbopack` из build скрипта
- Оставить webpack конфигурацию для SVG

### Вариант B: Использовать img теги (реализовано)
- Заменить все импорты SVG на компонент SvgIcon
- Использовать `<img>` теги для отображения иконок

### Вариант C: Настроить Turbopack
- Добавить экспериментальные настройки для Turbopack
- Настроить правила загрузки SVG файлов

## Файлы, которые были изменены
1. `package.json` - убран флаг --turbopack из build
2. `next.config.ts` - упрощена конфигурация
3. `src/components/SvgIcon.tsx` - создан новый компонент
4. `src/components/CategoryCard.tsx` - обновлен для использования SvgIcon
5. `next-env.d.ts` - добавлены типы для SVG

## Проверка
После внесения изменений:
1. Убедиться, что проект компилируется локально: `npm run build`
2. Запушить изменения в репозиторий
3. Vercel автоматически пересоберет проект

## Примечания
- Turbopack остается включенным для разработки (`npm run dev`)
- Production build использует стандартный webpack
- SVG файлы теперь загружаются как обычные изображения 