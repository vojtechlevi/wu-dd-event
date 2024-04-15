import ButtonArrowRight from "../Buttons/ButtonArrowRight";
import ButtonArrowLeft from "../Buttons/ButtonArrowLeft";

const BlueQuestionsModal = ({ ...props }) => {
  return (
    <>
      <main className="absolute  left-0 top-0 z-10 grid h-full w-full grid-rows-layout bg-yrgo-blue">
        <header className=" w-full">
          <div className={`h-12 w-full bg-yrgo-blue`}></div>
        </header>

        <section className="my-auto overflow-y-auto px-4 lg:mx-auto lg:my-auto">
          <h2 className="  p-4 text-2xl font-extrabold uppercase text-white  ">
            och nu några frågor med lite mer personlighet!
          </h2>
          <h2 className="p-4 text-2xl font-extrabold uppercase text-white  ">
            Är du redo?
          </h2>
        </section>

        <section className="mx-4 mb-4 flex  justify-between border-white lg:mx-16 lg:border-4">
          <ButtonArrowLeft color={"blue"} onClick={props.goBack}>
            tillbaka
          </ButtonArrowLeft>
          <ButtonArrowRight color={"blue"} onClick={props.continue}>
            nästa
          </ButtonArrowRight>
        </section>
      </main>
    </>
  );
};

export default BlueQuestionsModal;
