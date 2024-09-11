"use server";

import { cookies } from "next/headers";

export async function createAuthCookie(data: string) {
  cookies().set("authToken", data);
}

export async function getAuthCookie() {
  return cookies().get("authToken");
}

export async function deleteAuthCookie() {
  cookies().delete("authToken");
}
