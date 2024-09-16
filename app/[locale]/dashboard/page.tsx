import { verifyPermission } from "@/actions/authenticatedPage";
import { PageLayout } from "@/components/custom/PageLayout";
import { PageTitle } from "@/components/custom/PageTitle";
import { getTranslations } from "next-intl/server";

export default async function DashboardPage() {
  const authToken = await verifyPermission();
  const t = await getTranslations("Dashboard");

  const url = process.env.BACK_URL + "/users/current-user";
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  const user = await response.json();

  return (
    <PageLayout>
      <PageTitle title={t("title", { name: user.username })} />
    </PageLayout>
  );
}
