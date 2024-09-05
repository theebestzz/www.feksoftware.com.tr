import { Navbar } from "@/components/layout/navbar";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  return (
    <header className="relative flex w-full items-center justify-center">
      <Navbar />
      <MobileMenu />
    </header>
  );
}
