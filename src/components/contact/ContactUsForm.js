"use client";
import { Star } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import PhoneInputComponent from "../common/PhoneInput";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
      <div className="w-full lg:flex-1">
        <form className=" scroll-m-[150px] md:space-y-5 mt-5 font-medium [&_input]:mt-2 [&_textarea]:mt-2 [&_label]:w-full">
          <div className="sm:flex sm:items-start sm:gap-5">
            {/* first_name  */}
            <div className="pb-4 relative w-full">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="First Name"
                className="mt-2 text-xs rounded border border-gray-300 w-full py-2"
              />
              {/* <div className="text-sm mt-1 text-red-400 absolute -bottom-1">
                error
              </div> */}
            </div>

            {/* last name  */}
            <div className="pb-4 relative w-full">
              <label
                htmlFor="last_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Last Name"
                className="mt-2 text-xs rounded border border-gray-300 w-full py-2 "
              />
              {/* <div className="text-sm mt-1 text-red-400 absolute -bottom-1">
                error
              </div> */}
            </div>
          </div>

          <div className="sm:flex sm:items-start sm:gap-5">
            {/* email  */}
            <div className="pb-4 relative w-full">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Email"
                className="mt-2 text-xs rounded border border-gray-300 w-full py-2 "
              />
              {/* <div className="text-sm mt-1 text-red-400 absolute -bottom-1">
                error
              </div> */}
            </div>

            {/* phone num  */}
            <div className="pb-4 relative w-full">
              <label
                htmlFor="phone"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              {/* <Input
                type="text"
                placeholder="phone"
                className="mt-2 text-xs rounded border border-gray-300 w-full py-2 "
              /> */}
              <div className="mt-2">
                <PhoneInputComponent />
              </div>
              {/* <div className="text-sm mt-1 text-red-400 absolute -bottom-1">
                error
              </div> */}
            </div>
          </div>

          {/* message  */}
          <div>
            <div className="pb-4 relative w-full">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Message"
                className="mt-2 text-xs rounded border border-gray-300 w-full  !h-20 min-h-20 max-h-24 resize-none"
              />
            </div>
          </div>

          <div className="flex justify-between items-end">Captcha</div>
          <button
            type="submit"
            className="bg-primary hover:bg-orange-600 text-white px-9 block mx-auto sm:mx-0 lg:px-7 mt-5 py-2 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-gray-100/20 p-3 shadow rounded-md w-full lg:w-[390px] space-y-5">
        <div className="bg-white p-3 rounded-md">
          <h2 className="font-bold text-xl">Help Center</h2>
          <p className="text-sm">
            Our prompt response to our clients through phone, online chat and
            email always make us first choice for all clients across the globe
            and we strive to make further improvement for better customer
            satisfaction.
          </p>
        </div>

        <div className="bg-white rounded-md">
          <div className="p-3 text-nowrap text-xs flex items-center gap-1 justify-center">
            See our <strong>533</strong> review on{" "}
            <span className="flex gap-1 items-center">
              <Star className="h4 w-4 fill-primary" />
              Unknown
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
