import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function ButtonArrowRight({
  children,
  onClick,
  isLink = false,
  linkTo,
  color = "red",
}) {
  return (
    <>
      {isLink === true ? (
        <Link
          to={linkTo}
          className={`flex w-1/2 items-center justify-end border-l lg:w-48 lg:border-l-4 border-yrgo-${color} bg-white p-4`}
        >
          <div className={`text-yrgo-${color} mr-4 font-extrabold  uppercase`}>
            {children}
          </div>
          <svg
            width="24"
            height="24"
            viewBox="8 8 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 13L21.59 14.41L26.17 19H10V21H26.17L21.58 25.59L23 27L30 20L23 13Z"
              fill={color === "blue" ? "#001A52" : "#F52A3B"}
            />
          </svg>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex w-1/2 items-center justify-end border-l lg:w-48 lg:border-l-4 border-yrgo-${color} bg-white p-4`}
        >
          <div className={`text-yrgo-${color} mr-4 font-extrabold uppercase`}>
            {children}
          </div>

          <svg
            width="24"
            height="24"
            viewBox="8 8 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 13L21.59 14.41L26.17 19H10V21H26.17L21.58 25.59L23 27L30 20L23 13Z"
              fill={color === "blue" ? "#001A52" : "#F52A3B"}
            />
          </svg>
        </button>
      )}
    </>
  );
}
