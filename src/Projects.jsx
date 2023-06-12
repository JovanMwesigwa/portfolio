import './App.css'
import Layout from './components/Layout'

function Projects() {
  return (
    <Layout>
      {/* name */}

      {/* main */}
      <main className="mt-8">
        <div className="mb-8">
          <h1 className="text-xl font-bold ">Projects</h1>
        </div>

        <div className="flex-row items-center justify-between gap-9 flex-wrap grid grid-cols-2 ">
          {/*  */}
          <a
            href="https://tesacco.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">TeSACCO</h1>
                <p className="text-sm">
                  This is a joint group savings smart contract that emulates the
                  famous SACCOs in African.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://parkidapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">ParkiDapp</h1>
                <p className="text-sm">
                  A Web3 decentralized Parking Tickets DApp deployed on Polygon
                  Matic
                </p>
              </div>
            </div>
          </a>

          {/*  */}
          <a
            href="https://bookabie-next-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">BooWiiPlay (Music)</h1>
                <p className="text-sm">GETTING YOUR MUSIC TO RADIO, TV</p>
              </div>
            </div>
          </a>

          {/* More */}
          <a
            href="https://www.linkedin.com/in/jovan-mwesigwa/details/projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer justify-center border-stone-700 border-2 rounded-md border-dotted">
              <h1 className="text-lg font-semibold">See more projects</h1>
            </div>
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default Projects
