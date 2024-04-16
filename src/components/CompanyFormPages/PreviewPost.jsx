import snabb from "../../assets/snabb_som_blixten.gif";
import cat from "../../assets/CoolCat.gif";

const PreviewPost = ({ answer }) => {
  const quickQuestionsText = {
    dogFriendly: {
      isTrue: "Hundar = JA!",
      isFalse: "No dogs :)",
    },
    flexTime: {
      isTrue: "Jobba hemma",
      isFalse: "Kontor är bäst",
    },
    officeInSweden: {
      isTrue: "Bara Sverige",
      isFalse: "Kontor utomlands",
    },
    companyTypeInhouse: {
      isTrue: "Inhouse",
      isFalse: "Byrå",
    },
    remoteWorkFriendly: {
      isTrue: "Flex",
      isFalse: "Workin 9-5, 4-ever",
    },
  };

  const gifAnimations = [snabb, cat];

  let randomAnimation =
    gifAnimations[Math.floor(Math.random() * gifAnimations.length)];

  console.log(answer);

  return (
    <>
      <main className=" w-full select-none">
        <div className=" flex w-full grid-cols-4 flex-col items-center justify-center gap-10 lg:grid lg:gap-1 lg:border-x-4 lg:border-yrgo-blue lg:bg-yrgo-blue">
          {/* company name + company as animation: */}
          <div className="col-span-4 flex w-full flex-col items-center gap-4 border-yrgo-blue bg-white lg:border-b-4 lg:pb-24 lg:pt-12">
            <h3 className="mt-4 text-2xl font-extrabold uppercase text-yrgo-blue lg:text-4xl">
              {answer.contact.name}
            </h3>
            <div className="h-[4px] w-full bg-yrgo-red lg:hidden"></div>
            <img
              src={randomAnimation}
              alt=""
              className="max-w-full  lg:max-w-3xl"
            />
            <p className="font-medium text-yrgo-blue lg:text-xl lg:font-bold lg:text-black">
              {answer.contact.name} som animation
            </p>
          </div>

          {/* contact: */}
          <div className="col-span-3 flex flex-col items-center justify-center gap-4 bg-white lg:px-48 lg:py-16">
            <h4 className="w-max text-xl font-bold uppercase text-yrgo-blue lg:text-2xl lg:font-extrabold">
              Kontakt & Webbplats
            </h4>
            <p className="font-medium text-yrgo-red lg:text-xl lg:font-bold">
              {answer.contact.email}
            </p>
            <p className="font-medium text-yrgo-red lg:text-xl lg:font-bold">
              {answer.contact.url}
            </p>
          </div>

          {/* employees: */}
          <div className="h-[2px] w-1/2 bg-yrgo-blue lg:hidden"></div>
          <div className="flex h-full items-center justify-center bg-white">
            <h4 className="lg:2xl bg-white text-xl font-extrabold uppercase text-yrgo-red">
              {answer.employees} Anställda
            </h4>
          </div>

          {/* softwares, design: */}
          <div className="h-[2px] w-1/2 bg-yrgo-blue lg:hidden"></div>
          <div className="col-span-2 flex h-full flex-col items-center justify-center gap-6 bg-white lg:gap-12 lg:px-12 lg:py-16">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-xl font-extrabold uppercase text-yrgo-blue lg:text-2xl">
                Designers
              </h4>
              <p className="flex items-center justify-center font-semibold text-yrgo-red lg:text-2xl">
                Program:
              </p>
            </div>
            <div className="flex max-w-xl grid-cols-2 flex-wrap justify-center gap-4 lg:max-w-none">
              {answer.softwaresDesign.map((software) => (
                <p
                  key={software}
                  className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red lg:border-4 lg:text-xl lg:font-bold lg:uppercase"
                >
                  {software}
                </p>
              ))}
            </div>
          </div>

          {/* softwares, developers: */}
          <div className="h-[2px] w-1/2 bg-yrgo-blue lg:hidden"></div>
          <div className="col-span-2 flex h-full flex-col items-center justify-center gap-6 bg-white lg:gap-12 lg:px-12 lg:py-16">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-xl font-extrabold uppercase text-yrgo-blue lg:text-2xl">
                Webbutvecklare
              </h4>
              <p className="flex items-center justify-center font-semibold text-yrgo-red lg:text-2xl">
                Tekniker:
              </p>
            </div>
            <div className="flex max-w-xl grid-cols-2 flex-wrap justify-center gap-4 lg:max-w-none">
              {answer.softwaresDev.map((software) => (
                <p
                  key={software}
                  className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red lg:border-4 lg:text-xl lg:font-bold lg:uppercase"
                >
                  {software}
                </p>
              ))}
            </div>
          </div>

          {/* company focus areas: */}
          <div className="h-[2px] w-1/2 bg-yrgo-blue lg:hidden"></div>
          <div className="col-span-2 flex h-full flex-col items-center justify-center gap-6 bg-white lg:gap-12 lg:px-12 lg:py-16">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-xl font-extrabold uppercase text-yrgo-blue lg:text-2xl">
                Tjänster vi erbjuder
              </h4>
            </div>
            <div className="flex max-w-xl grid-cols-2 flex-wrap justify-center gap-4 lg:max-w-none">
              {answer.focusAreas.map((area) => (
                <p
                  key={area}
                  className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red lg:border-4 lg:text-xl lg:font-bold lg:uppercase"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>

          {/* looking for interns of type: */}
          <div className="h-[2px] w-1/2 bg-yrgo-blue lg:hidden"></div>
          <div className="col-span-2 flex h-full flex-col items-center justify-center gap-4 bg-white lg:px-12 lg:py-16">
            <h4 className="text-center text-xl font-extrabold uppercase text-yrgo-blue">
              Vi söker praktikanter <br /> med roll:
            </h4>
            {answer.internTypeCount !== null &&
            Object.values(answer.internTypeCount).some((count) => count > 0) ? (
              <div>
                {answer.internTypeCount && (
                  <div className={`grid grid-cols-1 gap-4`}>
                    {Object.entries(answer.internTypeCount).map(
                      ([type, count], index) => (
                        <div key={index}>
                          {count > 0 ? (
                            <p className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red lg:border-yrgo-blue lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-blue">
                              {type}: {count} st
                            </p>
                          ) : null}
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red lg:border-yrgo-blue lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-blue">
                Söker ej
              </p>
            )}
          </div>

          {/* 5 quick questions: */}
          <div className="h-[2px] w-1/2 bg-yrgo-blue lg:hidden "></div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:col-span-3 lg:gap-10 lg:bg-white lg:px-12 lg:py-16">
            <h4 className="text-xl font-extrabold uppercase text-yrgo-blue lg:text-2xl">
              Fem snabba
            </h4>
            <div className="flex w-full flex-col gap-4">
              {Object.entries(answer.top5).map(([key, value], index) => (
                <div key={key} className="flex w-full flex-row">
                  <p
                    className={`w-1/2 border-2 border-yrgo-red p-2 font-semibold lg:border-4 lg:px-6 lg:py-4 lg:text-xl lg:font-bold lg:uppercase  ${value === true ? "bg-yrgo-red text-white" : "text-yrgo-red"}`}
                  >
                    {quickQuestionsText[key]?.isTrue}
                  </p>
                  <p
                    className={`w-1/2 border-y-2 border-r-2 border-yrgo-red p-2 font-semibold lg:border-y-4 lg:border-r-4 lg:px-6 lg:py-4 lg:text-xl lg:font-bold lg:uppercase  ${value === false ? "bg-yrgo-red text-white" : "text-yrgo-red"}`}
                  >
                    {quickQuestionsText[key]?.isFalse}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* internship duration: */}
          <div className="h-[2px] w-1/2 bg-yrgo-blue lg:hidden"></div>
          <div className="flex h-full flex-col items-center justify-center gap-4 lg:col-span-1 lg:bg-white lg:px-12 lg:py-16">
            <h4 className="text-center text-xl font-extrabold uppercase text-yrgo-blue">
              Period för praktik
            </h4>
            <p className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red lg:border-yrgo-blue lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-blue">
              {answer.internshipDuration}
            </p>
            <div className="flex flex-wrap items-center justify-center px-4 py-2 text-yrgo-red lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-blue ">
              <p className="text-nowrap">
                {answer.internshipStartDate
                  ? answer.internshipStartDate
                  : "Oklart startdatum"}
              </p>
              –
              <p className="text-nowrap">
                {answer.internshipEndDate
                  ? answer.internshipEndDate
                  : "Oklart slutdatum"}
              </p>
            </div>
          </div>

          <div className="mb-10 h-[2px] w-1/2 bg-yrgo-blue lg:hidden "></div>
        </div>
      </main>
    </>
  );
};

export default PreviewPost;
