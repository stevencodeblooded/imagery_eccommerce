import Slider from "react-slick";
import image1 from '../../assets/OIP (3).jpeg'
import image2 from '../../assets/OIP (2).jpeg'
import image3 from '../../assets/OIP.jpeg'
import image4 from '../../assets/product.jpg'
import image5 from '../../assets/laptop.png'

const PresetReviews = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };


  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }
  return (
    <div  className=" max-w-6xl mx-auto px-4 py-10 my-24">
        <h1 className="text-3xl mb-16 text-gray-500 font-semibold uppercase ">Real <span className=" font-extrabold">Reviews</span>. Real Results.</h1>
        
        <Slider {...settings} className="overflow-hidden">
          <div className="bg-gray-200 rounded-2xl">
            <div className="grid grid-cols-2 gap2 ">
              <img src={image1} alt="" className="w-full rounded-2xl h-72 object-cover"/>
              <div className="p-4 flex flex-col justify-between">
                <p className="uppercase text-sm font-semibold text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt. Beatae cum omnis quisquam soluta. 
                  Atque nemo itaque laudantium blanditiis. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-gray-700 font-semibold">John Doe</h3>
                    <p className="text-sm font-light">03/21/24</p>
                  </div>
                  <h2 className="text-lg font-bold text-gray-700">4.95 <sup>(125)</sup></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl">
            <div className="grid grid-cols-2 gap2 ">
              <img src={image2} alt="" className="w-full rounded-2xl h-72 object-cover"/>
              <div className="p-4 flex flex-col justify-between">
                <p className="uppercase text-sm font-semibold text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt. Beatae cum omnis quisquam soluta. 
                  Atque nemo itaque laudantium blanditiis. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-gray-700 font-semibold">John Doe</h3>
                    <p className="text-sm font-light">03/21/24</p>
                  </div>
                  <h2 className="text-lg font-bold text-gray-700">4.95 <sup>(125)</sup></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl">
            <div className="grid grid-cols-2 gap2 ">
              <img src={image3} alt="" className="w-full rounded-2xl h-72 object-cover"/>
              <div className="p-4 flex flex-col justify-between">
                <p className="uppercase text-sm font-semibold text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt. Beatae cum omnis quisquam soluta. 
                  Atque nemo itaque laudantium blanditiis. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-gray-700 font-semibold">John Doe</h3>
                    <p className="text-sm font-light">03/21/24</p>
                  </div>
                  <h2 className="text-lg font-bold text-gray-700">4.95 <sup>(125)</sup></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl">
            <div className="grid grid-cols-2 gap2 ">
              <img src={image4} alt="" className="w-full rounded-2xl h-72 object-cover"/>
              <div className="p-4 flex flex-col justify-between">
                <p className="uppercase text-sm font-semibold text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt. Beatae cum omnis quisquam soluta. 
                  Atque nemo itaque laudantium blanditiis. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-gray-700 font-semibold">John Doe</h3>
                    <p className="text-sm font-light">03/21/24</p>
                  </div>
                  <h2 className="text-lg font-bold text-gray-700">4.95 <sup>(125)</sup></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl">
            <div className="grid grid-cols-2 gap2 ">
              <img src={image5} alt="" className="w-full rounded-2xl h-72 object-cover"/>
              <div className="p-4 flex flex-col justify-between">
                <p className="uppercase text-sm font-semibold text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt. Beatae cum omnis quisquam soluta. 
                  Atque nemo itaque laudantium blanditiis. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-gray-700 font-semibold">John Doe</h3>
                    <p className="text-sm font-light">03/21/24</p>
                  </div>
                  <h2 className="text-lg font-bold text-gray-700">4.95 <sup>(125)</sup></h2>
                </div>
              </div>
            </div>
          </div>
        </Slider>
    </div>
  )
}

export default PresetReviews