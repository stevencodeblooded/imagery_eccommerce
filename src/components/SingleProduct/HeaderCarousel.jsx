import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeaderCarousel = ({props}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = props?.images
  console.log(props);

  const discount = (props?.discountPercentage * props?.price) / 100
  const newPrice = (props?.price - discount).toFixed(2)

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: false,
    fade: true 
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 my-24 relative">
      <Slider {...settings} afterChange={(index) => setCurrentSlide(index)}>
        {images?.map((image, index) => (
          <div key={index}>
            <div style={{ position: 'absolute', zIndex: '20', right: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '10px' }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  style={{
                    height: 'auto',
                    borderRadius: '3px',
                    border: index === currentSlide ? '2px solid orangered' : 'none',
                    padding: index === currentSlide ? '3px' : ''
                  }}
                  className="w-10 md:w-14 cursor-pointer"
                  // onClick={(index) => setCurrentSlide(index)}
                />
              ))}
            </div>

            <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-2xl h-full w-full"></div>

            <div className="absolute flex flex-col justify-between h-full p-4 z-20 text-white">
                  <div className="flex items-center gap-3 ">
                    <p className="border border-white font-semibold rounded-full py-1 px-4 text-xs ">Bestsellers</p>
                    <p className="border border-white font-semibold rounded-full py-1 px-4 text-xs ">Trending </p>
                    <p className="border border-white font-semibold rounded-full py-1 px-4 text-xs sm:text-bas">Film Collection</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-extrabold uppercase mb-2 md:text-5xl w-full md:w-3/4">{props?.title}</h2>
                    <h3 className="text-2xl font-bold">{props?.rating}</h3>
                  </div>
                  <div>
                    <p className="text-5xl font-extrabold uppercase mb-3">$ {newPrice} <span className="text-gray-400 line-through">{props?.price}</span></p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Link to={'/cart'} className='text-sm sm:text-base capitalize py-2 border-1 px-8 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></Link>
                      <button className='text-sm sm:text-base capitalize py-2 px-8 rounded-3xl text-gray-900 bg-white font-semibold flex items-center gap-3 w-fit'>Preview <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                  </div>
            </div>
            
            <img src={image} alt={`Slide ${index}`} className="rounded-2xl w-full h-96" />
          </div>
        ))}
      </Slider>
  </div>
  )
}

export default HeaderCarousel