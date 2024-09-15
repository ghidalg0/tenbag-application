"use client";

import { deleteAuthCookie } from "@/actions/cookies";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import {
  ChartCandlestick,
  EyeIcon,
  LayoutDashboardIcon,
  LogOut,
  MessageCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

  const logout = async () => {
    await deleteAuthCookie();
    router.push("/login");
  };

  const tabs = [
    {
      href: "/dashboard",
      label: t("dashboard"),
      icon: <LayoutDashboardIcon size={20} />,
    },
    {
      href: "/dashboard/investments",
      label: t("investments"),
      icon: <ChartCandlestick size={20} />,
    },
    {
      href: "/dashboard/screeners",
      label: t("screeners"),
      icon: <EyeIcon size={20} />,
    },
    {
      href: "/dashboard/forum",
      label: t("forum"),
      icon: <MessageCircle size={20} />,
    },
  ];

  return (
    <nav className="pt-8 h-screen border-e-2 w-[240px] fixed top-0 px-4 pb-4 flex flex-col justify-between">
      <h1 className="text-center font-black text-4xl">10Bag</h1>
      <div className="grow space-y-2 flex flex-col pt-16">
        {tabs.map((tab) => {
          const isActive = tab.href === pathname.replace(/^\/[a-z]{2}/, "");

          console.log(pathname.split("/"));

          if (isActive) {
            return (
              <Button key={tab.href} asChild>
                <Link href={tab.href}>
                  <div className="w-full flex justify-sart gap-4 items-center">
                    {tab.icon}
                    <p>{tab.label}</p>
                  </div>
                </Link>
              </Button>
            );
          }
          return (
            <Button key={tab.href} asChild variant="secondary">
              <Link href={tab.href}>
                <div className="w-full flex justify-sart gap-4 items-center">
                  {tab.icon}
                  <p>{tab.label}</p>
                </div>
              </Link>
            </Button>
          );
        })}
      </div>
      <Button variant="destructive" onClick={logout}>
        <div className="w-full flex justify-sart gap-4 items-center">
          <LogOut size={20} />
          {t("logout")}
        </div>
      </Button>
    </nav>
  );
};
