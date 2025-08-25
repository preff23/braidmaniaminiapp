interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-text-primary text-2xl font-bold mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-text-secondary text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}
