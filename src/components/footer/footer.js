"use client";
import {
  AmericanExpressIcon,
  ApplePayIcon,
  GooglePayIcon,
  MastercardIcon,
  VisaIcon,
} from "@/utils/CustomIcons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import { Facebook, Globe } from "lucide-react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

const languages = [
  {
    value: "english",
    label: "English",
  },
];

const Footer = () => {
  const [language, setLanguage] = useState("english");
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div
      className="w-full pt-10 pb-3 bg-contain bg-no-repeat bg-bottom border-t border-gray-200"
      style={{
        backgroundImage: "url(/images/footer.png)",
      }}
    >
      <div className="w-full mx-auto px-4 container">
        {/* div 1  */}
        <div className="flex justify-between">
          {/* about  */}
          <div className="w-full lg:w-auto" style={{ order: "1" }}>
            <h1 className="font-semibold text-xl hidden lg:block">About</h1>
            <ul className="text-sm font-medium mt-5 flex lg:flex-col flex-wrap gap-5 lg:gap-2 justify-center lg:justify-start">
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/about-us">About Us</Link>
              <li>FAQ</li>
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <Link href="/blog">Blog</Link>
            </ul>
          </div>

          {/* activity  */}
          <div style={{ order: "2" }} className="hidden lg:block">
            <h1 className="font-semibold text-xl">Activities</h1>
            <ul className="text-sm font-medium mt-5 space-y-2">
              <li>Explore Wordwide</li>
              <li>Desert Safari</li>
              <li>Dhow Cruises</li>
              <li>City Tours</li>
              <li>Luxury Yachts</li>
              <li>Dubai Holiday Packages</li>
              <li>Dubai Honeymoon Packages</li>
              <li>Turkey Holiday Packages</li>
              <li>Maldives Holiday Packages</li>
            </ul>
          </div>

          {/* explore  */}
          <div style={{ order: "3" }} className="hidden lg:block">
            <h1 className="font-semibold text-xl">Explore</h1>
            <ul className="text-sm font-medium mt-5 space-y-2">
              <li>Australia</li>
              <li>Singapore</li>
              <li>France</li>
              <li>United Kingdom</li>
              <li>Hong Kong</li>
              <li>United States</li>
              <li>All Destinations</li>
            </ul>
          </div>

          {/* images  */}
          <div style={{ order: "4" }} className="hidden lg:block">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>

        {/* div 2  */}

        <div className="mt-9 py-3 border-y border-gray-200 flex justify-between">
          <div className="text-xl gap-9 hidden lg:flex items-center">
            <div>Ways you can pay</div>
            <div className="flex items-center gap-3 [&_img]:w-9">
              <VisaIcon />
              <MastercardIcon />
              <AmericanExpressIcon />
              <ApplePayIcon />
              <GooglePayIcon className="w-4 h-4" />
            </div>
          </div>

          <div className="flex gap-4 font-medium text-sm mx-auto lg:mx-0">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="flex gap-7 bg-gray-100 px-3 rounded-full py-3 items-center border-none outline-none">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <SelectValue placeholder="Select status" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select your Language</SelectLabel>
                  {languages.map((lang, index) => (
                    <SelectItem
                      key={index}
                      value={lang.value}
                      // className="flex items-center gap-2"
                    >
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* div 3  */}
        <div className="relative my-9 flex flex-col-reverse lg:flex-row gap-7 lg:gap-3 justify-between items-center">
          <div className="hidden lg:flex">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={160}
              height={22}
              loading="lazy"
              className="w-32"
            />
          </div>

          <div className="text-sm text-center">
            © Copyright {year}
            <span className="text-primary">JTR Holidays</span> - All rights
            reserved
          </div>
          <div className="flex gap-3 text-xl text-accent">
            <li className="bg-white w-9 aspect-square rounded-full shadow flex items-center justify-center">
              <FaFacebookF className="w-4 h-4" />
            </li>
            <li className="bg-white w-9 aspect-square rounded-full shadow flex items-center justify-center">
              <FaXTwitter className="w-4 h-4" />
            </li>
            <li className="bg-white w-9 aspect-square rounded-full shadow flex items-center justify-center">
              <FaInstagram className="w-4 h-4" />
            </li>
            <li className="bg-white w-9 aspect-square rounded-full shadow flex items-center justify-center">
              <FaPinterest className="w-4 h-4" />
            </li>
            <li className="bg-white w-9 aspect-square rounded-full shadow flex items-center justify-center">
              <FaYoutube className="w-4 h-4" />
            </li>
            <li className="bg-white w-9 aspect-square rounded-full shadow flex items-center justify-center">
              <FaLinkedin className="w-4 h-4" />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
