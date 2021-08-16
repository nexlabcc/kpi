/*
npm i express consolidate swig
npm i -D nodemon

"type": "module",
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
},

npm run dev
export PORT=3000 && node index
 */
import express from 'express' // Чтобы работал import, надо в package.json разместить "type": "module",
import path from 'path' // Обработка путей
import consolidate from 'consolidate'; // Для шаблонизаторов (например для Twig)

// Инициализация фреймворка express
const app = express()

// Роутеры
import mainRoute from './mainRoute.js'
app.use(mainRoute)

const __dirname = path.resolve() // Путь к текущей папке
const PORT = process.env.PORT ?? 3000 // export PORT=3000 && node index - команда запуска файла index с параметром PORT = 3000

// views
app.set('view engine', 'html') // Указание самого шаблонизатора
app.set('views', path.resolve(__dirname, 'views')) // Путь к директории, в которой находятся шаблоны
app.engine('html', consolidate.swig)

app.set('twig options', {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.use(express.static(path.resolve(__dirname, './www'))) // Публичные страницы
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Server запущен на порту ${PORT}`)
})