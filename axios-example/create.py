from pathlib import Path
import zipfile

# Create project structure
project_dir = Path("/mnt/data/morgan-logger-example")
src_dir = project_dir / "src"
src_dir.mkdir(parents=True, exist_ok=True)

# tsconfig.json
(project_dir / "tsconfig.json").write_text("""
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "rootDir": "src",
    "outDir": "dist"
  }
}
""".strip(), encoding="utf-8")

# package.json
(project_dir / "package.json").write_text("""
{
  "name": "morgan-logger-example",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  },
  "dependencies": {
    "express": "^4.18.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/morgan": "^1.9.4",
    "typescript": "^5.0.0",
    "ts-node": "^10.9.1"
  }
}
""".strip(), encoding="utf-8")

# src/index.ts
(src_dir / "index.ts").write_text("""
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

// כתיבה לקובץ לוג בנוסף ללוג על המסך
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('dev')); // למסך
app.use(morgan('combined', { stream: logStream })); // לקובץ

app.get('/', (req, res) => {
  res.send('Hello Morgan Logger!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
""".strip(), encoding="utf-8")

# Create zip file
zip_path = "/mnt/data/morgan-logger-example.zip"
with zipfile.ZipFile(zip_path, "w") as zipf:
    for file in project_dir.rglob("*"):
        zipf.write(file, file.relative_to(project_dir.parent))

zip_path
