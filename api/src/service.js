import admin from 'firebase-admin'
import dab from '../resources/db'
import serviceAccount from '../resources/firebase.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://setup-9a3f2.firebaseio.com'
})

const { productsById } = dab

const db = admin.firestore()
const productsCollection = db.collection('products')

async function mapAsync(fn, collection) {
  const xs = []

  collection.forEach(item => {
    const processed = fn(item)
    console.log(processed)
    xs.push(processed)
  })

  return Promise.all(xs)
}

export default {
  async getProductById(id) {
    const doc = await productsCollection.doc(id).get()
    return doc.data()
  },

  async getProducts() {
    const snapshot = await productsCollection.get()
    return mapAsync(async doc => doc.data(), snapshot)
  }
}
