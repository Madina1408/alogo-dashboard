import "./App.css";
import Navbar from "./components/NavSideBArs/Navbar";
import Sidebar from "./components/NavSideBArs/Sidebar";
import CardContainer from "./components/Cards/CardContainer";
import ActiveUsers from "./components/ActiveUsers";
import BadgeCardsContainer from "./components/Cards/BadgeCardsContainer";
import BarChartContainer from "./components/Charts/BarChartContainer";
import HorBarChartContainer from "./components/Charts/HorBarChartContainer";
import CitiesCard from "./components/Cards/CitiesCard";
export function App() {
  return (
    <div className="App flex ">
      <div className="w-2/12"><Sidebar /></div>
      <div className="bg-palm bg-opacity-25 h-full bg-no-repeat bg-cover w-full md:w-10/12 ">
        <Navbar />
        <div className="w-full flex xl:flex-row sm:flex-col">
          <div className="xl:w-3/5 w-full  xl:border-r px-11 pt-4 pb-8 borderBottom md: border-gray-300">
              {/* middle column */}
            <div className="flex flex-col xl:gap-6 lg:gap-8">
              <CardContainer/>
              <ActiveUsers/>
              <BadgeCardsContainer/>
            </div>
          </div>
          {/* right column */}
          <div className="xl:w-2/5 w-10/12 mx-auto borderBottom ">
            <BarChartContainer/>
            <HorBarChartContainer/>
            <CitiesCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
