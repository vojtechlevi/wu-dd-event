import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function ButtonArrowRight({
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
          className=" flex w-1/2 items-center justify-end border-2 border-yrgo-red bg-white p-4"
        >
          <div className="mr-4 font-extrabold uppercase  text-yrgo-red">
            {children}
          </div>
          <MoveRight className=" stroke-yrgo-red" />
        </Link>
      ) : (
        <button
          onClick={onClick}
          className=" flex w-1/2 items-center justify-end border-2 border-yrgo-red bg-white p-4"
        >
          <div className="mr-4 font-extrabold uppercase  text-yrgo-red">
            {children}
          </div>
          <MoveRight className=" stroke-yrgo-red" />
        </button>
      )}
    </>
  );
}
