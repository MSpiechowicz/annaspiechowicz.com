import React from "react";
import AppButton from "./AppButton";

function AppContact() {
  return (
    <div className="app__contact">
      <div className="app__contact__items">
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
