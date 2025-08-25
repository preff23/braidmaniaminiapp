import LinkPill from './LinkPill';

interface SectionCardProps {
  title: string;
  items: Array<{ label: string; url: string }>;
  icon: string;
}

export default function SectionCard({ title, items, icon }: SectionCardProps) {
  return (
    <div className="hlb-card p-4 fade-in-up">
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-3 text-accent">
          {icon}
        </div>
        <h2 className="text-text-primary text-lg font-bold tracking-wide">
          {title}
        </h2>
      </div>
      
      <div className="space-y-2">
        {items.map((item, index) => (
          <LinkPill
            key={index}
            label={item.label}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
