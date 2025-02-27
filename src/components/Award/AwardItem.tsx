import { AwardProps } from "@/types";

const AwardItem = ({ name, date, organizer, description }: AwardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-row items-center gap-2">
        <h5>{name}</h5>
        <span className="text-gray-400">{description} | {date}</span>
      </div>
    </div>
  );
};

export default AwardItem;
