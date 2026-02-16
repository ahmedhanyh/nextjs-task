"use server";
import { signIn } from "@/services/auth";

export async function signInWithGoogle() {
  return signIn("google", { redirectTo: "/" });
}

export async function signInWithFacebook() {
  return signIn("facebook", { redirectTo: "/" });
}