"use server";

import { redirect } from "next/navigation";
import { getAuthCookie } from "./cookies";

export const verifyPermission = async () => {
  const authToken = await getAuthCookie();
  if (!authToken?.value) {
    redirect("/login");
  }
  return authToken.value;
};
