import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('ticket_id').unsigned().references('id').inTable('tickets').onDelete('CASCADE').notNullable()
      table.string('sender_type').notNullable()
      table.integer('sender_id').unsigned().references('id').inTable('users').nullable()
      table.text('text').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}