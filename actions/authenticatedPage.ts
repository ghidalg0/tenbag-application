"use server";

import { redirect } from "@/i18n/routing";
import { getAuthCookie } from "./cookies";

export const verifyPermission = async () => {
  const authToken = await getAuthCookie();
  if (!authToken?.value) {
    redirect("/login");
  }
  return authToken?.value;
};
