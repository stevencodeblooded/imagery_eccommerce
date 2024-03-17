import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [showMobileLinks, setShowMobileLinks] = useState(false);
    
  return (
    <div className="bg-gray-300">
        <section className=" max-w-6xl mx-auto p-4 py-8">
            <nav className="flex items-center justify-between ">
                <Link to={'/'}>
                    <h2 className=" text-xl font-bold sm:text-2xl">The Imagery.</h2>
                </Link>

                <div className="block fixed right-4 top-8 sm:hidden">
                    <FontAwesomeIcon icon={faBars} onClick={() => setShowMobileLinks(!showMobileLinks)} className=" cursor-pointer text-3xl" />
                </div>

                <ul className="hidden sm:flex items-center gap-12">
                    <li>
                        <NavLink to={'presets'} className={({isActive}) => isActive ? 'bg-gray-900 text-white py-2 px-8 rounded-3xl font-semibold ' : 'text-gray-900 bg-white text-base rounded-3xl py-2 px-8 font-semibold'}>Presets</NavLink>
                    </li>
                    <li>
                        <NavLink to={'account'} className={({isActive}) => isActive ? 'bg-gray-900 text-white py-2 px-8 rounded-3xl font-semibold ' : 'text-gray-900 bg-white text-base rounded-3xl py-2 px-8 font-semibold'}>Account</NavLink>
                    </li>
                    <li className="ml-14">
                        <NavLink to={'cart'} className={({isActive}) => isActive ? "text-3xl text-gray-900" : "text-3xl text-white"}> 
                            <FontAwesomeIcon icon={faCartShopping}  />
                        </NavLink>
                    </li>
                </ul>

            </nav>
                {/* {
                    showMobileLinks && (
                        <ul className="flex flex-col bg-red-300 min-h-screen justify-between items-center">
                            <li>
                                <NavLink to={'presets'} className={({isActive}) => isActive ? 'bg-gray-900 text-white py-2 px-8 rounded-3xl font-semibold ' : 'text-gray-900 bg-white text-base rounded-3xl py-2 px-8 font-semibold'}>Presets</NavLink>
                            </li>
                            <li>
                                <NavLink to={'account'} className={({isActive}) => isActive ? 'bg-gray-900 text-white py-2 px-8 rounded-3xl font-semibold ' : 'text-gray-900 bg-white text-base rounded-3xl py-2 px-8 font-semibold'}>Account</NavLink>
                            </li>
                            <li className="ml-14">
                                <Link to={'cart'}> 
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Link>
                            </li>
                        </ul>
                    )
                } */}
        </section>
    </div>
  )
}

export default Navbar