"use server";

import { revalidatePath } from "next/cache";

export const revalidateThisPath = (path: string) => {
  revalidatePath(path);
};
