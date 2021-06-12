import "./App.css";
import Home from "./components/Home";
import HikingTripsList from "./components/HikingTripsList";
import { Route, Switch } from "react-router";
import TripDetails from "./components/TripDetails";
import hikingTrips from "./hikingTrips";
import { Logo, Div } from "./styles";
import Easy from "./components/Easy";
import Medium from "./components/Medium";
import Hard from "./components/Hard";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div>
      <Div>
        <Logo to="/">
        <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/hiking-logo-design.jpg" alt="logo" />
        </Logo>

        <Logo to="hikingTrips" className='Trip'>Trips</Logo>
      </Div>
      <Switch>
        <Route path="/hikingTrips/:hikingTripSlug">
          <TripDetails hikingTrips={hikingTrips} />
        </Route>

        <Route path="/hikingTrips">
          <HikingTripsList />
        </Route>

        <Route path="/hikingTrip/medium">
          <Medium hikingTrips={hikingTrips} />
        </Route>
        <Route path="/hikingTrip/hard">
          <Hard hikingTrips={hikingTrips} />
        </Route>
        <Route path="/hikingTrip/easy">
          <Easy hikingTrips={hikingTrips} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
