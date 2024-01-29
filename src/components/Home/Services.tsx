import useTitle from "@/hooks/useTitle";

import ServiceCard from "./ServiceCard";
const Services = () => {
  const titleProps = {
    heading: "Our Services",
    subHeading:
      "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.",
  };
  return (
    <div>
      <div>{useTitle(titleProps)}</div>

      {/*<div className="grid grid-cols-3">
         <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md ">
          <img className="w-full h-48 object-cover" src={card1} alt="nice" />
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2">Corporate event</h2>
            <ul className="list-disc">
              <li>One day pas access all lecture</li>
              <li>One day pas access all lecture</li>
              <li>One day pas access all lecture</li>
              <li>One day pas access all lecture</li>
              <li>One day pas access all lecture</li>
            </ul>
          </div>
        </div> 
      </div>*/}

      <div className="mt-16">
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
