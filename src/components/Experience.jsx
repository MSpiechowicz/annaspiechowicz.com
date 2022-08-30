import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <div className="app__footer__experience">
      <ExperienceItem title={"7+"} description={"Years of Experience"} />
      <ExperienceItem title={"20+"} description={"Business Project"} />
      <ExperienceItem title={"4+"} description={"Known Languages"} />
    </div>
  );
}

export default Experience;
