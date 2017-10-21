import db from '../resources/db'

console.log(db)

export default {
  async getProductById(id) {
    return db.productsById[id]
  }
}
