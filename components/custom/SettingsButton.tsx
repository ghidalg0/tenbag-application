import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

export const SettingsButton = () => {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/dashboard/settings">
        <Settings className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Settings className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Link>
    </Button>
  );
};
