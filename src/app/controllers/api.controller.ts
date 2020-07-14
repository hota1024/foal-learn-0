import { Context, Get, HttpResponseOK } from '@foal/core'
import { getRepository } from 'typeorm'
import { Todo } from '../entities'

export class ApiController {
  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!')
  }

  @Get('/todos')
  async getTodos() {
    const todos = await getRepository(Todo).find()

    return new HttpResponseOK(todos)
  }
}
