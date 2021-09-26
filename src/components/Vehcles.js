import { Card, Grid } from "semantic-ui-react"
const Vehicle = props => {
  return (
    <Grid.Column id={props.data.collision_id}>
      <Card>
        <Card.Content header={props.data.on_street_name} />
        <Card.Content>
          <p>{props.data.vehicle_type_code1}</p>
          <p>{props.data.vehicle_type_code2}</p>
          <p>{props.data.crash_date}</p>
          <p>{props.data.crash_time}</p>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default Vehicle
