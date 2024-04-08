import { Link } from "react-router-dom";

export default function ButtonTextCentered({
  children,
  onClick,
  isLink = false,
  linkTo,
}) {
  return (
    <>
      {isLink === true ? (
        <Link
          to={linkTo}
          className="flex items-center justify-start border-2 border-yrgo-red bg-white p-4"
        >
          <p className=" font-extrabold uppercase  text-yrgo-red">{children}</p>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="flex items-center justify-start border-2 border-yrgo-red bg-white p-4"
        >
          <p className=" font-extrabold uppercase  text-yrgo-red">{children}</p>
        </button>
      )}
    </>
  );
}
