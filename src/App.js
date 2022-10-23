import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CardContainer from "./components/CardContainer";
import ActiveUsers from "./components/ActiveUsers";
import BadgeCardsContainer from "./components/BadgeCardsContainer";
import BarChartContainer from "./components/BarChartContainer";
import HorBarChartContainer from "./components/HorBarChartContainer";
import CitiesCard from "./components/CitiesCard";
export function App() {
  return (
    <div className="App flex ">
      <Sidebar />
      <div className="background width-full h-full bg-no-repeat bg-cover w-[83%] ">
        <Navbar />
        <div className="w-full flex">
          <div className="w-[60%] border-r px-11 pt-4 pb-8 borderBottom border-gray-300">
              {/* middle column */}
            <div className="flex flex-col gap-8">
              <CardContainer/>
              <ActiveUsers/>
              <BadgeCardsContainer/>
            </div>
          </div>
          {/* right column */}
          <div className="mx-auto borderBottom ">
            <BarChartContainer/>
            <HorBarChartContainer/>
            <CitiesCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
