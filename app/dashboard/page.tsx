import { verifyPermission } from "@/actions/authenticatedPage";
import { Dashboard } from "@/modules/dashboard/Dashboard";
import { InvestmentRow } from "@/modules/dashboard/investments/InvestmentRow";
import { redirect } from "next/navigation";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const authToken = await verifyPermission();

  const powensUrl = process.env.BACK_URL + "/powens/webview";

  if (searchParams?.code) {
    const url =
      process.env.BACK_URL +
      `/powens/exchange-code?code=${searchParams.code}&connection_ids=${searchParams.connection_ids}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
    });
    const data = await response.json();

    if (data.success) {
      redirect("/dashboard");
    }
  }

  const investmentsUrl = process.env.BACK_URL + "/powens/investments";
  const investmentsResponse = await fetch(investmentsUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  });
  const investmentsData = await investmentsResponse.json();

  // const connectionsUrl = process.env.BACK_URL + "/powens/connections";
  // const connectionsResponse = await fetch(connectionsUrl, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${authToken}`,
  //   },
  //   cache: "no-store",
  // });
  // const connectionsData = await connectionsResponse.json();

  return (
    <div className="py-16 w-full">
      <Dashboard powensUrl={powensUrl} authToken={authToken} />
      {investmentsData?.investments?.length > 0 && (
        <div className="space-y-2 mt-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {investmentsData?.investments?.map((investment: any) => {
            return (
              <InvestmentRow investment={investment} key={investment.id} />
            );
          })}
        </div>
      )}
    </div>
  );
}
