"use server";

import { auth, db } from "@/firebase/client";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { UserProfile } from "@/types";

export async function signInWithEmail(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      return { success: true, user: userDoc.data() as UserProfile };
    }
    
    return { success: false, error: "User profile not found" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function signUpWithEmail(
  email: string, 
  password: string, 
  displayName: string
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    const profile: UserProfile = {
      uid: user.uid,
      email: user.email ?? email,
      displayName: displayName,
      provider: "email",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    await setDoc(doc(db, "users", user.uid), profile);
    
    return { success: true, user: profile };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function signOutUser() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getUserProfile(uid: string) {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      return { success: true, user: userDoc.data() as UserProfile };
    }
    return { success: false, error: "User not found" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>) {
  try {
    await setDoc(doc(db, "users", uid), {
      ...data,
      updatedAt: new Date().toISOString(),
    }, { merge: true });
    
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
