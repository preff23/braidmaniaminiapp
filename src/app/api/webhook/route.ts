import { NextRequest, NextResponse } from 'next/server';
import { BOT_CONFIG } from '@/config/bot';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Обработка входящих сообщений
    if (body.message) {
      const { message } = body;
      const chatId = message.chat.id;
      const text = message.text;
      
      // Если пользователь отправил команду /start
      if (text === '/start') {
        const response = await fetch(`https://api.telegram.org/bot${BOT_CONFIG.token}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: 'Добро пожаловать в Braids Pro! 🎉\n\nИспользуйте кнопки ниже для навигации:',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '📚 Главная',
                    web_app: { url: `${BOT_CONFIG.webAppUrl}?startapp=main` }
                  }
                ],
                [
                  {
                    text: '💡 Полезное',
                    web_app: { url: `${BOT_CONFIG.webAppUrl}?startapp=useful` }
                  }
                ]
              ]
            }
          })
        });
        
        if (!response.ok) {
          console.error('Failed to send message to Telegram');
        }
      }
    }
    
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Webhook endpoint is working' });
}
