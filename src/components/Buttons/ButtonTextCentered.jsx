import { Link } from "react-router-dom";

export default function ButtonTextCentered({
  children,
  onClick,
  isLink = false,
  linkTo,
  fullWidth = false,
  color = "red",
}) {
  return (
    <>
      {isLink === true ? (
        <Link
          to={linkTo}
          className={`flex items-center justify-start border-2 border-yrgo-${color} bg-white p-4 ${fullWidth ? "w-full" : ""}`}
        >
          <div
            className={`text-yrgo-${color} mx-auto font-extrabold uppercase`}
          >
            {children}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex items-center justify-start border-2 border-yrgo-${color} bg-white p-4 ${fullWidth ? "w-full" : ""}`}
        >
          <div
            className={`text-yrgo-${color} mx-auto font-extrabold  uppercase`}
          >
            {children}
          </div>
        </button>
      )}
    </>
  );
}
