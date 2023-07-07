import { useEffect, useState } from "react"
import { BASEURL } from "../endpoint"
import axios from "axios"

const Lga = () => {
  const [lgaResult, setLgaResul] = useState([])
  const [totalVote, setTotalVote] = useState("")

  const getLocalGA = async () => {
    try {
      const {
        data: { response }
      } = await axios.get(`${BASEURL}lga`)
      setLgaResul(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const getTotalVote = async (id) => {
    try {
      const {
        data: { total }
      } = await axios.get(`${BASEURL}lga/${id}`)
      setTotalVote(total)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocalGA()
  }, [])
  return (
    <>
      <div className="md:grid grid-cols-3">
        <div className="list border-r border-r-gray-600  pr-20 text-left min-h-screen py-[20px]">
          <h1 className="my-3 text-3xl">Lga List</h1>
          {lgaResult.length &&
            lgaResult.map((result) => (
              <button key={result.uniqueid} className="block w-full bg-white rounded my-2 p-3" onClick={() => getTotalVote(result.uniqueid)}>
                {result.lga_name}
              </button>
            ))}
        </div>
        <div className="list flex-1  min-h-screen px-10 md:px-[100px] col-span-2 py-[20px]">
          <h1 className="my-3 text-3xl">Lga Result</h1>
          <p>Total Votes</p>
          {totalVote}
        </div>
      </div>
    </>
  )
}

export default Lga
