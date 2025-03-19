import Image from "next/image";
import Link from "next/link";

const SingleBlogPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-cover bg-center">
        <div className="relative overflow-hidden text-white py-14 text-center bg-black/40 lg:min-h-[450px] flex flex-col items-center justify-center">
          <Image
            src="/images/blog.jpeg"
            alt="blog"
            fill
            className="absolute top-0 left-0 right-0 z-[-1] w-full h-full"
          />
          <h1 className="font-bold text-1xl lg:text-5xl page-title mb-2 px-5 before:h-[1px] after:h-[1px] after:bg-white/50 after:inline-block after:relative after:align-middle after:w-[6%] before:bg-white/50 before:inline-block before:relative before:align-middle before:w-[6%] before:right-4 after:left-4 capitalize w-[100%]">
            Single Blog
          </h1>
          <p className="text-white">
            For those who love travelling around the world
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 w-full xl:w-[80%] mt-4 lg:mt-9 ">
        <div className="[&_p]:mt-4">
          <div className="pl-12 pb-12 float-right w-[550px] hidden lg:block">
            <Image
              src="/images/about-aside.jpg"
              alt="about aside"
              width={508}
              height={266}
              className="max-w-full"
            />
          </div>

          <h1 className="font-bold text-3xl text-wrap  lg:max-w-md">
            World’s Most Exclusive, Private Island Resorts
          </h1>
          <div className="pb-3 ">
            <p className="mt-[14px] mb-[7px] text-sm">
              Experience the essence of travel by venturing to the world's most
              secluded and luxurious private islands scattered across the globe.
              These exclusive island retreats offer not only privacy but also
              unparalleled luxury beyond imagination. Every moment spent on
              these secluded paradises will create memories to last a lifetime.
            </p>
            <h2 className="mt-[17px] mb-[7px] text-[21px] font-bold">
              North Island, Seychelles
            </h2>
            <p className="mt-[14px] mb-[7px] text-sm">
              North Island Seychelles stands as one of the world's premier and
              most elite private island resorts, boasting eleven private villas
              for guests. Each villa offers an unparalleled environment of
              exclusivity and luxury throughout your stay on North Island.
            </p>
            <p className="mt-[14px] mb-[7px] text-sm">
              North Island Seychelles stands as one of the world's premier and
              most elite private island resorts, boasting eleven private villas
              for guests. Each villa offers an unparalleled environment of
              exclusivity and luxury throughout your stay on North Island.
            </p>
          </div>
        </div>

        <div className="mt-9">
          <div className="flex items-center gap-3">
            <div className="text-xl text-accent">Tags:</div>
            <div className="flex items-center gap-1">
              <div className="mr-2">
                <Link
                  href=""
                  className="px-2 py-1 border text-sm border-gray-200 rounded"
                >
                  Dubai
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
