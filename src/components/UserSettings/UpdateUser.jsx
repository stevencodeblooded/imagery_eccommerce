import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UpdateUser = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
        <section className="text-gray-500 mb-16">
            <form>
                <h2 className="uppercase font-medium text-base mb-10">User Details</h2>
                <div className="w-full mb-20 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="text" name="name" placeholder="Name" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
                    <input type="text" name="surname" placeholder="Surname" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold"  />
                    <input type="tel" name="phone" placeholder="Phone" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold"  />
                </div>
                <div className="w-full mb-20 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="email" name="email" placeholder="Email" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold"/>
                    <input type="password" name="password" placeholder="Password" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold"/>
                </div>
                <button className='capitalize py-2 px-8 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>Update My Account <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /></button>
            </form>
        </section>
    </div>
  )
}

export default UpdateUser