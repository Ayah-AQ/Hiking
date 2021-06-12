import HikingTripsItem from "./HikingTripsItem";
import { List } from "../styles";

const Hard = (props) => {
  let tripsArray3 = props.hikingTrips
    .filter((hikingTrip) => hikingTrip.difficulty === "Hard")

    .map((hikingTrip) => (
      <HikingTripsItem hikingTrip={hikingTrip} key={hikingTrip.id} />
    ));
  return (
    <div>
      <List>{tripsArray3}</List>
    </div>
  );
};

export default Hard;
