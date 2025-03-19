import Image from "next/image";
import { GiBanknote } from "react-icons/gi";
import Link from "next/link";
import NavBar from "./NavBar";
import { Menu, Search } from "lucide-react";
import LogoHeader from "./LogoHeader";

const Header = () => {
  return (
    <header className="w-full bg-white z-50 sticky top-0 start-0 shadow">
      <LogoHeader />
      <NavBar />
    </header>
  );
};

export default Header;
