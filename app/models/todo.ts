import { TodoSchema } from '#database/schema'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import { belongsTo } from '@adonisjs/lucid/orm'

export default class Todo extends TodoSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
