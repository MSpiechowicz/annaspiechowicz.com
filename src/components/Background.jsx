import BlobLeft from "../assets/blob-left.svg";
import BlobRight from "../assets/blob-right.svg";

function Background() {
  function generateLines() {
    const lines = [];

    for (let index = 0; index < 10; index++) {
      lines.push(<div className="app__background__line" />);
    }

    return lines;
  }

  return (
    <div className="app__background">
      {generateLines()}
      <img className="app__background__blob--left" src={BlobLeft} alt="blob left" />
      <img className="app__background__blob--right" src={BlobRight} alt="blob right" />
    </div>
  );
}

export default Background;
