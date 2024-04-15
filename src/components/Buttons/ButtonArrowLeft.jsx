import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function ButtonArrowLeft({
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
          className={`flex w-1/2 items-center justify-start border-r lg:w-48 lg:border-r-4 border-yrgo-${color} bg-white p-4`}
        >
          <svg
            width="24"
            height="24"
            viewBox="8 8 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 27L18.41 25.59L13.83 21H30V19H13.83L18.42 14.41L17 13L10 20L17 27Z"
              fill={color === "blue" ? "#001A52" : "#F52A3B"}
            />
          </svg>
          <div className={`text-yrgo-${color} ml-4 font-extrabold  uppercase`}>
            {children}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex w-1/2 items-center justify-start border-r lg:w-48 lg:border-r-4 border-yrgo-${color} bg-white p-4`}
        >
          <svg
            width="24"
            height="24"
            viewBox="8 8 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 27L18.41 25.59L13.83 21H30V19H13.83L18.42 14.41L17 13L10 20L17 27Z"
              fill={color === "blue" ? "#001A52" : "#F52A3B"}
            />
          </svg>

          <div className={`text-yrgo-${color} ml-4 font-extrabold uppercase`}>
            {children}
          </div>
        </button>
      )}
    </>
  );
}
