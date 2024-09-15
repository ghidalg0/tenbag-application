import LanguageToggle from "../lang/language-toggle";
import { ModeToggle } from "../theme/mode-toggle";
import { SettingsButton } from "./SettingsButton";

export const DashboardControls = () => {
  return (
    <div className="w-full flex gap-4 justify-end h-16 absolute top-0 items-center pe-16">
      <SettingsButton />
      <ModeToggle />
      <LanguageToggle />
    </div>
  );
};
