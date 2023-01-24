import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAxnqgOyamTRwsVSRxc3V_sU3zmJ_j-pj8",
    authDomain: "notas-vue-9fc62.firebaseapp.com",
    projectId: "notas-vue-9fc62",
    storageBucket: "notas-vue-9fc62.appspot.com",
    messagingSenderId: "439187656732",
    appId: "1:439187656732:web:33ee12b8acb16809d08fd9",
    measurementId: "G-8369EJ054G"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

// here we can export reusable database references
// export const todosRef = collection(db, 'todos')