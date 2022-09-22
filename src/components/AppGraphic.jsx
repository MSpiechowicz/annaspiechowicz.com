import React from "react";
import BusinessWoman from "../assets/business-woman.svg";

function AppGraphic() {
  return (
    <div className="mt-10 lg:mt-24 flex flex-row justify-center self-center md:w-3/5 lg:w-auto 2xl:h-1/2">
      <img src={BusinessWoman} alt="business woman" />
    </div>
  );
}

export default AppGraphic;
