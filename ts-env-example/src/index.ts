import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const appName = process.env.APP_NAME || 'Default App';
const debug = process.env.DEBUG === 'true';

console.log(`🚀 Starting ${appName} on port ${port}`);
if (debug) {
  console.log("🛠 Debug mode is ON");
}