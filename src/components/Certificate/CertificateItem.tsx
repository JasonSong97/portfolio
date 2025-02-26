const CertificateItem = ({
  name,
  date,
  organizer,
}: {
  name: string;
  date: string;
  organizer: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-row items-center gap-2">
        <h4>{name}</h4>
        <span className="text-gray-400">{organizer} | {date}</span>
      </div>
    </div>
  );
};

export default CertificateItem;
