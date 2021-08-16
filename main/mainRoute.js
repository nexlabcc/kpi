import path from 'path';
import { Router } from 'express'
import { main, getMenu } from './mainController.js'
const router = Router()

router.view = path.resolve()

router.get('/', main)
router.get('/api/main/menu/', getMenu)

export default router