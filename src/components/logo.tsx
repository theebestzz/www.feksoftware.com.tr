import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <>
      <div className="font-semibold sm:text-base md:text-xl">
        {"</>"} {siteConfig.title}{" "}
      </div>
    </>
  );
}
