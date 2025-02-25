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
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h4>{name}</h4>
        </div>
        <span>{date} / {organizer}</span>
      </div>
    </div>
  );
};

export default CertificateItem;
