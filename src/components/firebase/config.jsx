

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcecfowOpkfztfceyY0FaP0OBFZBik6dw",
  authDomain: "tierra-viva-firebase.firebaseapp.com",
  projectId: "tierra-viva-firebase",
  storageBucket: "tierra-viva-firebase.firebasestorage.app",
  messagingSenderId: "415722638731",
  appId: "1:415722638731:web:821c4119cb1950776e738e"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


