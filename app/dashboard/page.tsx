import { verifyPermission } from "@/actions/authenticatedPage";

export default function DashboardPage() {
  const authToken = verifyPermission();
  console.log(authToken);

  return <div className="py-16 w-full"></div>;
}
