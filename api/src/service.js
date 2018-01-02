import admin from 'firebase-admin'
import db from '../resources/db'
import serviceAccount from '../resources/firebase.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://setup-9a3f2.firebaseio.com'
})

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
