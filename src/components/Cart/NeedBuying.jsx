import { faCircleCheck, faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import product from '../../assets/product.jpg'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"

const NeedBuying = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
          <h1 className="text-5xl uppercase font-medium">Great <span className=" font-extrabold">Jones!</span> <br />here's your cart</h1>

          <Link to={'/presets'} className='capitalize py-2 px-8 rounded-3xl bg-white text-gray-900 border-gray-900 border-2 font-semibold flex items-center gap-3 w-fit'>Back 2 Shop <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} className='text-xl' /></Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className=" h-96 flex flex-col justify-between border-2 border-gray-200 rounded-3xl">
              <div className="relative text-white">
                <img src={product}alt="" className="w-full rounded-3xl object-cover h-72" />
                <div className="absolute top-3 left-3 font-semibold">
                  <h2 className=" text-2xl">4.95 <sup className="text-sm">(125)</sup></h2>
                  <h1 className="text-3xl">Soulful Keys</h1>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="text-3xl font-semibold text-gray-500">$ 10.99</h3>
                <form>
                  <button className='capitalize py-1 px-3 rounded-3xl bg-white text-gray-300 border-gray-300 hover:border-red-900 hover:text-red-900 transition-all border font-semibold flex items-center gap-2 w-fit'>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                </form>
              </div>
            </div>
            <div className=" h-96 flex flex-col justify-between border-2 border-gray-200 rounded-3xl">
              <div className="relative text-white">
                <img src={product}alt="" className="w-full rounded-3xl object-cover h-72" />
                <div className="absolute top-3 left-3 font-semibold">
                  <h2 className=" text-2xl">4.95 <sup className="text-sm">(125)</sup></h2>
                  <h1 className="text-3xl">Soulful Keys</h1>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="text-3xl font-semibold text-gray-500">$ 10.99</h3>
                <form>
                  <button className='capitalize py-1 px-3 rounded-3xl bg-white text-gray-300 border-gray-300 hover:border-red-900 hover:text-red-900 transition-all border font-semibold flex items-center gap-2 w-fit'>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                </form>
              </div>
            </div>
            <div className=" h-96 flex flex-col justify-between border-2 border-gray-200 rounded-3xl">
              <div className="relative text-white">
                <img src={product}alt="" className="w-full rounded-3xl object-cover h-72" />
                <div className="absolute top-3 left-3 font-semibold">
                  <h2 className=" text-2xl">4.95 <sup className="text-sm">(125)</sup></h2>
                  <h1 className="text-3xl">Soulful Keys</h1>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="text-3xl font-semibold text-gray-500">$ 10.99</h3>
                <form>
                  <button className='capitalize py-1 px-3 rounded-3xl bg-white text-gray-300 border-gray-300 hover:border-red-900 hover:text-red-900 transition-all border font-semibold flex items-center gap-2 w-fit'>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                </form>
              </div>
            </div>
            <div className=" h-96 flex flex-col justify-between border-2 border-gray-200 rounded-3xl">
              <div className="relative text-white">
                <img src={product}alt="" className="w-full rounded-3xl object-cover h-72" />
                <div className="absolute top-3 left-3 font-semibold">
                  <h2 className=" text-2xl">4.95 <sup className="text-sm">(125)</sup></h2>
                  <h1 className="text-3xl">Soulful Keys</h1>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="text-3xl font-semibold text-gray-500">$ 10.99</h3>
                <form>
                  <button className='capitalize py-1 px-3 rounded-3xl bg-white text-gray-300 border-gray-300 hover:border-red-900 hover:text-red-900 transition-all border font-semibold flex items-center gap-2 w-fit'>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-8 font-semibold text-gray-400">
            <hr className="w-full border-t-2 border-t-gray-400"/>
            <div className="flex flex-col gap-5 px-4 pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="uppercase">INCL. VAT</p>
                <h4 className="font-bold text-gray-400">$ 00</h4>
              </div>
              <div className="flex items-center justify-between gap-3">
                <p className="uppercase">Total</p>
                <h2 className="text-3xl font-bold text-gray-700">$ 43.96</h2>
              </div>
            </div>
          </div>

          <form>
            <button className='capitalize py-2 px-8 rounded-3xl text-white bg-gray-900 font-semibold flex items-center gap-3 w-fit'>Checkout <FontAwesomeIcon icon={faCircleCheck} className="text-xl" /></button>
          </form>
        </div>
    </div>
  )
}

export default NeedBuying