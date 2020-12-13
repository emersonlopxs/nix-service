import { Router } from 'express'
import PostsService from '../../services/PostsService'

const router = Router()

router.get('/', async (request, response) => {
  try {
    const posts = PostsService.findAll()
    return response.json(posts)
  } catch (error) {
    console.log('error')
  }
})

router.post('/', async (request, response) => {
  try {
    const { body } = request
    const post = PostsService.create(body)
    return response.json(post)
  } catch (error) {
    console.log('error')
  }
})

export default router
