"use server";
import { signOut } from "@/services/auth";

export async function signOutAction() {
  return signOut({ redirectTo: "/" });
}