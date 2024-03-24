import { NavLink } from "react-router-dom"

const AccountHeader = () => {
  return (
    <div>
        <div className="flex items-center gap-2 sm:gap-4 text-gray-400">
            <NavLink to={'/new-product'} className={({isActive}) => isActive ? 'border px-4 sm:px-8 py-1 rounded-full font-semibold text-white bg-gray-500 text-sm sm:text-base' : 'border px-4 sm:px-8 py-1 rounded-full font-semibold text-sm sm:text-base'}>Account</NavLink>
            <NavLink to={'/user-settings'} className={({isActive}) => isActive ? 'border px-4 sm:px-8  py-1 rounded-full font-semibold text-white bg-gray-500 text-sm sm:text-base' : 'border px-4 sm:px-8 py-1 rounded-full font-semibold text-sm sm:text-base'}>User Settings</NavLink>
            <NavLink to={'/sales-analytics'} className={({isActive}) => isActive ? 'border px-4 sm:px-8 py-1 rounded-full font-semibold text-white bg-gray-500 text-sm sm:text-base' : 'border px-4 sm:px-8 py-1 rounded-full font-semibold text-sm sm:text-base'}>Sales Analytics</NavLink>
        </div>
    </div>
  )
}

export default AccountHeader