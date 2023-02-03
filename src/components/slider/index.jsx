import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <Carousel className="rounded">
      <Carousel.Item>
        <Link to="/products">
          <img
            className="d-block w-100 h-80"
            src="https://www.transworldsn.com/wp-content/uploads/2021/01/construction-suplles-header.jpg"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
          <h4 className="mb-3">بهترین ابزارآلات برقی و غیر برقی</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/products">
          <img
            className="d-block w-100 h-80"
            src="https://storage.googleapis.com/bitmoto/dealers/all/images/parts/parts-header.jpg"
            alt="Second slide"
          />
        </Link>

        <Carousel.Caption>
          <h4 className="mb-3">تمام لوازم موردنیاز خودروی شما</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/products">
          <img
            className="d-block w-100 h-80"
            src="https://www.meyerlandscape.com/wp-content/uploads/2020/03/how-to-keep-garden-tools-shape-header.png"
            alt="Third slide"
          />
        </Link>

        <Carousel.Caption>
          <h4 className="mb-3">ابزارآلات باغبانی</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
