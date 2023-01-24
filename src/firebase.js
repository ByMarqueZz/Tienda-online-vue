import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCN-EWUsaNvMyZTER3gBOCo3Pl9qXuuRiQ",
    authDomain: "tienda-online-61b16.firebaseapp.com",
    projectId: "tienda-online-61b16",
    storageBucket: "tienda-online-61b16.appspot.com",
    messagingSenderId: "1072922687411",
    appId: "1:1072922687411:web:727d755dff2855bc4b3dc6",
    measurementId: "G-7TTC4ZVBXS"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

// here we can export reusable database references
// export const todosRef = collection(db, 'todos')