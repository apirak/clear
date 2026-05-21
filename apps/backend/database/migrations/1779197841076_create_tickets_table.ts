import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tickets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_id').unsigned().references('id').inTable('users').notNullable()
      table.text('question').notNullable()
      table.string('subject').notNullable()
      table.string('source').notNullable()
      table.string('status').notNullable().defaultTo('waiting')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}