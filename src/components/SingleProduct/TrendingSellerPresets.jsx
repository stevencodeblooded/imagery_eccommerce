import { faShare, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import productImage from '../../assets/product.jpg'

const TrendingSellerPresets = () => {
  return (
    <div className=" max-w-6xl mx-auto px-4 my-24">
      <div>
        <h3 className="text-base font-semibold text-gray-500 uppercase mb-20">Trending presets</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative">
                <img
                src={productImage}
                alt=""
                className=" rounded-3xl w-full h-full"
                />
                <div className="absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 text-white">
                    <p className="text-sm font-semibold flex items-center gap-2">
                        John Doe <FontAwesomeIcon icon={faShare} />
                    </p>
                    <div className="font-bold text-lg flex">
                        4.95{" "}
                        <sup className="text-xs font-semibold flex items-center gap-2">
                        (125){" "}
                        <p>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon
                            icon={faStar}
                            className=" text-black"
                            />
                        </p>
                        </sup>
                    </div>
                    </div>
                    <div>
                    <p className="uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold">
                        Trending
                    </p>
                    </div>
                </div>
                <div className=" mb-4">
                    <p className="text-white font-bold text-lg ">$ 10.99</p>
                    <h2 className="text-white text-3xl capitalize">
                    Lorem ipsum dolor sit amet
                    </h2>
                </div>
                </div>
            </div>
            <div className="relative">
                <img
                src={productImage}
                alt=""
                className=" rounded-3xl w-full h-full"
                />
                <div className="absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 text-white">
                    <p className="text-sm font-semibold flex items-center gap-2">
                        John Doe <FontAwesomeIcon icon={faShare} />
                    </p>
                    <div className="font-bold text-lg flex">
                        4.95{" "}
                        <sup className="text-xs font-semibold flex items-center gap-2">
                        (125){" "}
                        <p>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon
                            icon={faStar}
                            className=" text-black"
                            />
                        </p>
                        </sup>
                    </div>
                    </div>
                    <div>
                    <p className="uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold">
                        Trending
                    </p>
                    </div>
                </div>
                <div className=" mb-4">
                    <p className="text-white font-bold text-lg ">$ 10.99</p>
                    <h2 className="text-white text-3xl capitalize">
                    Lorem ipsum dolor sit amet
                    </h2>
                </div>
                </div>
            </div>
            <div className="relative">
                <img
                src={productImage}
                alt=""
                className=" rounded-3xl w-full h-full"
                />
                <div className="absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 text-white">
                    <p className="text-sm font-semibold flex items-center gap-2">
                        John Doe <FontAwesomeIcon icon={faShare} />
                    </p>
                    <div className="font-bold text-lg flex">
                        4.95{" "}
                        <sup className="text-xs font-semibold flex items-center gap-2">
                        (125){" "}
                        <p>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon
                            icon={faStar}
                            className=" text-black"
                            />
                        </p>
                        </sup>
                    </div>
                    </div>
                    <div>
                    <p className="uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold">
                        Trending
                    </p>
                    </div>
                </div>
                <div className=" mb-4">
                    <p className="text-white font-bold text-lg ">$ 10.99</p>
                    <h2 className="text-white text-3xl capitalize">
                    Lorem ipsum dolor sit amet
                    </h2>
                </div>
                </div>
            </div>
            <div className="relative">
                <img
                src={productImage}
                alt=""
                className=" rounded-3xl w-full h-full"
                />
                <div className="absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 text-white">
                    <p className="text-sm font-semibold flex items-center gap-2">
                        John Doe <FontAwesomeIcon icon={faShare} />
                    </p>
                    <div className="font-bold text-lg flex">
                        4.95{" "}
                        <sup className="text-xs font-semibold flex items-center gap-2">
                        (125){" "}
                        <p>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon
                            icon={faStar}
                            className=" text-black"
                            />
                        </p>
                        </sup>
                    </div>
                    </div>
                    <div>
                    <p className="uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold">
                        Trending
                    </p>
                    </div>
                </div>
                <div className=" mb-4">
                    <p className="text-white font-bold text-lg ">$ 10.99</p>
                    <h2 className="text-white text-3xl capitalize">
                    Lorem ipsum dolor sit amet
                    </h2>
                </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TrendingSellerPresets