import { X } from "lucide-react";

const GdprModal = ({ ...props }) => {
  return (
    <>
      <div
        className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm `}
      >
        <div
          className={` relative mt-12 flex h-[230px] w-[390px] flex-col items-center justify-center bg-${props.color} text-white`}
        >
          <X
            onClick={() => props.setModal(!props.modal)}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <p className="w-[90%]">
            Genom att fortsätta samtycker du till att vi samlar in och behandlar
            dina personuppgifter enligt GDPR.
          </p>
          <button
            onClick={props.handleSubmit}
            className=" absolute bottom-4 right-4 mt-4 cursor-pointer border-[1px] border-white px-4 py-2 uppercase"
          >
            Fortsätt
          </button>
        </div>
      </div>
    </>
  );
};

export default GdprModal;
