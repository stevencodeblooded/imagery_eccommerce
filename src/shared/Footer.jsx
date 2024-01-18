import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaArrowCircleUp } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className=" grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-8" >
            <Link to={'/'}>
                <h2 className=" text-xl font-bold sm:text-2xl">The Imagery.</h2>
            </Link>
            <div className="flex flex-col gap-5 text-gray-400 font-semibold">
              <h3 className=" uppercase  ">JOIN Us</h3>
              <p>
                Stay in touch and join our exclusive VIP email list.
                Get free tutorials, special offers, product giveaways,
                and once in a lifetime deals.
              </p>
              <form className=" flex flex-col gap-3 sm:flex-row">
                <input type="email" name="" id="" placeholder="Email" className=" text-black border-b-2 border-black focus:outline-none px-1" />
                <button className='capitalize py-2 px-6 rounded-3xl bg-gray-900 text-white font-semibold'>Subscribe</button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className=" flex items-center gap-3">
              <a href="https://github.com/stevencodeblooded" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="text-2xl" /></a>
              <a href="https://linkedin.com/in/stevenochieng" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="text-2xl" /></a>
            </div>
            <div className="text-gray-400 flex flex-col gap-5">
              <h3  className="uppercase font-semibold">CUSTOMER CARE</h3>
              <ul className=" text-sm flex flex-col gap-1">
                <li><Link to={''} className=" hover:text-black transition-all">About</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Contact</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Search</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Shipping</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Refund & Returns</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Warranty</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex  justify-between">
              <NavLink to={'presets'} className={({isActive}) => isActive ? 'underline font-semibold text-lg' : ' font-semibold text-lg hover:underline'}>Presets</NavLink>
              <NavLink to={'account'} className={({isActive}) => isActive ? 'underline font-semibold text-lg' : ' font-semibold text-lg hover:underline'}>Account</NavLink>
              <button type="button" className="font-semibold hover:underline text-lg flex items-center gap-2">Up <FaArrowCircleUp /></button>
            </div>
            <div className="text-gray-400 flex flex-col gap-5">
              <h3  className="uppercase font-semibold">POLICIES</h3>
              <ul className=" text-sm flex flex-col gap-1">
                <li><Link to={''} className=" hover:text-black transition-all">Affiliate Agreement</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Billing Terms & Conditions</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">File License</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Payment Policy</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Privacy Policy</Link></li>
                <li><Link to={''} className=" hover:text-black transition-all">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer