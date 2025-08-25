import LinkPill from './LinkPill';

interface SectionCardProps {
  title: string;
  items: Array<{ label: string; url: string }>;
}

export default function SectionCard({ title, items }: SectionCardProps) {
  return (
    <div className="premium-card rounded-lg relative overflow-hidden fade-in-up">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      
      <div className="relative p-6">
        <h2 className="text-text-primary text-lg font-bold mb-4 tracking-wide">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <LinkPill
              key={index}
              label={item.label}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
