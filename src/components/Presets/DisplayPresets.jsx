import Presets from "./Presets"

const DisplayPresets = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-1/4">
            <div>
                <h2 className="text-xl uppercase font-semibold text-gray-400 mb-6">Signature Presets</h2>
                <form className="flex flex-row sm:flex-col gap-4 text-base font-semibold mb-4">
                    <div className="flex gap-1 sm:gap-2 items-center">
                        <input type="checkbox" name="best-sellers" id="best-sellers" value='best-sellers' />
                        <label htmlFor="best-sellers" className="text-sm sm:text-base">Best Sellers</label>
                    </div>
                    <div className="flex gap-1 sm:gap-2 items-center">
                        <input type="checkbox" name="new-releases" id="new-releases" value="new-releases" />
                        <label htmlFor="new-releases" className="text-sm sm:text-base">New Releases</label>
                    </div>
                    <div className="flex gap-1 sm:gap-2 items-center">
                        <input type="checkbox" name="trending" id="trending" value="trending" />
                        <label htmlFor="trending"  className="text-sm sm:text-base">Trending</label>
                    </div>
                </form>
            </div>
        </div>
        <div className="w-full md:w-3/4 p-3 rounded-3xl">
            <Presets />
        </div>
    </div>
  )
}

export default DisplayPresets