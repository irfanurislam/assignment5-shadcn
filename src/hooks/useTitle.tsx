const useTitle = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-6xl font-extrabold text-black">{heading}</h1>
        <p className=" pt-7 text-lg text-[#566B84] max-w-[80ch]">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default useTitle;
