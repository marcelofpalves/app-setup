import db from '../resources/db'

export default {
  async getProductById(id) {
    return db.productsById[id]
  }
}
