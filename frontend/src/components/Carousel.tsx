import React from "react";
import { Carousel as FlowbiteCarousel } from "flowbite-react";

const Carousel = () => {
  return (
    <div className=" sm:h-64 lg:h-[35rem] ">
      <FlowbiteCarousel>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/2532005/pexels-photo-2532005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
        />
      </FlowbiteCarousel>
    </div>
  );
};

export default Carousel;
