function ExperienceItem({ title, description }) {
  return (
    <div className="app__footer__experience__item">
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
}

export default ExperienceItem;
