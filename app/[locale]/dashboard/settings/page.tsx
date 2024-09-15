import { verifyPermission } from "@/actions/authenticatedPage";
import { PageLayout } from "@/components/custom/PageLayout";
import { PageTitle } from "@/components/custom/PageTitle";
import { CustomerPortal } from "@/modules/settings/CustomerPortal";

export default async function SettingsPage() {
  const authToken = await verifyPermission();

  // const url = process.env.BACK_URL + "/users/current-user";
  // const response = await fetch(url, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${authToken}`,
  //   },
  // });
  // const user = await response.json();

  const handlePortal = async () => {
    "use server";
    const response = await fetch(process.env.BACK_URL + "/payments/portal", {
      headers: {
        Authorization: `Bearer ` + authToken,
      },
    });
    const data = await response.json();
    return data;
  };

  return (
    <PageLayout>
      <PageTitle title={`Settings`} />
      <CustomerPortal handlePortal={handlePortal} />
    </PageLayout>
  );
}
