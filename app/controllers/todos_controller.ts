import type { HttpContext } from '@adonisjs/core/http'
import { createValidator } from '#validators/todo'
import Todo from '#models/todo'

export default class TodosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth }: HttpContext) {
    const data = await request.validateUsing(createValidator)
    await Todo.create({
      title: data.title,
      description: data.description,
      userId: auth.user!.id,
    })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
