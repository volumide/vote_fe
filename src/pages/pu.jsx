/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { BASEURL } from "../endpoint"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Pu = () => {
  const [pollingUnit, setPollingUnit] = useState([])
  const [unitResult, setUnitResult] = useState([])
  const { id } = useParams()

  const getAllPollingUnit = async () => {
    try {
      const {
        data: { response }
      } = await axios.get(`${BASEURL}polling/units`)
      setPollingUnit(response)
    } catch (error) {
      console.log(error)
    }
  }

  const getUnitResult = async () => {
    try {
      const {
        data: { response }
      } = await axios.get(`${BASEURL}polling/unit/${id}`)
      setUnitResult(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    !id ? getAllPollingUnit() : getUnitResult()
  }, [id])

  return (
    <>
      <div className="md:grid grid-cols-3">
        <div className="list border-r border-r-gray-600  pr-20 text-left min-h-screen py-[20px]">
          <h1 className="my-3 text-3xl">Polling List</h1>
          {pollingUnit.length ? (
            pollingUnit.map(
              (unit, i) =>
                unit.polling_unit_name && (
                  <Link className="shadow p-5 rounded my-2 bg-white block capitalize" key={i + "_" + unit.polling_unit_id} to={`/pu/${unit.uniqueid}`}>
                    {unit.polling_unit_name}
                  </Link>
                )
            )
          ) : (
            <p>Results here</p>
          )}
        </div>

        <div className="list flex-1  min-h-screen px-10 md:px-[100px] col-span-2 py-[20px] sticky top-0">
          <h1 className="my-3 text-3xl">Polling Result</h1>
          {unitResult.length && id
            ? unitResult.map((result) => (
                <div key={result.result_id} className="p-2 ">
                  <p className="flex items-center gap-5">
                    <span className="w-[70px]">{result.party_abbreviation} :</span> <small>{result.party_score}</small>
                  </p>
                </div>
              ))
            : ""}
          <p className="py-2"> {unitResult && id ? <>Total Votes: {unitResult.reduce((a, b) => a + b.party_score, 0)}</> : ""} </p>
        </div>
      </div>
    </>
  )
}

export default Pu
