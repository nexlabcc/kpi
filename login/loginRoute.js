import { Router } from 'express' // Импорт функций из файла
import { login } from './loginController.js' // Импорт функций из файла
const router = Router()

router.get('/login', login) // Авторизация

export default router