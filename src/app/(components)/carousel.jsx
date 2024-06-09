import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const Carousel = () => {
  return (
    <div className="container">
      <div className="carousel">
        {/* <!-- Left Button --> */}
        <button id="prev-btn" className="btn">
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>

        {/* <!-- List Container --> */}
        <div id="item-list" className="item-list">
          {/* <!-- Items --> */}

          <img id="item" className="item" src="/images/carousel/layers.png" />
          <img
            id="item"
            className="item"
            src="/images/carousel/Company logo.png"
          />
          <img id="item" className="item" src="/images/carousel/sisy.png" />
          <img
            id="item"
            className="item"
            src="/images/carousel/hourglass.png"
          />
          <img
            id="item"
            className="item"
            src="/images/carousel/circooles.png"
          />
        </div>

        {/* <!-- Right Button --> */}
        <button id="next-btn" className="btn">
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </button>
      </div>
    </div>
  );
};
