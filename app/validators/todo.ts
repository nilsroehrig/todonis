import vine from '@vinejs/vine'

export const createValidator = vine.create({
  title: vine.string(),
  description: vine.string().nullable(),
})

export const completeValidator = vine.create({
  title: vine.string(),
  description: vine.string().nullable(),
  completed: vine.boolean(),
})
