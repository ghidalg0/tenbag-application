"use client";

import { deleteAuthCookie } from "@/actions/cookies";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const tabs = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/investments", label: "Investments" },
  { href: "/screeners", label: "Screeners" },
  { href: "/forum", label: "Forum" },
];

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const logout = async () => {
    await deleteAuthCookie();
    router.push("/login");
  };

  return (
    <nav className="pt-8 h-screen border-e-2 w-[240px] fixed top-0 px-4 pb-4 flex flex-col justify-between">
      <h1 className="text-center font-black text-4xl">10Bag</h1>
      <div className="grow space-y-2 flex flex-col pt-16">
        {tabs.map((tab) => {
          const isActive = tab.href === pathname;

          if (isActive) {
            return (
              <Button key={tab.href} asChild>
                <Link href={tab.href}>{tab.label}</Link>
              </Button>
            );
          }
          return (
            <Button key={tab.href} asChild variant="secondary">
              <Link href={tab.href}>{tab.label}</Link>
            </Button>
          );
        })}
      </div>
      <Button variant="destructive" onClick={logout}>
        Log out
      </Button>
    </nav>
  );
};
