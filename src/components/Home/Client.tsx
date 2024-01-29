import Vector from "../../assets/client-logo/Vector.png";
import Vector9 from "../../assets/client-logo/Companylogo.png";
import vector1 from "../../assets/client-logo/vector1.png";
import vector2 from "../../assets/client-logo/vector2.png";
import vector3 from "../../assets/client-logo/vector3.png";
import vector4 from "../../assets/client-logo/vector4.png";
import vector5 from "../../assets/client-logo/vector5.png";
import vector6 from "../../assets/client-logo/vector6.png";
import vector7 from "../../assets/client-logo/vector7.png";
import vector8 from "../../assets/client-logo/vector8.png";

const Client = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-black truncate">
          Our Valuable client
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10 justify-items-center">
        <img className="max-w-full" src={Vector9} alt="" />
        <img className="max-w-full" src={Vector} alt="" />
        <img className="max-w-full" src={vector1} alt="" />
        <img className="max-w-full" src={vector2} alt="" />
        <img className="max-w-full" src={vector3} alt="" />
        <img className="max-w-full" src={vector4} alt="" />
        <img className="max-w-full" src={vector5} alt="" />
        <img className="max-w-full" src={vector6} alt="" />
        <img className="max-w-full" src={vector7} alt="" />
        <img className="max-w-full" src={vector8} alt="" />
      </div>
    </div>
  );
};

export default Client;
