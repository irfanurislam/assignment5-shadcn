import useTitle from "@/hooks/useTitle";

import eventImg1 from "../../assets/eventimg/img1.png";
import eventImg2 from "../../assets/eventimg/img2.png";
import eventImg3 from "../../assets/eventimg/img3.png";
import eventImg4 from "../../assets/eventimg/img4.png";
import eventImg5 from "../../assets/eventimg/img5.png";
import eventImg6 from "../../assets/eventimg/img6.png";
import EventCard from "./EvenCard";
const EventItems = () => {
  const titleProps = {
    heading: "Event Items",
    subHeading:
      "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem",
  };

  const events = [
    {
      image: eventImg1,
      eventName: "Event item - 1",
    },
    {
      image: eventImg2,
      eventName: "Event item - 2",
    },
    {
      image: eventImg3,
      eventName: "Event item - 3",
    },
    {
      image: eventImg4,
      eventName: "Event item - 4",
    },
    {
      image: eventImg5,
      eventName: "Event item - 5",
    },
    {
      image: eventImg6,
      eventName: "Event item - 6",
    },
  ];

  return (
    <div>
      <div>{useTitle(titleProps)}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 place-items-center lg:grid-rows-2 gap-5  lg:max-h-[576px] h-full ">
        {events.map((event, index) => (
          <EventCard index={index} event={event} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventItems;
