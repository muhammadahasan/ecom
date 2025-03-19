import Image from "next/image";

const AboutComp = () => {
  return (
    <div className="[&_p]:mt-4">
      <div className="pl-12 pb-12 float-right w-[550px] hidden lg:block">
        <Image
          src="/images/about-aside.jpg"
          alt="about aside"
          width={508}
          height={266}
          //   fill
          className="max-w-full"
        />
      </div>

      <div>
        <h1 className="font-bold text-3xl">Explore With JTR Holidays</h1>
        <p>
          A customer-oriented, user-friendly platform for booking hassle-free
          travel experiences across the globe. We are on a mission to make
          travel easy and memorable by offering travelers the option to book
          either on the go with instant confirmation or sit back in the comfort
          of your home and request a customized Holiday Package.
        </p>
        <p>
          We are one of the leading authorized resellers for tours, sightseeing,
          attraction tickets, transfers & Holiday Package seller across the
          globe. We enable guests to book tours, attractions tickets, and other
          experiences on the go at the last moment and get instant confirmation
          & E-Tickets for most of the booking.
        </p>
        <p>
          Furthermore, with the extensive local market knowledge and continuous
          evaluation of our guest requirements, we offer
          tailor-made/ready-to-book Holiday & Honeymoon Packages which mostly
          fit travelers’ requirements without any changes. However, upon request
          from guests changes or complete customized Holiday & Honeymoon
          packages can be made by our holiday experts.
        </p>
        <p>
          In addition to that, we are also offering arrangements for corporate
          clients. Let us make your arrangement on an exclusive basis for your
          corporate events. Our experience and professional team can ease your
          headache when it comes to private and exclusive events for different
          occasions. We offer exclusive basis arrangements for both small and
          big corporate groups.
        </p>
        <p>
          Let it be an exclusive Yacht Party, Desert Safari, destination
          wedding, Birthday Party, anniversary, group hotel booking or any other
          special occasion. Our team can not only customize and make the
          arrangement as per your request, but due to vast experience in the
          hospitality industry, we can make your event much better than what you
          are expecting. Our priority is to not only make your event
          cost-effective, but also to get the best inclusions for your events
          and parties within the available resources.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-9">
        {/* vission  */}
        <div className="bg-[#02bbbb1a] rounded-lg p-4 flex gap-5 items-start">
          <div className="bg-white p-3 rounded-full aspect-square flex items-center">
            <Image
              src="/icons/about/vision.svg"
              alt="vission svg"
              width={42}
              height={42}
              className="w-12"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-lg"> Vision</h2>
            <p className="mt-1">
              Our vision at JTR Holidays is to be the leading global travel
              provider, recognized for our innovative solutions, exceptional
              service, and commitment to creating extraordinary travel
              experiences. We aim to inspire and connect people through unique
              and personalized journeys, setting the standard for excellence in
              the travel industry.
            </p>
          </div>
        </div>

        {/* mission  */}
        <div className="bg-[#ff66001a] rounded-lg p-4 flex gap-5 items-start">
          <div className="bg-white p-3 rounded-full aspect-square flex items-center">
            <Image
              src="/icons/about/mission.svg"
              alt="mission svg"
              width={42}
              height={42}
              className="w-12"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-lg"> Mission</h2>
            <p className="mt-1">
              At JTR Holidays, our mission is to deliver exceptional travel
              experiences by offering personalized, seamless, and unforgettable
              journeys. We strive to be the trusted partner for our customers,
              providing top-rated service, exclusive offers, and secure bookings
              to ensure every trip is memorable and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
