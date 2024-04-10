import { ArrowRight } from "lucide-react";

import ButtonTextCentered from "../Buttons/ButtonTextCentered";

const SuccessModal = ({ ...props }) => {
  return (
    <>
      <div
        className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm `}
      >
        <div
          className={`mx-4 mt-12 flex flex-col items-start justify-center gap-4 border-2 border-yrgo-blue bg-white p-6 text-white`}
        >
          <h1 className="text-6xl font-extrabold uppercase text-yrgo-blue ">
            Tack!
          </h1>
          <p className="mb-4 mr-12 text-yrgo-blue">
            Dina uppgifter kommer nu finnas tillgängliga för våra studenter
            inför LIA-ansökningar 2024!
          </p>

          <ButtonTextCentered
            fullWidth={true}
            isLink={true}
            linkTo={props.linkTo}
          >
            <div className="flex w-full justify-center gap-4">
              <p>Läs mer OM EVENTET 24/4 </p>
              <ArrowRight />
            </div>
          </ButtonTextCentered>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
