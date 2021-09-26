import { React } from "react"

import "semantic-ui-css/semantic.min.css"
import "./App.css"
import { Container, Header } from "semantic-ui-react"
import VehicleGrid from "./components/VehicleGrid"

function App() {
  return (
    <div className="App">
      <div>
        <Container>
          <Header as="h2">Vehicle Crash App</Header>
          <VehicleGrid />
        </Container>
      </div>
    </div>
  )
}

export default App
