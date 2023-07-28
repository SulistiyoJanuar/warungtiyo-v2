import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBd28noak1HVIS3a_pneN-lZamKmZITW2M",
  authDomain: "warung-tiyo.firebaseapp.com",
  databaseURL: "https://warung-tiyo-default-rtdb.firebaseio.com",
  projectId: "warung-tiyo",
  storageBucket: "warung-tiyo.appspot.com",
  messagingSenderId: "80617665580",
  appId: "1:80617665580:web:86a4dd7948ba38b0cacd89",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
