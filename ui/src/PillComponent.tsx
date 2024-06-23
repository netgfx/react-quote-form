export const PillsComponent = ({
  title,
  setSelected,
  selected,
}: {
  title: string;
  setSelected: (title: string) => void;
  selected: string | null;
}) => {
  return (
    <div
      className={`pills ${selected === title ? "selected" : ""}`}
      tabIndex={0}
      onClick={(e: any) => setSelected(title)}
    >
      {title}
    </div>
  );
};
