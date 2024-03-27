import { MoveRight } from "lucide-react";

export default function ButtonArrowRight({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mr-4 flex w-1/2 items-center justify-end border-l border-yrgo-red py-4"
    >
      <p className="mr-4 font-extrabold uppercase  text-yrgo-red">{children}</p>
      <MoveRight className=" stroke-yrgo-red" />
    </button>
  );
}
