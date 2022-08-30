import Facebook from "../assets/facebook.svg";
import Gmail from "../assets/gmail.svg";
import LinkedIn from "../assets/linkedin.svg";

function Contact() {
    return (
        <div className="app__contact">
            <a className="app__contact__item" href="/">
                <img src={Facebook} alt="facebook" />
            </a>
            <a className="app__contact__item" href="/">
                <img src={Gmail} alt="gmail" />
            </a>
            <a className="app__contact__item" href="/">
                <img src={LinkedIn} alt="linkedin" />
            </a>
        </div>
    );
}

export default Contact;