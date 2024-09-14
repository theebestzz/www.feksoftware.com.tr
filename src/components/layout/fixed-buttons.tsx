import { Preferences } from "@/components/layout/preferences";
import { Whatsapp } from "@/components/layout/whatsapp";

export function FixedButtons() {
  return (
    <div className="relative z-10">
      <Preferences />
      <Whatsapp />
    </div>
  );
}
