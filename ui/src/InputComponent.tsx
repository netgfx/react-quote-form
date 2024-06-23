export const InputComponent = ({
  type,
  objRef,
}: {
  type: string;
  objRef: any;
}) => {
  const getPlaceholderByType = () => {
    switch (type) {
      case "name":
        return "enter your name";
      case "origin":
        return "enter your company name";
      case "email":
        return "your@email.com";
      default:
        return "enter your name";
    }
  };

  return (
    <label htmlFor="inp" className={`inp ${type === "email" ? "email" : ""}`}>
      <input
        ref={objRef}
        type={type === "email" ? "email" : "text"}
        placeholder={getPlaceholderByType()}
        pattern=".{6,}"
        required
      />
      <svg
        width={type === "email" ? "300px" : "195px"}
        height="18px"
        viewBox={type === "email" ? "0 0 300 18" : "0 0 195 18"}
        className="border"
      >
        <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
      </svg>
      <svg width="14px" height="12px" viewBox="0 0 14 12" className="check">
        <path d="M1 7 5.5 11 L13 1"></path>
      </svg>
    </label>
  );
};
