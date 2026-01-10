import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import { data } from "@/components/home/data";
import FilterOptions from "@/components/home/FilterOptions";
import FilterOptionsTest from "@/components/home/FilterOptionsTest";

import Herosection from "@/components/home/Herosection";

import VisaList from "@/components/home/VisaList";

export default function HomePage() {
  const dataItems = data;

  return (
    <div>
      <Herosection />
      <FilterOptions />
      <Category />
      <Banner />
      <div className="mt-5 max-w-7xl mx-auto px-4">
        <VisaList dataItems={dataItems} />
      </div>
    </div>
  );
}
