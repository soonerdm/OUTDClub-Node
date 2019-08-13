'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CmsEntriesSchema extends Schema {
  up () {
    this.create('cms_entries', (table) => {
      table.increments()
      table.string('page_name').notNullable()
      table.text('page_body', 'longtext')
      table.integer('rank')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('cms_entries')
  }
}

module.exports = CmsEntriesSchema
