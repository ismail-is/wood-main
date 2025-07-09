import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        {/*=== Partners Slider ===*/}
        <Slider
          {...sliderProps.partnerSliderOne}
          className="partner-slider-one pt-80 pb-70 border-top-1 wow fadeInDown"
        >
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/allimg/clients/1.webp"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/allimg/clients/2.webp"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/allimg/clients/3.webp"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/allimg/clients/4.webp"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/allimg/clients/5.webp"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/allimg/clients/6.webp"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/allimg/clients/7.webp"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          
        </Slider>
      </div>
    </section>
  );
};
export default Partners;
