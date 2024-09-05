import { BackgroundBeams } from "@/components/ui/background-beams";
import { siteConfig } from "@/lib/site-config";

export function AboutBeamsBlock() {
  return (
    <div className="relative flex h-[20rem] w-full flex-col items-center justify-center rounded-md bg-primary-foreground/25 antialiased dark:bg-primary-foreground/25 md:h-[30rem]">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center font-sans text-4xl font-bold text-transparent dark:to-primary-foreground/10 md:text-7xl">
          {siteConfig.title}
        </h1>
        <p></p>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          Yazılım hizmetlerimiz, işletmelerin ihtiyaç duyduğu dijital dönüşüm
          çözümlerini sunarak operasyonel verimliliği artırır, müşteri
          deneyimini iyileştirir ve büyümeyi hızlandırır. Gelişmiş
          teknolojilerle donatılmış çözümlerimiz, iş süreçlerinizi optimize
          ederken inovasyon ve rekabet avantajı sağlamanıza yardımcı olur.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
