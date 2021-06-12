import { Link } from "react-router-dom";
import { useState } from "react";

import { Image } from "../styles";
const HikingTripsItem = (props) => {
  const hikingTrip = props.hikingTrip;
  const [photo, setPhoto] = useState(props.hikingTrip.image);
  return (
    <div>
      <Link to={`/hikingTrips/${hikingTrip.slug}`}>
        <Image src={photo} 
        onMouseOver={() => setPhoto(props.hikingTrip.imageb)}
        onMouseLeave={() => setPhoto(props.hikingTrip.image)}
        />
      </Link>

      <h6>{hikingTrip.name}</h6>
      <p>{hikingTrip.difficulty}</p>
    </div>
  );
};

export default HikingTripsItem;
