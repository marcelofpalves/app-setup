import db from '../resources/db'

const { productsById } = db

export default {
  async getProductById(id) {
    return productsById[id]
  },

  async getProducts() {
    return Object.keys(productsById).map(key => {
      return productsById[key]
    })
  }
}
