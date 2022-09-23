import React from "react";
import AppButton from "./AppButton";

function AppContact() {
  return (
    <div className="mt-10 md:mt-14">
      <div className="flex flex-row gap-5">
        <AppButton
          href="mailto:kowolikanna@gmail.com"
          alt="Contact me"
          name="Contact me"
        />
        <AppButton
          href="https://www.linkedin.com/in/anna-spiechowicz-166b25108/"
          alt="LinkedIn"
          name="LinkedIn"
          secondary={true}
        />
      </div>
    </div >
  );
}

export default AppContact;
