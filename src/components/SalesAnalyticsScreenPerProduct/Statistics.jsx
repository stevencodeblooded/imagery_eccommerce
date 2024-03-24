import { faLocationArrow, faShare, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import product from '../../assets/product.jpg'

const Statistics = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-gray-500 mb-20">
      <section>
        <h2 className="uppercase font-medium text-base mb-10">Statistics</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className='relative sm:w-1/3' >
            <img src={product} alt="" className=' rounded-3xl object-cover' />
            <div className='absolute top-0 w-full h-full px-5 py-4 flex flex-col justify-between'>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-2 text-white'>
                  <p className='text-sm font-semibold flex items-center gap-2'>John Doe <FontAwesomeIcon icon={faShare} /></p>
                </div>
                <div>
                    <p className='uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold'>specific</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 text-white'>
                <div className='font-bold text-lg flex'>4.95 
                    <sup className='text-xs font-semibold flex items-center gap-2'>(125) 
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} className=' text-black' />
                      </span>
                    </sup>
                  </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:w-2/3">
            <div className="flex gap-2">
              <div className="w-1/2 border-2 rounded-xl p-3 hover:bg-gray-300 border-gray-300 transition-all">
                <h2 className="text-5xl font-semibold mb-8">12</h2>
                <p className="uppercase font-semibold">Total sold</p>
              </div>
              <div className="w-1/2 border-2 rounded-xl p-3 hover:bg-gray-300 border-gray-300 transition-all">
                <h2 className="text-5xl font-semibold mb-8">$ 499</h2>
                <p className="uppercase font-semibold">money earned</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="border-2 rounded-xl p-3 hover:bg-gray-300 border-gray-300 transition-all">
                <h2 className="text-5xl font-semibold mb-8">80</h2>
                <p className="uppercase font-semibold">views</p>
              </div>
              <div className="border-2 rounded-xl p-3 hover:bg-gray-300 border-gray-300 transition-all">
                <h2 className="text-5xl font-semibold mb-8">3.95</h2>
                <p className="uppercase font-semibold">rate</p>
              </div>
              <div className="border-2 rounded-xl p-3 hover:bg-gray-300 border-gray-300 transition-all">
                <h2 className="text-5xl font-semibold mb-8">1.25%</h2>
                <p className="uppercase font-semibold">conversion</p>
              </div>
              <div className="border-2 rounded-xl p-3 hover:bg-gray-300 border-gray-300 transition-all">
                <h2 className="text-5xl font-semibold mb-8"><FontAwesomeIcon icon={faLocationArrow} /></h2>
                <p className="uppercase font-semibold">more details</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Statistics