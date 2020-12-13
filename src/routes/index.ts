import { Router } from 'express'
import launches from './v1/launches'

const router = Router()

router.use('/', launches)

export default router
