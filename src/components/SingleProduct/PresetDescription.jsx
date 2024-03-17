import { faCartArrowDown, faComputer, faFrancSign, faMoneyBill1Wave, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PresetDescription = ({props}) => {
  return (
    <div  className=" max-w-6xl mx-auto px-4 py-10 my-0 md:my-24">
      <div className="flex flex-col md:flex-row gap-10 text-gray-500">
        <p className="text-3xl font-semibold uppercase w-full md:w-1/2">{props?.description}</p>
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-10">
          <div className="flex flex-col items-start gap-4">
            <FontAwesomeIcon icon={faCartArrowDown} className="text-3xl" />
            <p>Instant Download</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FontAwesomeIcon icon={faComputer} className="text-3xl"  />
            <p>Mobile & Desktop</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FontAwesomeIcon icon={faFrancSign} className="text-3xl"  />
            <p>Free Preview</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-3xl"  />
            <p>One Time Payment</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FontAwesomeIcon icon={faQuestion} className="text-3xl"  />
            <p>24/7 Support</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PresetDescription