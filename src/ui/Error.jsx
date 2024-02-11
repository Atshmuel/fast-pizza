import { useRouteError } from "react-router-dom";
import Links from "./components/Links";

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error?.message}</p>
      <Links to={"-1"}>&larr; Go back</Links>
    </div>
  );
}

export default NotFound;
