import Experience from "./Experience";
import Motto from "./Motto";

function Footer() {
  return (
    <div className="app__footer">
      <Experience />
      <Motto
        description={`Elbert Einstein once said that if you can’t 
      explain something simply, you don’t understand it well enough. 
      I couldn’t agree more.`}
      />
    </div>
  );
}

export default Footer;
