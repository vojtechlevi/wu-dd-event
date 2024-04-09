import { Link } from "react-router-dom";

export default function ButtonTextCentered({
  children,
  onClick,
  isLink = false,
  linkTo,
  fullWidth = false,
}) {
  return (
    <>
      {isLink === true ? (
        <Link
          to={linkTo}
          className={`flex items-center justify-start border-2 border-yrgo-red bg-white p-4 ${fullWidth ? "w-full" : ""}`}
        >
          <div className="mx-auto font-extrabold uppercase text-yrgo-red">
            {children}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex items-center justify-start border-2 border-yrgo-red bg-white p-4 ${fullWidth ? "w-full" : ""}`}
        >
          <div className="mx-auto font-extrabold uppercase  text-yrgo-red">
            {children}
          </div>
        </button>
      )}
    </>
  );
}
