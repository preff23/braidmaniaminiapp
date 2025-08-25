# Настройка Telegram Bot для Braids Pro Mini App

## 🤖 Шаг 1: Настройка бота через @BotFather

### 1. Создание бота
1. Напишите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду: `/newbot`
3. Введите название бота: `Braids Pro`
4. Введите username бота: `your_bot_username` (замените на желаемый username)
5. Сохраните полученный токен: `8408738770:AAEBJnp2it6gbxHfaakxyCi-XMDFdtiMJGA`

### 2. Настройка Mini App
1. Отправьте [@BotFather](https://t.me/BotFather): `/newapp`
2. Выберите вашего бота из списка
3. Введите название Mini App: `Braids Pro`
4. Загрузите иконку (512x512px) - можно использовать любую красивую иконку
5. Введите описание: `Полезные материалы по плетению косичек и брейдингу`
6. Укажите URL вашего приложения: `https://your-app.vercel.app` (замените после деплоя)

### 3. Настройка команд
Отправьте [@BotFather](https://t.me/BotFather): `/setcommands`
Выберите вашего бота и отправьте:
```
start - Запустить бота
help - Помощь
```

## 🌐 Шаг 2: Деплой на Vercel

### 1. Подготовка к деплою
```bash
# Убедитесь, что проект собирается
npm run build
```

### 2. Деплой через Vercel CLI
```bash
# Установка Vercel CLI
npm i -g vercel

# Логин в Vercel
vercel login

# Деплой
vercel --prod
```

### 3. Деплой через GitHub
1. Подключите репозиторий к Vercel
2. Настройте автоматический деплой
3. Получите URL вида: `https://your-app.vercel.app`

## ⚙️ Шаг 3: Обновление конфигурации

### 1. Обновите файл `src/config/bot.ts`:
```typescript
export const BOT_CONFIG = {
  token: '8408738770:AAEBJnp2it6gbxHfaakxyCi-XMDFdtiMJGA',
  username: 'your_actual_bot_username', // Замените на реальный username
  webAppUrl: 'https://your-app.vercel.app', // Замените на реальный URL
};
```

### 2. Настройка webhook (опционально)
```bash
# Установите webhook для бота
curl -X POST "https://api.telegram.org/bot8408738770:AAEBJnp2it6gbxHfaakxyCi-XMDFdtiMJGA/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://your-app.vercel.app/api/webhook"}'
```

## 🔗 Шаг 4: Ссылки для открытия

После настройки используйте следующие ссылки:

- **Главная страница**: `https://t.me/your_bot_username/app?startapp=main`
- **Полезное**: `https://t.me/your_bot_username/app?startapp=useful`

## 📱 Шаг 5: Тестирование

### 1. Локальное тестирование
```bash
npm run dev
# Откройте http://localhost:3000
```

### 2. Тестирование в Telegram
1. Найдите вашего бота в Telegram
2. Отправьте `/start`
3. Нажмите на кнопки для открытия Mini App
4. Протестируйте все функции

## 🛠 Шаг 6: Дополнительные настройки

### Настройка меню бота
Отправьте [@BotFather](https://t.me/BotFather): `/setmenubutton`
Выберите вашего бота и отправьте:
```
Braids Pro - Полезные материалы по плетению косичек
```

### Настройка описания бота
Отправьте [@BotFather](https://t.me/BotFather): `/setdescription`
Выберите вашего бота и отправьте:
```
Полезные материалы по плетению косичек и брейдингу. 
Доступ к эксклюзивным курсам, мастер-классам и секретным материалам.
```

## 🚨 Важные замечания

1. **Безопасность**: Не публикуйте токен бота в публичных репозиториях
2. **Ограничения**: Mini App работает только в Telegram
3. **Производительность**: Оптимизируйте загрузку для мобильных устройств
4. **Тестирование**: Всегда тестируйте в реальном Telegram клиенте

## 📞 Поддержка

При возникновении проблем:
1. Проверьте консоль браузера
2. Убедитесь в правильности настройки бота
3. Проверьте доступность URL в Telegram
4. Обратитесь к документации Telegram Bot API
