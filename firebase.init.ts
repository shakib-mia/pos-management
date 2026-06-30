// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCNzrCtL80HVeeehA2YYZur61ZOKpXD3aE",
	authDomain: "pos-management-dfa31.firebaseapp.com",
	projectId: "pos-management-dfa31",
	storageBucket: "pos-management-dfa31.firebasestorage.app",
	messagingSenderId: "546339953053",
	appId: "1:546339953053:web:3829036d65dcb4f5897774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default auth;
