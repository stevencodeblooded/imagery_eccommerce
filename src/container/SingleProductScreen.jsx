import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import HeaderCarousel from '../components/SingleProduct/HeaderCarousel'
import PresetDescription from '../components/SingleProduct/PresetDescription'
import PresetReviews from "../components/SingleProduct/PresetReviews";
import TrendingSellerPresets from "../components/SingleProduct/TrendingSellerPresets";
import AboutPresetSeller from "../components/SingleProduct/AboutPresetSeller";

const SingleProductScreen = () => {
  const {id} = useParams()
  const [singleProduct, setSingleProduct] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setSingleProduct(data)
    }

    fetchData()
  }, [])
  
  return (
    <div className="py-8">
      <HeaderCarousel props={singleProduct} />
      <PresetDescription props={singleProduct} />
      <PresetReviews />
      <AboutPresetSeller />
      <TrendingSellerPresets />
    </div>
  )
}

export default SingleProductScreen