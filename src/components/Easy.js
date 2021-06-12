import { List } from "../styles";
import HikingTripsItem from "./HikingTripsItem";

const Easy = (props) => {
  let tripsArray2 = props.hikingTrips
    .filter((hikingTrip) => hikingTrip.difficulty === "Easy")

    .map((hikingTrip) => (
      <HikingTripsItem hikingTrip={hikingTrip} key={hikingTrip.id} />
    ));

  return (
    <div>
      <List>{tripsArray2}</List>
    </div>
  );
};

export default Easy;
