import React from "react";
import AppExperienceItem from "./AppExperienceItem";

function AppExperience() {
  return (
    <div className="app__experience">
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
