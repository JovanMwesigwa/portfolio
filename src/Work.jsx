import './App.css'
import Layout from './components/Layout'

function Work() {
  return (
    <Layout>
      {/* name */}

      {/* main */}
      <main className="mt-8">
        <div className="mb-8">
          <h1 className="text-xl font-bold ">Work</h1>
        </div>

        <div className="flex-row items-center justify-between gap-9 flex-wrap grid grid-cols-2 ">
          {/*  */}
          <a
            href="https://play.google.com/store/apps/details?id=com.shukuruapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md overflow-hidden">
                <img src="./shukuru.jpeg" alt="" className="w-full h-full" />
              </div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">Shukuru (App)</h1>
                <p className="text-sm">
                  Web3 wallet that allows users accept crypto payments (cUSD,
                  BUSD & BTC)
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://oneramp.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md overflow-hidden">
                <img src="./oneramp.png" alt="" className="w-full h-full" />
              </div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">OneRamp (SDK)</h1>
                <p className="text-sm">
                  Your One-Stop Crypto On- and Off-Ramping Solution
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.bookabie"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md overflow-hidden">
                <img src="./bookabie.jpeg" alt="" className="w-full h-full" />
              </div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">BookabieApp (App)</h1>
                <p className="text-sm">
                  Find awesome places and expirences around you
                </p>
              </div>
            </div>
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default Work
