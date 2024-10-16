const Container = require('./container')

class Document {
  #author = 'Anónimo'
  #date
  constructor (title, author, date) {
    this.title = title
    this.#author = author
    this.#date = date
  }

  getAuthor () {
    return this.#author
  }

  get author() {
    return 0
  }
}
module.exports = Document
