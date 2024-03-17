import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const WelcomeBack = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
            <h1 className="text-5xl uppercase font-medium">Welcome <br /><span className=" font-extrabold">to the imagery</span></h1>
            <form>
                <div className="w-full md:w-1/2 grid grid-cols-1 gap-6 text-gray-500">
                    <input type="text" name="username" placeholder="Username" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold"  />
                    <input type="password" name="password" placeholder="Password" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
                    <div className="flex flex-col gap-3 mt-7">
                        <button className='capitalize py-2 px-8 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>Login In<FontAwesomeIcon icon={faUserCheck} className='text-xl' /></button>
                        <div className="flex items-center gap-2">
                            <Link to={'/account'} className='capitalize py-2 px-8 rounded-3xl bg-white text-gray-900 border-gray-900 border-2 font-semibold flex items-center gap-3 w-fit'>Sign Up <FontAwesomeIcon icon={faUserPlus} className='text-xl' /></Link>
                            <p className="font-semibold text-sm text-gray-400">if you don't have an account<br />become a member </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default WelcomeBack