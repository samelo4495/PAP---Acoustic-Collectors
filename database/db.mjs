// import { initializeApp } from "firebase/app";
// import { config } from "dotenv"; config();
// import { getDatabase } from "firebase/database";
// import firebase from "firebase/compat/app";

// const { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } = process.env;

// const firebaseConfig = {
//     apiKey: apiKey,
//     authDomain: authDomain,             
//     projectId: projectId,       
//     storageBucket: storageBucket,
//     messagingSenderId: messagingSenderId,
//     appId: appId,
//     measurementId: measurementId,
// };

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);



import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCC90xOcarRg9jXhEqJM54VTNbeK1W90no",
  authDomain: "loja-de-vinis-5b933.firebaseapp.com",
  databaseURL: "https://loja-de-vinis-5b933-default-rtdb.firebaseio.com",
  projectId: "loja-de-vinis-5b933",
  storageBucket: "loja-de-vinis-5b933.firebasestorage.app",
  messagingSenderId: "309393763789",
  appId: "1:309393763789:web:0d3e34d6ceca20126ee884",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
