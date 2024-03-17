const HeaderCarousel = ({props}) => {
  return (
    <div className=" max-w-6xl mx-auto px-4 py-10 my-24">
      <img src={props?.thumbnail} alt="" className="rounded-2xl object-left-top w-full h-96" />
    </div>
  )
}

export default HeaderCarousel