import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIBvI2SgNx4JZ8WjPqaBpaLTmx5w8quGk",
    authDomain: "blog-project-c8657.firebaseapp.com",
    projectId: "blog-project-c8657",
    storageBucket: "blog-project-c8657.appspot.com",
    messagingSenderId: "278663588965",
    appId: "1:278663588965:web:e4f6774780a891880a2a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };