const EducationItem = ({
  name,
  description,
  period,
}: {
  name: string;
  description: string;
  period: string[];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h4>{name}</h4>
        </div>
        <span className="whitespace-pre-wrap">{`${period[0]}${period[1] ? " - " + period[1] : ""}`} / {`${description}`}</span>
      </div>
    </div>
  );
};

export default EducationItem;
