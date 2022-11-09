import React from "react";
import BadgeCard from "./BadgeCard";
function BadgeCardsContainer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between font-bold">
        <p>Top Earned Badges</p>
        <a href="#">
          <p className="text-skin-base underline underline-offset-2 decoration-solid">
            View All Badges
          </p>
        </a>
      </div>
      <div className="container">
        <div className="bg-[#D3E3E1] badgeCard">
          <div className="badgeText bg-[#0F2837]"></div>
          <BadgeCard />
        </div>
        <div className="bg-[#FFD5A3] badgeCard">
          <div className="bg-[#FF9619] badgeText"></div>
          <BadgeCard />
        </div>
        <div className="bg-[#C5A3B5] badgeCard">
          <div className="bg-[#0F2837] badgeText"></div>
          <BadgeCard />
        </div>
      </div>
    </div>
  );
}

export default BadgeCardsContainer;
