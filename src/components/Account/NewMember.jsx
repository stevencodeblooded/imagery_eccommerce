import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
 
const NewMember = () => {
  return (
    <div className=" max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
            <h1 className="text-5xl uppercase font-medium">Become a new member <br /><span className=" font-extrabold">of the imagery</span></h1>
            <form>
                <div className="w-full mb-20 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-500">
                    <input type="text" name="" placeholder="Name" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold"  />
                    <input type="text" name="" placeholder="Surname" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
                    <input type="email" name="" placeholder="Email" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
                    <input type="tel" name="" placeholder="Phone" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
                    <select name="" id="" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold">
                        <option value="Select">Select</option>
                        <option value="Seller">Seller</option>
                        <option value="Buyer">Buyer</option>
                    </select>
                </div>
                <div className="w-full mb-6 md:w-1/2 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-500">
                    <input type="password" name="password" placeholder="Password" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold"/>
                    <input type="password" name="cpassword" placeholder="Confirm Password" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
                </div>
                <div className="text-gray-500 mb-20 flex gap-2 items-center">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms" className="capitalize font-semibold text-sm">I do accept the terms and conditions of your site</label>
                </div>

                <div className="flex flex-col gap-3">
                    <button className='capitalize py-2 px-8 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>Sign Up <FontAwesomeIcon icon={faUserPlus} className='text-xl' /></button>
                    <div className="flex items-center gap-2">
                        <Link to={'/login'} className='capitalize py-2 px-8 rounded-3xl bg-white text-gray-900 border-gray-900 border-2 font-semibold flex items-center gap-3 w-fit'>Log in <FontAwesomeIcon icon={faUserCheck} className='text-xl' /></Link>
                        <p className="font-semibold text-sm text-gray-400">if you already <br /> have an account</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewMember