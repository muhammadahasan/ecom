import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Globe, MessageSquareText, Star } from "lucide-react";
import { GrCurrency } from "react-icons/gr";

const data = [
  {
    icon: GrCurrency,
    title: "Premium Experiences",
    description:
      "Explore top-rated activities at the best prices, from popular tours to hidden gems.",
  },
  {
    icon: MessageSquareText,
    title: "24/7 Support",
    description:
      "Get immediate assistance anytime with our 24/7 live chat, ensuring instant help for all your questions.",
  },
  {
    icon: Globe,
    title: "Worldwide Tours",
    description:
      "Simplify your bookings. Earn and redeem miles effortlessly with every transaction.",
  },
  {
    icon: Star,
    title: "Travel with Confidence",
    description:
      "Trusted experiences. Explore top-rated activities with confidence through verified reviews and high ratings.",
  },
];

const ChooseUs = () => {
  return (
    <section className="py-10">
      <div className="mx-auto w-full px-4 container">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        <div className="relative mt-5 ">
          <Carousel className="w-full ">
            <CarouselContent className="-ml-2 w-full space-x-2 py-4 px-4">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-[24.8%] flex flex-col lg:flex-row items-start gap-3 w-full border border-gray-200 rounded-lg p-4 shadow-md"
                >
                  <div className="p-2 bg-gradient-to-l from-[#C4C2C7] via-[#7285B3] to-[#274690] rounded-full">
                    <item.icon className="w-4 h-4 text-white file:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm">{item.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
