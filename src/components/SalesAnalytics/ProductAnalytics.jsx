import { faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import product from '../../assets/product.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const ProductAnalytics = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
        <h2 className="uppercase font-medium text-base mb-10 text-gray-500">My Products</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Link to={'/sales-analytics/1'} className='relative cursor-pointer rounded-3xl hover:shadow-2xl hover:shadow-blue-300 transition-all' >
                <img src={product} alt="" className=' rounded-3xl w-full h-72 object-cover ' />
                <div className='absolute top-0 w-full h-full px-5 py-4 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2 text-white'>
                            <div className='font-bold text-lg flex gap-2'>4.95 
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
                    <div>
                        <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                    </div>
                </div>
            </Link>
            <Link to={'/sales-analytics/2'} className='relative cursor-pointer rounded-3xl hover:shadow-2xl hover:shadow-blue-300 transition-all'>
                <img src={product} alt="" className=' rounded-3xl w-full h-72 object-cover' />
                <div className='absolute top-0 w-full h-full px-5 py-4 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2 text-white'>
                            <div className='font-bold text-lg flex gap-2'>4.95 
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
                    <div>
                        <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                    </div>
                </div>
            </Link>
            <Link to={'/sales-analytics/3'} className='relative cursor-pointer rounded-3xl hover:shadow-2xl hover:shadow-blue-300 transition-all'>
                <img src={product} alt="" className=' rounded-3xl w-full h-72 object-cover' />
                <div className='absolute top-0 w-full h-full px-5 py-4 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2 text-white'>
                            <div className='font-bold text-lg flex gap-2'>4.95 
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
                    <div>
                        <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                    </div>
                </div>
            </Link>
            <Link to={'/sales-analytics/4'} className='relative cursor-pointer rounded-3xl hover:shadow-2xl hover:shadow-blue-300 transition-all'>
                <img src={product} alt="" className=' rounded-3xl w-full h-72 object-cover' />
                <div className='absolute top-0 w-full h-full px-5 py-4 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2 text-white'>
                            <div className='font-bold text-lg flex gap-2'>4.95 
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
                    <div>
                        <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                    </div>
                </div>
            </Link>
            <Link to={'/sales-analytics/5'} className='relative cursor-pointer rounded-3xl hover:shadow-2xl hover:shadow-blue-300 transition-all'>
                <img src={product} alt="" className=' rounded-3xl w-full h-72 object-cover' />
                <div className='absolute top-0 w-full h-full px-5 py-4 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2 text-white'>
                            <div className='font-bold text-lg flex gap-2'>4.95 
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
                    <div>
                        <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                    </div>
                </div>
            </Link>
            <Link to={'/sales-analytics/6'} className='relative cursor-pointer rounded-3xl hover:shadow-2xl hover:shadow-blue-300 transition-all'>
                <img src={product} alt="" className=' rounded-3xl w-full h-72 object-cover' />
                <div className='absolute top-0 w-full h-full px-5 py-4 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2 text-white'>
                            <div className='font-bold text-lg flex gap-2'>4.95 
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
                    <div>
                        <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ProductAnalytics