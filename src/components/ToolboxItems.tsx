import TechIcon from './TechIcon';

const ToolboxItems = ({
  items,
}: {
  items: { title: string; iconType: React.ElementType }[];
}) => {
  return (
    <div>
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
  );
};
export default ToolboxItems;
