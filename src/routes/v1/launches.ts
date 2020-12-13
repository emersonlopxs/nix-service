import { Router } from 'express'
import LaunchesService from '../../services/LaunchesService'

const router = Router()

router.get('/', async (request, response) => {
  try {
    const launches = await LaunchesService.getAllLaunches()
    console.log('launches -> ', launches)

    return response.status(200).json({ launches })
  } catch (error) {
    console.log('error -> ', error)
    return response.status(500).json({ error })
  }
})

export default router
