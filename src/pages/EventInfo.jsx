import { Link } from "react-router-dom";

const EventInfo = () => {
  return (
    <div>
      <p>this is the eventinfo page</p>
      <Link to={"/"} className="text-blue-500 underline">
        home
      </Link>
    </div>
  );
};

export default EventInfo;
