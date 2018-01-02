import admin from 'firebase-admin'
import serviceAccount from '../../resources/firebase.json'
import data from './sample-data.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://setup-9a3f2.firebaseio.com'
})

let db = admin.firestore()
let productsCollection = db.collection('products')

Object.keys(data.productsById).forEach(key => {
  const doc = productsCollection.doc(key)
  const product = data.productsById[key]
  doc.set(product)
})
