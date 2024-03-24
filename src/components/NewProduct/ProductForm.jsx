import { faMagnifyingGlass, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
  });

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prevFormData => ({
          ...prevFormData,
          [key]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 my-16 text-gray-500">
      <form>
        <h2 className="uppercase font-medium text-base mb-10">Main Info</h2>
        <div className="w-full mb-20 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input type="text" name="title" placeholder="Product Name / Title" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
          <input type="number" name="price" placeholder="Price in KES" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" />
          <textarea name="description" rows={'5'} placeholder="Description" className=" border-b-2 border-b-gray-300 p-2 focus:outline-dashed font-semibold" ></textarea>
        </div>
        <h2 className="uppercase font-medium text-base mb-10">Pictures</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10'>
          {[1, 2, 3, 4, 5, 6].map(index => (
            <div key={index} className="flex flex-col justify-between h-96 rounded-3xl border border-dashed border-gray-300">
              {formData[`image${index}`] ? (
                <img src={formData[`image${index}`]} alt="Uploaded" className="max-w-full h-4/5 rounded-t-3xl object-cover" />
              ) : (
                <p className="p-3 font-semibold text-gray-400">Drag Image Here <span className='text-gray-300'>(PNG, JPG, WEBP)</span></p>
              )}
              <label htmlFor={`fileInput${index}`} className="uppercase h-1/5 font-semibold cursor-pointer text-blue-500 px-3 py-7 bg-gray-200 rounded-b-3xl">
                Upload Picture
              </label>
              <input
                type="file"
                id={`fileInput${index}`}
                className="hidden"
                accept=".png, .jpg, .jpeg, .webp"
                onChange={(e) => handleFileChange(e, `image${index}`)}
              />
            </div>
          ))}
        </div>

       <div className='flex items-center w-full justify-between sm:w-1/3 gap-4 mt-20'>
         <button className='capitalize py-2 px-8 rounded-3xl bg-gray-100 text-gray-900 font-semibold flex items-center gap-3 w-fit'>Preview<FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl' /></button>
         <button className='capitalize py-2 px-8 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>Publish<FontAwesomeIcon icon={faUpload} className='text-xl' /></button>
       </div>
      </form>
    </div>
  )
}

export default ProductForm