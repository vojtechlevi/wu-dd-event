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
          className={`flex w-1/2 items-center justify-start border-2 border-yrgo-${color} bg-white p-4`}
        >
          <MoveLeft className={`stroke-yrgo-${color}`} />
          <div className={`text-yrgo-${color} ml-4 font-extrabold  uppercase`}>
            {children}
          </div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex w-1/2 items-center justify-start border-2 border-yrgo-${color} bg-white p-4`}
        >
          <MoveLeft className={`stroke-yrgo-${color}`} />
          <div className={`text-yrgo-${color} ml-4 font-extrabold uppercase`}>
            {children}
          </div>
        </button>
      )}
    </>
  );
}
