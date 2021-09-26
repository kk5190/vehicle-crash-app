import { React, useEffect, useState } from "react"
import { Grid, Pagination, Icon, Input } from "semantic-ui-react"
import Vehicle from "./Vehcles"

const axios = require("axios")

function VehicleGrid() {
  const [data, setData] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [apiUrl, setApiUrl] = useState("https://data.cityofnewyork.us/resource/h9gi-nx95.json?$offset=0&$limit=10")
  const getData = apiUrl => {
    axios.get(apiUrl).then(function (response) {
      const data = response.data
      setData(data)
    })
  }
  useEffect(() => getData(apiUrl), [apiUrl])

  const onChange = e => {
    setActivePage(activePage)
    setApiUrl("https://data.cityofnewyork.us/resource/h9gi-nx95.json?$offset=" + activePage.toString() + "&$limit=10")
  }

  const search = e => {
    console.log(e.target.value)
    setApiUrl("https://data.cityofnewyork.us/resource/h9gi-nx95.json?$offset=0&$limit=10&crash_date" + e.target.value)
  }
  return (
    <>
      <Input icon={<Icon name="search" inverted circular link />} placeholder="Search..." onSearch={search} />
      <Grid columns="three">
        <Grid.Row>
          {data.map(datas => (
            <Vehicle data={datas} />
          ))}
        </Grid.Row>
      </Grid>

      <Pagination activePage={activePage} onPageChange={onChange} totalPages={10} ellipsisItem={null} />
    </>
  )
}

export default VehicleGrid
