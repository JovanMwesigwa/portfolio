import './App.css'
import Layout from './components/Layout'

function Articles() {
  return (
    <Layout>
      {/* name */}

      {/* main */}
      <main className="mt-8">
        <div className="mb-8">
          <h1 className="text-xl font-bold ">Articles</h1>
        </div>

        <div className="flex-row items-center justify-between gap-9 flex-wrap grid grid-cols-2 ">
          {/*  */}
          <a
            href="https://unrealtechblog.hashnode.dev/testing-your-smart-contracts-with-hardhat-ethers-chai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md flex-1"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">
                  Testing your smart contracts with hardhat, ethers & Chai
                </h1>
                <p className="text-sm">
                  Ensure trust in your code when building smart contracts.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://unrealtechblog.hashnode.dev/build-a-web3-microfinance-support-group-system-sacco-using-solidity-smart-contract"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer">
              <div className="flex bg-stone-700 w-full h-full rounded-md"></div>
              <div className="py-3">
                <h1 className="text-lg font-semibold">
                  Build a Web3 Microfinance support group system (SACCO)
                </h1>
                <p className="text-sm">
                  Smart Contracts are simply programs of code that are stored on
                  the block chain.
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
                  What are EVMs? -- How do they work?
                </h1>
                <p className="text-sm">
                  Ethereum Virtual Machine simply explained ---
                </p>
              </div>
            </div>
          </a>

          {/* More */}
          <a
            href="https://unrealtechblog.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*  */}
            <div className="flex flex-1 flex-col items-center h-72 cursor-pointer justify-center border-stone-700 border-2 rounded-md border-dotted">
              <h1 className="text-lg font-semibold">See More articles</h1>
            </div>
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default Articles
