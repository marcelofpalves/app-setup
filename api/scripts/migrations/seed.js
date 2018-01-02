import admin from 'firebase-admin'
import serviceAccount from '../../resources/firebase.json'
import data from './sample-data.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://setup-9a3f2.firebaseio.com'
})

let db = admin.database()
let productsRef = db.ref('products')

productsRef.set(data.productsById, err => {
  if (err) {
    console.log('Could not seed the dabase.', err.message)
  } else {
    console.log('Thank you. The database was seeded.')
  }
})
