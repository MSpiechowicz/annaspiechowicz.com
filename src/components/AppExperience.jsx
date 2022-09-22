import React from "react";
import AppExperienceItem from "./AppExperienceItem";

function AppExperience() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6 max-w-lg lg:max-w-2xl">
      <AppExperienceItem
        title="7+"
        description="Years of Experience"
        color="blue"
      />
      <AppExperienceItem
        title="20+"
        description="IT Business Project"
        color="yellow"
      />
      <AppExperienceItem
        title="4+"
        description="Used Languages"
        color="red"
      />
    </div>
  );
}

export default AppExperience;
