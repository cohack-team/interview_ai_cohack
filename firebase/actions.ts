"use server";

import { adminAuth, adminDb } from "@/firebase/admin";
import { UserProfile } from "@/types";

export async function createUser(data: UserProfile) {
  try {
    await adminDb.collection("users").doc(data.uid).set(data);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getUser(uid: string) {
  try {
    const userDoc = await adminDb.collection("users").doc(uid).get();
    if (userDoc.exists) {
      return { success: true, user: userDoc.data() as UserProfile };
    }
    return { success: false, error: "User not found" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateUser(uid: string, data: Partial<UserProfile>) {
  try {
    await adminDb.collection("users").doc(uid).update({
      ...data,
      updatedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteUser(uid: string) {
  try {
    await adminAuth.deleteUser(uid);
    await adminDb.collection("users").doc(uid).delete();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function verifyToken(token: string) {
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return { success: true, uid: decodedToken.uid };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
