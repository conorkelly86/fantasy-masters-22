import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import masters from '../data/data.json'

const Home: NextPage = () => {
  return (
    <div className="h-full bg-blue-100">
      <div className="pt-50 mx-15%">
        <Head>
          <title>Masters 2022</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mb-50 flex justify-center text-4xl">
          <h1>Fantasy Masters 2022</h1>
        </div>
        <div className="block text-center	">
          <p className="my-4 text-xs">
            Click your initial to scroll down to your score
          </p>
          {masters.map((master, key) => (
            <a href={'#' + master.id}>
              <button className="m-1 mb-3  rounded-full bg-blue-500 py-2 px-4 text-xs font-bold text-white hover:bg-blue-700">
                {master.initials}
              </button>
            </a>
          ))}
        </div>
        <main className="mt-2 inline-flex max-w-full flex-wrap justify-center">
          {masters.map((master, key) => (
            <table
              className="text-blueGray-700 mx-5 mb-6 max-w-full border-collapse flex-col items-center break-words rounded bg-white shadow-lg"
              id={master.id}
            >
              <thead className="thead-light ">
                <tr>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-500 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    {master.name}
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-500 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>

                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-500 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Pos
                  </th>
                  {/* <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-500 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Pts
                  </th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {master.golfer1}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g1flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g1position === 50 ? 'CUT' : master.g1position}
                  </td>
                  {/* <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                    {master.g1points}
                  </td> */}
                </tr>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {master.golfer2}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g2flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g2position === 50 ? 'CUT' : master.g2position}
                  </td>
                  {/* <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                    {master.g2points}
                  </td> */}
                </tr>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {master.golfer3}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g3flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g3position === 50 ? 'CUT' : master.g3position}
                  </td>
                  {/* <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                    {master.g3points}
                  </td> */}
                </tr>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs ">
                    {master.golfer4}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g4flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-lg ">
                    {master.g4position === 50 ? 'CUT' : master.g4position}
                  </td>
                  {/* <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                    {master.g4points}
                  </td> */}
                </tr>
              </tbody>

              <tfoot className="thead-light ">
                <tr>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-500 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Total
                  </th>

                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-500 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
                  <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-500 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    {master.g1position +
                      master.g2position +
                      master.g3position +
                      master.g4position}
                  </th>
                  {/* <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-500 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    {master.g1points +
                      master.g2points +
                      master.g3points +
                      master.g4points}
                  </th> */}
                </tr>
              </tfoot>
            </table>
          ))}
        </main>
        <footer className="flex h-24 w-full items-center justify-center border-t">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default Home
