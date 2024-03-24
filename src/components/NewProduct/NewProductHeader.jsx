import AccountHeader from "../../shared/AccountHeader"

const NewProductHeader = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-20">
        <div className="mt-14 mb-16">
            <h1 className="text-5xl uppercase font-medium mb-12">sell <br /><span className=" font-extrabold">new product</span></h1>
            <AccountHeader />
        </div>
    </div>
  )
}

export default NewProductHeader