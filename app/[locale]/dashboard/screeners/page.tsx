import { verifyPermission } from "@/actions/authenticatedPage";
import { PageLayout } from "@/components/custom/PageLayout";
import { PageTitle } from "@/components/custom/PageTitle";

export default async function ScreenerPage() {
  await verifyPermission();

  // const url = process.env.BACK_URL + "/users/current-user";
  // const response = await fetch(url, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${authToken}`,
  //   },
  // });
  // const user = await response.json();

  return (
    <PageLayout>
      <PageTitle title={`Screeners`} />
    </PageLayout>
  );
}
