import { Star } from "lucide-react";
import Image from "next/image";

const Interested = () => {
  return (
    <section className="pt-10 w-full">
      <div className="mx-auto w-full px-4 container">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">Still Interested?</h1>
        </div>
        <div className="relative mt-5">
          <div className="min-w-[367.333px] flex flex-col lg:flex-row rounded-md border border-gray-200 gap-2 cursor-pointer transition duration-150 ease-in-out">
            {/* image  */}
            <div className="min-w-[12rem] lg:w-[12rem] h-[13rem] lg:h-[8rem] rounded-t-md lg:rounded-tr-none lg:rounded-l overflow-hidden relative">
              <Image
                src="/images/wonderpark.jpg"
                alt="wonder park"
                width={168}
                height={112}
                className="w-full h-full object-cover object-center"
              />
              <div className="text-white text-sm rounded-full font-medium text-[12px] px-2 flex items-center gap-1 absolute left-2 top-2 bg-red-600">
                20% OFF
              </div>
            </div>

            {/* content  */}
            <div className="lg:p-1 p-3">
              <h4 className="font-medium line-clamp-2 min-h-[4rem]">
                Wonderpark Melaka
              </h4>
              <div className="flex flex-row gap-1 items-center">
                <div className="flex text-sm">
                  <Star className="text-[#ffb504] fill-[#ffb504] w-4 h-4" />
                  <p>5</p>
                </div>
                <div className="text-xs">(2056 Reviews)</div>
              </div>
              <p className="font-semibold text-accent mt-1">
                {" "}
                From <span className="pl-1">US$ 4.46</span>
                <span className="text-muted line-through font-normal text-sm pl-1">
                  US$ 5.57
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interested;
