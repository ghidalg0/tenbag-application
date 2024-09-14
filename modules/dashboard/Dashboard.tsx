"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface DashboardProps {
  powensUrl: string;
  authToken: string;
}

export const Dashboard = ({ powensUrl, authToken }: DashboardProps) => {
  const router = useRouter();
  const handlePowens = async () => {
    const response = await fetch(powensUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
    });
    const data = await response.json();

    const { webviewUrl } = data;

    router.push(webviewUrl);
  };

  return (
    <Button onClick={handlePowens} size="sm">
      Manage Accounts
    </Button>
  );
};
