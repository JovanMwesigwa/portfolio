import './App.css'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      {/* name */}

      <div className="my-4 flex w-full flex-col md:flex-row md:items-center justify-between">
        <div className="">
          <h1 className="md:text-3xl font-bold">Jovan Mwesigwa B</h1>
          <p className="md:text-base ">
            Software Developer (Blockchain / Solidity / Solana)
          </p>
        </div>

        <div className="h-10 w-10 mt-4 md:mt-0 md:h-16 md:w-16 bg-stone-700 rounded-full">
          <img src="/me.png" alt="" />
        </div>
      </div>

      {/* main */}
      <main className="mt-8">
        <div className="">
          <h1 className="text-xl font-bold ">Work</h1>
          <p className="mt-5  ">
            Jovan is a freelance and a full-stack developer with a passion for
            building digital services. He has a knack for all things launching
            products, from planning and designing all the way to solving
            real-life problems with code. Currently, he is living off of his own
            products called{' '}
            <span className="text-yellow-400">
              <a
                href="https://play.google.com/store/apps/details?id=com.shukuruapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shukuru
              </a>
            </span>{' '}
            and{' '}
            <span className="text-yellow-400">
              <a
                href="https://oneramp.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneRamp
              </a>
            </span>
            . He publishes programing tutorials for{' '}
            <span className="text-purple-500 font-bold">
              <a
                href="https://celo.academy/u/jovan/activity/topics"
                target="_blank"
                rel="noopener noreferrer"
              >
                Celo Academy
              </a>
            </span>{' '}
            and his personal social pages that he uses to promote his products.
          </p>

          <div className="my-8">
            <h1 className="text-xl font-bold  mb-5">Bio</h1>

            <div className="flex flex-row items-center">
              <h2 className="text-base font-bold">2019</h2>
              <h2 className="ml-4">
                Completed the Bachelors Of Telecom Engineering at Kyambogo
                University
              </h2>
            </div>

            <div className="flex flex-row ">
              <h2 className="text-base font-bold">2020</h2>
              <h2 className="ml-4">
                Completed the Full Stack React Coding Bootcamp at Serenity
                Solutions Makerere Universtiy
              </h2>
            </div>

            <div className="flex flex-row ">
              <h2 className="text-base font-bold">2021</h2>
              <h2 className="ml-4">
                Worked at Supercomm Telecommunications (FullStack Developer)
              </h2>
            </div>

            <div className="flex flex-row ">
              <h2 className="text-base font-bold">2022</h2>
              <h2 className="ml-4">
                Coding Instructor at Razor Tech Solutions Kabalagala (Python &
                JavaScript)
              </h2>
            </div>

            <div className="flex flex-row ">
              <h2 className="text-base font-bold">2022 - Present</h2>
              <h2 className="ml-4">Working as a freelancer</h2>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-bold ">On the web</h1>

          <a
            href="https://github.com/jovanmwesigwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center my-4 cursor-pointer">
              <div className="h-5 mr-3 w-5 rounded-full bg-emerald-200 "></div>
              <h2 className=" text-emerald-200 font-bold">
                Github/JovanMwesigwa
              </h2>
            </div>
          </a>

          {/* twitter */}
          <a
            href="https://twitter.com/unreal_joova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center my-4 cursor-pointer">
              <div className="h-5 mr-3 w-5 rounded-full bg-emerald-200 "></div>
              <h2 className=" text-emerald-200 font-bold">
                Twitter/@unreal_joova
              </h2>
            </div>
          </a>

          {/* Github */}
          <a
            href="https://www.linkedin.com/in/jovan-mwesigwa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center my-4 cursor-pointer">
              <div className="h-5 mr-3 w-5 rounded-full bg-emerald-200 "></div>
              <h2 className=" text-emerald-200 font-bold">
                LinkedIn/jovan-mwesigwa
              </h2>
            </div>
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default App
