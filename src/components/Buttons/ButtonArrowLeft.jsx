import { MoveLeft } from "lucide-react";

export default function ButtonArrowLeft({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="ml-4 flex w-1/2 items-center justify-start border-r border-yrgo-red py-4"
    >
      <MoveLeft className=" stroke-yrgo-red" />
      <p className="ml-4 font-extrabold uppercase  text-yrgo-red">{children}</p>
    </button>
  );
}
