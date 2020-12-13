import axios from 'axios'

export default class LaunchesService {
  static async getAllLaunches () {
    try {
      const { data } = await axios.get(
        'https://api.spacexdata.com/v4/launches/latest'
      )
      return data
    } catch (error) {
      return {
        status: 500,
        error: error
      }
    }
  }
}
