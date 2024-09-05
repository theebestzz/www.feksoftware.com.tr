interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center max-md:px-4">
      <h1 className="text-3xl font-semibold md:text-5xl">{title}</h1>
      {subtitle && <p className="max-w-2xl text-sm md:text-base">{subtitle}</p>}
    </div>
  );
}
