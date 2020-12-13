// import axios from 'axios'
import { Post } from '../models/Posts'

class PostsService {
  static findAll (): Post[] {
    // should call a microservice to retrive the data...
    return [
      {
        title: 'Hello world',
        author: 'Emerson Lopes'
      },
      {
        title: 'This is the second title',
        author: 'Unknown'
      }
    ]
  }

  static create ({ title, author }: Post): Post {
    // should call a microservice to create a post
    return new Post(title, author)
  }
}

export default PostsService
