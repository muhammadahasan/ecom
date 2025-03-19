import Banner from "@/components/home/Banner";
import BestPlaces from "@/components/home/BestPlaces";
import CategoriesSection from "@/components/home/CategoriesSection";
import ChooseUs from "@/components/home/ChooseUs";
import CorporateEvents from "@/components/home/CorporateEvents";
import Interested from "@/components/home/Interested";
import PopularActivities from "@/components/home/PopularActivities";
import TopDestinations from "@/components/home/TopDestinations";

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <Interested /> */}
      <TopDestinations />
      <PopularActivities />
      <BestPlaces />
      <CategoriesSection />
      <ChooseUs />
      {/* <CorporateEvents /> */}
    </div>
  );
}
