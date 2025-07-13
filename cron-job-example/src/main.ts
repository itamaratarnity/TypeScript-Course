import cron from 'node-cron';

// כל דקה
cron.schedule('* * * * *', () => {
  console.log(`[${new Date().toLocaleTimeString()}] המשימה רצה כל דקה`);
});

// כל יום ב-9:00 בבוקר
cron.schedule('0 9 * * *', () => {
  console.log(`[${new Date().toLocaleTimeString()}] שליחת מייל יומית`);
});

// כל 10 שניות
setInterval(() => {
  console.log(`[${new Date().toLocaleTimeString()}] פעולה חוזרת כל 10 שניות`);
}, 10000);