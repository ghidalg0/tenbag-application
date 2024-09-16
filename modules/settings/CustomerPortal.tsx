"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const CustomerPortal = ({ handlePortal }: { handlePortal: any }) => {
  const t = useTranslations("Settings.subscription");
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
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </div>

        <Button variant="outline" size="sm" onClick={handle}>
          {t("cta")}
        </Button>
      </CardHeader>
    </Card>
  );
};
