import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FixedButtons } from "@/components/layout/fixed-buttons";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <FixedButtons />
      <Footer />
    </>
  );
}
