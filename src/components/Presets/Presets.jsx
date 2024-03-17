import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Presets = () => {
    const [presets, setPresets] = useState()
    useEffect(() => {
        const fetchPresets = async () => {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setPresets(data.products)
        } 
        
        fetchPresets()
    }, [])
  return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-3 ">
      {presets?.map(p => (
        <Link to={`/presets/${p.id}`}>
        <div className="relative cursor-pointer h-72 rounded-3xl hover:shadow-2xl hover:shadow-blue-300 transition-all ">
            <img
                src={p.thumbnail} 
                alt=""
                className=" rounded-3xl w-full h-full object-cover "
            />
            <div className="absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2 text-white">
                <p className="text-sm font-semibold flex items-center gap-2 text-blue-600">
                    John Doe <FontAwesomeIcon icon={faShare} />
                </p>
                <p className="font-bold text-lg flex text-blue-600">
                    {p.rating}{" "}
                    <sup className="text-xs font-semibold flex items-center gap-2">
                    (125){" "}
                    <p>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon
                        icon={faStar}
                        className=" text-black"
                        />
                    </p>
                    </sup>
                </p>
                </div>
                <div>
                <p className="uppercase py-1 text-sm px-3 rounded-2xl bg-white text-red-600 font-semibold">
                    Trending
                </p>
                </div>
            </div>
            <div className=" mb-4 ">
                <p className="text-white font-bold text-3xl ">$ {p.price}</p>
                <h2 className="text-2xl capitalize text-blue-600 py-1 px-3 rounded-2xl bg-gray-200">
                {p.title}
                </h2>
            </div>
            </div>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Presets