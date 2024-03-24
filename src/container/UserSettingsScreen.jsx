import DeleteUser from "../components/UserSettings/DeleteUser"
import UpdateUser from "../components/UserSettings/UpdateUser"
import UserSettingsHeader from "../components/UserSettings/UserSettingsHeader"

const UserSettingsScreen = () => {
  return (
    <div>
      <section>
        <UserSettingsHeader />
        <UpdateUser />
        <DeleteUser />
      </section>
    </div>
  )
}

export default UserSettingsScreen