"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { GlobeIcon } from "lucide-react";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageToggle");

  const handleChange = (language: string) => {
    router.replace("/" + language + pathname.replace(/^\/[a-z]{2}/, ""));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-90 transition-all dark:-rotate-90 dark:scale-0" />
          <GlobeIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-90" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChange("en")}>
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange("fr")}>
          {t("french")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
