// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instagram-clone-1ebe7.firebaseapp.com",
  projectId: "instagram-clone-1ebe7",
  storageBucket: "instagram-clone-1ebe7.appspot.com",
  messagingSenderId: "329826547579",
  appId: "1:329826547579:web:0668e0f384a0a905c6efde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write: if 
//         request.resource.size < 2 * 1024 * 1024 && 
//         request.resource.contentType.matches('image/.*')
//       }
//     }
//   }