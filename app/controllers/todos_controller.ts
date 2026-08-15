import type { HttpContext } from '@adonisjs/core/http'
import { completeValidator, createValidator } from '#validators/todo'
import Todo from '#models/todo'

export default class TodosController {
  /**
   * Display a list of resource
   */
  async index({ view, auth }: HttpContext) {
    const todos = await auth.user!.related('todos').query().orderBy('createdAt', 'desc')
    return view.render('pages/todos', { todos })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/todos/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(createValidator)
    await Todo.create({
      title: data.title,
      description: data.description,
      userId: auth.user!.id,
      completed: false,
    })
    response.redirect('/todos')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, auth, response, view }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)

    this.assertIsOwner(auth, response, todo)

    return view.render('pages/todos/edit', { todo })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, auth }: HttpContext) {
    const data = await request.validateUsing(completeValidator)
    const todo = await Todo.findOrFail(params.id)

    this.assertIsOwner(auth, response, todo)

    todo.title = data.title
    todo.description = data.description
    todo.completed = data.completed

    await todo.save()

    response.redirect('/todos')
  }

  /**
   * Delete record
   */
  async destroy({ params, auth, response }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)
    this.assertIsOwner(auth, response, todo)

    response.redirect('/todos')
  }

  private assertIsOwner(auth: HttpContext['auth'], response: HttpContext['response'], todo: Todo) {
    if (todo.userId !== auth.user!.id) {
      response.forbidden()
    }
  }
}
