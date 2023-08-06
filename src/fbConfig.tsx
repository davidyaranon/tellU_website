import "firebase/compat/firestore";
import {
  addDoc, collection, deleteDoc,
  doc, getDoc, getDocs, getFirestore, increment, limit, orderBy,
  query, runTransaction, serverTimestamp, setDoc, startAfter,
  updateDoc, where, writeBatch, getCountFromServer, arrayUnion
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword, getAuth, indexedDBLocalPersistence,
  initializeAuth, sendPasswordResetEmail, signInWithEmailAndPassword,
  signOut, updateProfile, deleteUser, EmailAuthProvider, reauthenticateWithCredential,
} from "firebase/auth";

import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAHV2ukGyxwx_8wADQSd4QXV1rRiU93L44",
  databaseURL: "https://quantum-61b84-default-rtdb.firebaseio.com",
  authDomain: "quantum-61b84.firebaseapp.com",
  projectId: "quantum-61b84",
  storageBucket: "quantum-61b84.appspot.com",
  messagingSenderId: "461090594003",
  appId: "1:461090594003:web:5cb1cac4a16e9031140826",
  measurementId: "G-JRZ1RJ4P89",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;

export const db = getFirestore(app);
export const storage = getStorage();

/**
 * Sends password reset email in case user forgets password
 * 
 * @param {string} email email to send password reset instructions to
 * @returns {Promise<boolean>} whether the password reset was successful
 */
export const sendPasswordReset = async (email: string): Promise<boolean> => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

/**
 * @description Deletes user from Firebase Auth and all data from Firestore (/userInfo/{userUid})
 * TO-DO: Delete all user data from all Firestore paths
 * 
 * @param {string} email the email address of the user to be deleted
 * @param {string} pass the password of the user to be deleted
 * 
 * @returns {string | true} whether the deletion was successful or an error message.
 */
export const deleteUserDataAndAccount = async (email: string, pass: string): Promise<string | true> => {
  try {

    const res = await signInWithEmailAndPassword(auth, email, pass);

    if (!res || !res.user) {
      console.error("Could not sign in!");
      return "Something went wrong with this username/password combination";
    }

    const user = res.user;

    if (!email || !pass) {
      console.error("Email or password missing");
      return "Email or password missing";
    }

    const credential = EmailAuthProvider.credential(email, pass);
    try {
      await reauthenticateWithCredential(user, credential);

      const batch = writeBatch(db);
      const userDoc = doc(db, "userData", user.uid);
      batch.delete(userDoc);

      await deleteUser(user!).catch((err) => { console.log(err); return "Unable to delete from database, try again..." });
      await batch.commit().catch((err) => { console.log(err); });

      return true;

    } catch (err) {
      console.error(err);
      return "Password is incorrect";
    }

  } catch (err) {
    console.log(err);
    return "Something went wrong";
  }
};