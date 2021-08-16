/*
npm i express consolidate swig
npm i -D nodemon
"scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
npm run dev
export PORT=3000 && node index
 */
import express from 'express' // Чтобы работал import, надо в package.json разместить "type": "module",
import path from 'path' // Обработка путей

// Инициализация фреймворка express
const app = express()

// Роутеры
import mainRoute from './main/mainRoute.js'
app.use(mainRoute)
import loginRoute from './login/loginRoute.js'
app.use(loginRoute)

const __dirname = path.resolve() // Путь к текущей папке
const PORT = process.env.PORT ?? 3000 // export PORT=3000 && node index - команда запуска файла index с параметром PORT = 3000

app.use(express.static(path.resolve(__dirname, './www'))) // Публичные страницы
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Server запущен на порту ${PORT}`)
})