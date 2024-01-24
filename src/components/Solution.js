import React from "react";
import sol from "../images/solution.png";

function Solution() {
  return (
    <div className="mx-2 mb-8">
      <p className="text-center font-bold text-[17px] py-1 md:text-[19px] lg:text-[24px] xl:text-[28px] xl:mb-2">Additional <span className="text-[#26D6EB]">ERP</span> solutions</p>
      <div className="lg:flex lg:flex-row lg:mx-auto xl:max-w-[1260px]">
        <img src={sol} className="p-3 md:mx-auto lg:w-[50%]" />
        <div className="text-center lg:flex lg:flex-col lg:justify-center lg:items-start lg:text-start lg:w-[50%] lg:p-4 xl:p-9">
          <p className="font-bold text-[15px] m-2 md:text-[17px] lg:m-0 lg:text-[18px] lg:my-4 xl:text-[19px]">ERP for small and midsize companies</p>
          <p className="text-[14px] md:text-[16px] lg:text-[16px]">
            Manage your entire small or midsize business with a single solution,
            from accounting, financials, purchasing, inventory, sales, and
            customer relationships to reporting and analytics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Solution;
