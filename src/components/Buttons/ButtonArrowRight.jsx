import { MoveRight } from "lucide-react";

export default function ButtonArrowRight({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" flex w-1/2 items-center justify-end border-2 border-yrgo-red bg-white p-4"
    >
      <p className="mr-4 font-extrabold uppercase  text-yrgo-red">{children}</p>
      <MoveRight className=" stroke-yrgo-red" />
    </button>
  );
}
