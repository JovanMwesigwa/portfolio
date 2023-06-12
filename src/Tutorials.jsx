import './App.css'
import Layout from './components/Layout'

function Tutorials() {
  return (
    <Layout>
      {/* name */}

      {/* main */}
      <main className="mt-8">
        <div className="mb-8">
          <h1 className="text-xl font-bold ">Popular Tutorials</h1>
        </div>

        <div className="flex-row items-center justify-between gap-9 flex-wrap grid grid-cols-2 ">
          {/*  */}
          <a
            href="https://celo.academy/t/optimizing-gas-consumption-in-celo-smart-contracts-a-step-by-step-guide/151"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md flex-1"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">
                  Optimizing Gas Consumption in Celo Smart Contracts A
                  Step-by-Step Guide{' '}
                </h1>
                <p className="text-sm">
                  Explore some techniques for minimizing gas usage in Solidity
                  smart contracts
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://celo.academy/t/build-a-fullstack-token-swap-application-on-celo-using-react-and-0x-api/150/2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">
                  Build a FullStack Token Swap Application on Celo using React
                  and 0x
                </h1>
                <p className="text-sm">
                  Build a full-stack token swap application on the Celo
                  blockchain using React and 0x API.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://celo.academy/t/how-to-automate-your-smart-contract-verification-programmatically-on-celoscan-using-hardhat-on-every-deployment/229"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">
                  Automate Your Smart Contract Verification using Hardhat
                </h1>
                <p className="text-sm">
                  Explore the best practices for smart contract development and
                  writing a deploy script.
                </p>
              </div>
            </div>
          </a>

          {/* More */}
          <a
            href="https://celo.academy/u/jovan/activity/topics"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer justify-center border-stone-700 border-2 rounded-md border-dotted">
              <h1 className="text-lg font-semibold">See More tutorials</h1>
            </div>
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default Tutorials
