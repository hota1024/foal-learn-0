import { Context, Get, HttpResponseOK, Post, Delete, HttpResponseNotFound, HttpResponseNoContent } from '@foal/core'
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

  @Post('/todos')
  async postTodo(ctx: Context) {
    const todo = new Todo()
    todo.text = ctx.request.body.text

    await getRepository(Todo).save(todo)

    return new HttpResponseOK(todo)
  }

  @Delete('/todos/:id')
  async deleteTodo(ctx: Context) {
    const todo = await getRepository(Todo).findOne({
      id: +ctx.request.params.id
    })

    if (!todo) {
      return new HttpResponseNotFound()
    }

    await getRepository(Todo).remove(todo)

    return new HttpResponseNoContent()
  }
}
