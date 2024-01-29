import card1 from "../../assets/card/card1.png";
import card2 from "../../assets/card/card2.png";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ServiceCard = () => {
  const cardsArray = [
    {
      id: 1,
      title: "Corporate event",
      image: card1,
      description: [
        "One day pass access all lecture",
        "One day pass access all lecture",
        "One day pass access all lecture",
        "One day pass access all lecture",
        "One day pass access all lecture",
      ],
    },
    {
      id: 2,
      title: "Corporate event",
      image: card2,
      description: [
        "One day pass access all lecture",
        "One day pass access all lecture",
        "One day pass access all lecture",
        "One day pass access all lecture",
        "One day pass access all lecture",
      ],
    },
    // Add more events as needed
  ];
  return (
    <div className="grid grid-cols-3">
      {cardsArray.map((card) => (
        <div
          key={card.id}
          className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md"
        >
          <img
            className="w-full h-48 object-cover"
            src={card.image}
            alt="Event"
          />
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
            <ul className="list-none">
              {card.description.map((desc, index) => (
                <li key={index} className="flex items-center">
                  {/* Unicode checkmark character */}

                  <span className="text-green-500 mr-2">&#x2713;</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>
            <h2 className="text-3xl font-bold mb-2">Wedding event</h2>
          </CardTitle>
          <CardDescription>
            {" "}
            <p className="text-lg max-w-[40ch] text-black mt-4">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut
              posuere felis arcu tellus tempus in in ultricies.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc">
            <li>One day pas access all lecture</li>
            <li>One day pas access all lecture</li>
            <li>One day pas access all lecture</li>
            <li>One day pas access all lecture</li>
            <li>One day pas access all lecture</li>
          </ul>
          <Button className="w-full">Check Full</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
