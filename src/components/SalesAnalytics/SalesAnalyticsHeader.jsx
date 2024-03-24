import AccountHeader from "../../shared/AccountHeader"

const SalesAnalyticsHeader = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-20">
        <section className="mt-14 mb-16" >
            <h1 className="text-5xl uppercase font-medium mb-12">Sales <span className=" font-extrabold"><br /> Analytics</span></h1>
            <AccountHeader />
        </section>
    </div>
  )
}

export default SalesAnalyticsHeader