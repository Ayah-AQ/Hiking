import hikingTrips from "../hikingTrips";
import HikingTripsItem from "./HikingTripsItem";
import { List } from "../styles";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const HikingTripsList = (props) => {
  const [query, setQuery] = useState("");
  const [length, setLength] = useState(13);

  const tripsArray = hikingTrips
    .filter(
      (hikingTrip) =>
        hikingTrip.name.toUpperCase().includes(query.toUpperCase()) ||
        hikingTrip.city.toUpperCase().includes(query.toUpperCase()) ||
        hikingTrip.difficulty.toUpperCase().includes(query.toUpperCase())
    )
    .filter((hikingTrip) => hikingTrip.length < length)

    .map((hikingTrip) => (
      <HikingTripsItem hikingTrip={hikingTrip} key={hikingTrip.id} />
    ));

  console.log(length);

  return (
    <div>
      <SearchBar setQuery={setQuery} setLength={setLength} />
      <List>{tripsArray}</List>;
      <div class="dropdown">
        <button class="dropbtn">Sort By Trip difficulty</button>
        <div class="dropdown-content">
          <Link to="/hikingTrip/easy">Easy</Link>{" "}
          <Link to="/hikingTrip/medium">Medium</Link>
          <Link to="/hikingTrip/hard">Hard</Link>
        </div>
      </div>
      <input
        type="range"
        step="1"
        min="0"
        max="13"
        onChange={(event) => setLength(event.target.value)}
        value={length}
      />
      <p>{length}</p>
    </div>
  );
};
export default HikingTripsList;
