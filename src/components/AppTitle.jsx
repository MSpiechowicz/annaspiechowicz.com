import React from "react";
import AppBook from "./AppBook";

function AppTitle() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 static">
      <AppBook />
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold flex flex-col gap-1">
        <h1>Anna</h1>
        <h1>Spiechowicz</h1>
      </div>
      <div className="text-2xl md:text-4xl lg:text-6xl font-medium flex flex-row gap-2 md:gap-3 lg:gap-4">
        <h2>Business</h2>
        <h2>Analyst</h2>
      </div>
    </div>
  );
}

export default AppTitle;
