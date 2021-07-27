import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseuURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)

export class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]()
    return firebaseApp.auth().signInWithPopup(authProvider)
  }
}
