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
          className={`flex w-1/2 items-center justify-end border-2 border-yrgo-${color} bg-white p-4`}
        >
          <div className={`text-yrgo-${color} mr-4 font-extrabold  uppercase`}>
            {children}
          </div>
          <MoveRight className={`stroke-yrgo-${color}`} />
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex w-1/2 items-center justify-end border-2 border-yrgo-${color} bg-white p-4`}
        >
          <div className={`text-yrgo-${color} mr-4 font-extrabold uppercase`}>
            {children}
          </div>
          <MoveRight className={`stroke-yrgo-${color}`} />
        </button>
      )}
    </>
  );
}
