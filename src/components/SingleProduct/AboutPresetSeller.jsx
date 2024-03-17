import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLocation, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { MdOutlinePersonAddAlt } from "react-icons/md";
import personImage from '../../assets/product.jpg'

const AboutPresetSeller = () => {
  return (
    <div className="bg-gray-300 py-24">
        <div className=" max-w-6xl mx-auto px-4">
            <div>
                <h3 className="text-base font-semibold text-gray-500 uppercase mb-20">About the Seller</h3>
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-3 justify-between">
                    <div className="flex flex-col gap-8 w-full md:w-1/2">
                        <h1 className="text-5xl font-extrabold uppercase text-gray-900">John Doe</h1>
                        <div className="flex items-center gap-10">
                            <p className="px-4 py-1 border-2 border-gray-500 text-gray-500 font-semibold rounded-full flex items-center gap-2"><FontAwesomeIcon icon={faLocation} /> Nairobi, Kenya</p>
                            <div className="flex items-center gap-5">
                                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className=" text-xl" /></a>
                                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className=" text-xl" /></a>
                            </div>
                        </div>
                        <p className="uppercase font-medium text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <Link to={'more'} className='capitalize py-2 px-6 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>See More by John Doe <MdOutlinePersonAddAlt className='text-xl' /></Link>
                    </div>
                    <div className="w-full md:w-1/3 relative">
                        <img src={personImage} alt="" className=" rounded-3xl h-full hover:opacity-90 transition-all" />
                        <p className="uppercase py-1 absolute right-4 top-4 text-sm px-3 rounded-2xl bg-white text-red-600 font-semibold flex items-center gap-2">
                            TOP Seller <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPresetSeller