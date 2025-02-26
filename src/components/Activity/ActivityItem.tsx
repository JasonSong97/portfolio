const ActivityItem = ({
  name,
  period,
  description,
}: {
  name: string;
  period: string[];
  description: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-row items-center gap-2">
        <h4>{name}</h4>
        <span className="text-gray-400">{`${description}`} | {`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
      </div>
      
    </div>
  );
};

export default ActivityItem;
