import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <section className=" max-w-6xl mx-auto p-4">
            <nav className="flex items-center justify-between">
                <Link to={'/'}>
                    <h2 className=" text-xl font-bold sm:text-2xl">The Imagery.</h2>
                </Link>

                <div className="block sm:hidden">
                    <FontAwesomeIcon icon={faBars} className=" cursor-pointer text-2xl" />
                </div>

                <ul className="hidden sm:flex items-center gap-12">
                    <li>
                        <NavLink to={'presets'} className={({isActive}) => isActive ? 'font-bold' : 'text-base'}>Presets</NavLink>
                    </li>
                    <li>
                        <NavLink to={'account'} className={({isActive}) => isActive ? 'font-bold' : 'text-base'}>Account</NavLink>
                    </li>
                    <li className="ml-14">
                        <Link to={'cart'}> 
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
  )
}

export default Navbar