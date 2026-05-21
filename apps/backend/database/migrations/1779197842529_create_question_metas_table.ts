import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'question_metas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('ticket_id').unsigned().references('id').inTable('tickets').onDelete('CASCADE').unique().notNullable()
      table.text('question').notNullable()
      table.json('choices').notNullable()
      table.text('hint').notNullable()
      table.text('solution').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}