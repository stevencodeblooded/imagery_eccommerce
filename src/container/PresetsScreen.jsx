import DisplayPresets from "../components/Presets/DisplayPresets"
import FilterPresets from "../components/Presets/FilterPresets"
import SearchPresetHeader from "../components/Presets/SearchPresetHeader"

const PresetsScreen = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <SearchPresetHeader />
        <FilterPresets />
        <DisplayPresets />
      </section>
    </div>
  )
}

export default PresetsScreen