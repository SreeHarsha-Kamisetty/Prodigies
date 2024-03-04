import { Carousel as FlowbiteCarousel } from "flowbite-react";

const Carousel = () => {
  return (
    <div className=" sm:h-64 lg:h-[30rem] shadowImg object-cover">
      <FlowbiteCarousel>
        <img
          src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          src="https://images.pexels.com/photos/5638333/pexels-photo-5638333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
