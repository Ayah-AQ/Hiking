import { Redirect, useParams } from "react-router-dom";
import { DesImg,Discription } from "../styles";
import { List } from "../styles";
import HikingTripsItem from "./HikingTripsItem";

const TripDetails = (props) => {
  const hikingTripSlug = useParams().hikingTripSlug;

  const hikingTripa = props.hikingTrips.find(
    (hikingTrip) => hikingTrip.slug === hikingTripSlug
  );
  if (!hikingTripa) return <Redirect to="/" />;

  const recommended = props.hikingTrips
    .filter(
      (hikingTrip) =>
        hikingTrip.difficulty === hikingTripa.difficulty &&
        hikingTrip.name !== hikingTripa.name
    )
    .map((hikingTrip) => (
      <HikingTripsItem hikingTrip={hikingTrip} key={hikingTrip.id} />
    ));
  return (
    <div>
      <DesImg src={hikingTripa.image} alt={hikingTripa.name} />
      <Discription className='Name'>{hikingTripa.name}</Discription>
      <Discription className='data'>{hikingTripa.city}</Discription>
      <Discription className='data'>{hikingTripa.difficulty}</Discription>
      <Discription className='data'>{hikingTripa.length}km</Discription>
      <Discription className='data'>{hikingTripa.description}</Discription>
      <List className='title'>Recommended </List>
      <List>{recommended}</List>
      
    </div>
  );
};

export default TripDetails;
