import { faTrash, faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DeleteUser = () => {
  return (
    <div className="bg-red-100 py-12">
        <section className="max-w-6xl mx-auto px-4 text-red-800">
            <form className="w-full lg:w-3/4  flex flex-col gap-10">
                <h2 className="uppercase font-medium text-base">Danger Area</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="password" name="password" placeholder="New Password" className=" border-b-2 border-b-red-800 p-2 focus:outline-dashed font-semibold bg-transparent"/>
                    <input type="password" name="password" placeholder="Confirm Password" className=" border-b-2 border-b-red-800 p-2 focus:outline-dashed font-semibold bg-transparent"/>
                </div>
                <button className='capitalize py-2 px-12 rounded-3xl bg-red-900 text-white font-semibold flex items-center gap-3 w-fit'>Set <FontAwesomeIcon icon={faWrench} className='text-xl' /></button>
            </form>

            <form className="mt-24 border-b-2 border-b-red-900 pb-2 w-fit ">
                <button className="capitalize px-3 py-1 rounded-3xl font-semibold flex items-center gap-3 w-fit hover:border-dotted border border-red-900">Delete my Account <FontAwesomeIcon icon={faTrash} /></button>
            </form>
        </section>
    </div>
  )
}

export default DeleteUser