import { Router } from 'express'
import posts from './v1/posts'
// import axios from 'axios'

const router = Router()

router.use('/posts', posts)

export default router
