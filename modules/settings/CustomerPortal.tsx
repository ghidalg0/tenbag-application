"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export const CustomerPortal = ({ handlePortal }: { handlePortal: any }) => {
  const router = useRouter();
  const handle = async () => {
    const data = await handlePortal();
    if (!data.error) {
      router.push(data.url);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>
            Manage your subscription, payment methods and invoices
          </CardDescription>
        </div>

        <Button variant="outline" size="sm" onClick={handle}>
          Manage
        </Button>
      </CardHeader>
    </Card>
  );
};
