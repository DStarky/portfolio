import { twMerge } from 'tailwind-merge';

import TechIcon from './TechIcon';

const ToolboxItems = ({
  items,
  className = '',
}: {
  items: { title: string; iconType: React.ElementType }[];
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className,
      )}
    >
      <div className="flex flex-none gap-6 py-0.5">
        {items.map(item => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ToolboxItems;
