import HikingTripsItem from "./HikingTripsItem";
import { List } from "../styles";

const Medium = (props) => {
  let tripsArray4 = props.hikingTrips
    .filter((hikingTrip) => hikingTrip.difficulty === "Medium")

    .map((hikingTrip) => (
      <HikingTripsItem hikingTrip={hikingTrip} key={hikingTrip.id} />
    ));
  return (
    <div>
      <List>{tripsArray4}</List>
    </div>
  );
};

export default Medium;
