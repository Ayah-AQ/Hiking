import { Link } from "react-router-dom";
import {Button ,Not}from "../styles"
const PageNotFound = () => {
  return (
    <div>
      <Not>This page does not exist!</Not>
      <Link to="/">
        <Button>Go back home!</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
