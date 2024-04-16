import coolGif from "../assets/CoolCat.gif";
import fastGif from "../assets/snabb_som_blixten.gif";
import stableGif from "../assets/Stadig_och_Stabil.gif";

import yrgologo from "../assets/yrgo-text-white.png";

const CompanyDetails = ({ details, setSelectedCompany }) => {
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

  const gifAnimations = [coolGif, fastGif, stableGif];

  const gifByCompanyType = [
    { name: "cool", value: details.companyType.cool, gif: coolGif },
    { name: "fast", value: details.companyType.fast, gif: fastGif },
    { name: "stable", value: details.companyType.stable, gif: stableGif },
  ];

  // get the gif of the highest value
  gifByCompanyType.sort((a, b) => b.value - a.value);

  // if the 2 highest values are equal, pick one of them by random
  if (gifByCompanyType[0].value === gifByCompanyType[1].value) {
    gifByCompanyType.pop();
    gifByCompanyType.sort((a, b) => 0.5 - Math.random());
  }

  console.log(details);

  return (
    <>
      <main className="relative grid h-full w-full grid-rows-layout">
        <header className=" w-full bg-white">
          <div className={`h-12 w-full  bg-yrgo-blue lg:hidden`}></div>
          <div
            className={`hidden items-center justify-center bg-yrgo-blue lg:mx-16 lg:mt-4 lg:flex lg:h-24 `}
          >
            <img src={yrgologo} alt="Yrgo logo text" />
          </div>
        </header>

        <section className="overflow-y-auto lg:mx-16">
          <div className=" w-full select-none">
            <div className=" flex w-full grid-cols-4 flex-col items-center justify-center gap-10 lg:grid lg:gap-1 lg:border-x-4 lg:border-yrgo-red lg:bg-yrgo-red">
              {/* company name + company as animation: */}
              <div className="col-span-4 flex w-full flex-col items-center gap-4 border-yrgo-red bg-white lg:border-b-4 lg:pb-24 lg:pt-12">
                <h3 className="mt-4 text-2xl font-extrabold uppercase text-yrgo-red lg:text-4xl">
                  {details.contact.name}
                </h3>
                <div className="h-[4px] w-full bg-yrgo-blue lg:hidden"></div>
                <img
                  src={gifByCompanyType[0].gif}
                  alt="your company as an animation"
                  className="max-w-full  md:max-w-xl"
                />
                <p className="font-medium text-yrgo-red lg:text-xl lg:font-bold lg:text-black">
                  {details.contact.name} som animation
                </p>
              </div>

              {/* contact: */}
              <div className="col-span-3 flex flex-col items-center justify-center gap-4 bg-white lg:px-48 lg:py-16">
                <h4 className="w-max text-xl font-bold uppercase text-yrgo-red lg:text-2xl lg:font-extrabold">
                  Kontakt & Webbplats
                </h4>
                <p className="font-medium text-yrgo-blue lg:text-xl lg:font-bold">
                  {details.contact.email}
                </p>
                <p className="font-medium text-yrgo-blue lg:text-xl lg:font-bold">
                  {details.contact.url}
                </p>
              </div>

              {/* employees: */}
              <div className="h-[2px] w-1/2 bg-yrgo-red lg:hidden"></div>
              <div className="flex h-full items-center justify-center bg-white">
                <h4 className="lg:2xl bg-white text-xl font-extrabold uppercase text-yrgo-blue">
                  {details.employees} Anställda
                </h4>
              </div>

              {/* softwares, design: */}
              <div className="h-[2px] w-1/2 bg-yrgo-red lg:hidden"></div>
              <div className="col-span-2 flex h-full flex-col items-center justify-center gap-6 bg-white lg:gap-12 lg:px-12 lg:py-16">
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-xl font-extrabold uppercase text-yrgo-red lg:text-2xl">
                    Designers
                  </h4>
                  <p className="flex items-center justify-center font-semibold text-yrgo-blue lg:text-2xl">
                    Program:
                  </p>
                </div>
                <div className="flex max-w-xl grid-cols-2 flex-wrap justify-center gap-4 lg:max-w-none">
                  {details.softwaresDesign.map((software) => (
                    <p
                      key={software}
                      className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2 font-semibold text-yrgo-blue lg:border-4 lg:text-xl lg:font-bold lg:uppercase"
                    >
                      {software}
                    </p>
                  ))}
                </div>
              </div>

              {/* softwares, developers: */}
              <div className="h-[2px] w-1/2 bg-yrgo-red lg:hidden"></div>
              <div className="col-span-2 flex h-full flex-col items-center justify-center gap-6 bg-white lg:gap-12 lg:px-12 lg:py-16">
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-xl font-extrabold uppercase text-yrgo-red lg:text-2xl">
                    Webbutvecklare
                  </h4>
                  <p className="flex items-center justify-center font-semibold text-yrgo-blue lg:text-2xl">
                    Tekniker:
                  </p>
                </div>
                <div className="flex max-w-xl grid-cols-2 flex-wrap justify-center gap-4 lg:max-w-none">
                  {details.softwaresDev.map((software) => (
                    <p
                      key={software}
                      className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2 font-semibold text-yrgo-blue lg:border-4 lg:text-xl lg:font-bold lg:uppercase"
                    >
                      {software}
                    </p>
                  ))}
                </div>
              </div>

              {/* company focus areas: */}
              <div className="h-[2px] w-1/2 bg-yrgo-red lg:hidden"></div>
              <div className="col-span-2 flex h-full flex-col items-center justify-center gap-6 bg-white lg:gap-12 lg:px-12 lg:py-16">
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-xl font-extrabold uppercase text-yrgo-red lg:text-2xl">
                    Tjänster vi erbjuder
                  </h4>
                </div>
                <div className="flex max-w-xl grid-cols-2 flex-wrap justify-center gap-4 lg:max-w-none">
                  {details.focusAreas.map((area) => (
                    <p
                      key={area}
                      className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2 font-semibold text-yrgo-blue lg:border-4 lg:text-xl lg:font-bold lg:uppercase"
                    >
                      {area}
                    </p>
                  ))}
                </div>
              </div>

              {/* looking for interns of type: */}
              <div className="h-[2px] w-1/2 bg-yrgo-red lg:hidden"></div>
              <div className="col-span-2 flex h-full flex-col items-center justify-center gap-4 bg-white lg:px-12 lg:py-16">
                <h4 className="text-center text-xl font-extrabold uppercase text-yrgo-red">
                  Vi söker praktikanter <br /> med roll:
                </h4>
                {details.internTypeCount !== null &&
                Object.values(details.internTypeCount).some(
                  (count) => count > 0,
                ) ? (
                  <div>
                    {details.internTypeCount && (
                      <div className={`grid grid-cols-1 gap-4`}>
                        {Object.entries(details.internTypeCount).map(
                          ([type, count], index) => (
                            <div key={index}>
                              {count > 0 ? (
                                <p className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2 font-semibold text-yrgo-blue lg:border-yrgo-red lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-red">
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
                  <p className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2 font-semibold text-yrgo-blue lg:border-yrgo-red lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-red">
                    Söker ej
                  </p>
                )}
              </div>

              {/* 5 quick questions: */}
              <div className="h-[2px] w-1/2 bg-yrgo-red lg:hidden "></div>
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:col-span-3 lg:gap-10 lg:bg-white lg:px-12 lg:py-16">
                <h4 className="text-xl font-extrabold uppercase text-yrgo-red lg:text-2xl">
                  Fem snabba
                </h4>
                <div className="flex w-full flex-col gap-4 px-4 lg:px-0">
                  {Object.entries(details.top5).map(([key, value], index) => (
                    <div key={key} className="flex w-full flex-row">
                      <p
                        className={`w-1/2 border-2 border-yrgo-blue p-2 font-semibold lg:border-4 lg:px-6 lg:py-4 lg:text-xl lg:font-bold lg:uppercase  ${value === true ? "bg-yrgo-blue text-white" : "text-yrgo-blue"}`}
                      >
                        {quickQuestionsText[key]?.isTrue}
                      </p>
                      <p
                        className={`w-1/2 border-y-2 border-r-2 border-yrgo-blue p-2 font-semibold lg:border-y-4 lg:border-r-4 lg:px-6 lg:py-4 lg:text-xl lg:font-bold lg:uppercase  ${value === false ? "bg-yrgo-blue text-white" : "text-yrgo-blue"}`}
                      >
                        {quickQuestionsText[key]?.isFalse}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* internship duration: */}
              <div className="h-[2px] w-1/2 bg-yrgo-red lg:hidden"></div>
              <div className="flex h-full flex-col items-center justify-center gap-4 lg:col-span-1 lg:bg-white lg:px-12 lg:py-16">
                <h4 className="text-center text-xl font-extrabold uppercase text-yrgo-red">
                  Period för praktik
                </h4>
                <p className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2 font-semibold text-yrgo-blue lg:border-yrgo-red lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-red">
                  {details.internshipDuration}
                </p>
                <div className="flex flex-wrap items-center justify-center px-4 py-2 text-yrgo-blue lg:text-xl lg:font-bold lg:uppercase lg:text-yrgo-red ">
                  <p className="text-nowrap">
                    {details.internshipStartDate
                      ? details.internshipStartDate
                      : "Oklart startdatum"}
                  </p>
                  –
                  <p className="text-nowrap">
                    {details.internshipEndDate
                      ? details.internshipEndDate
                      : "Oklart slutdatum"}
                  </p>
                </div>
              </div>

              <div className="mb-10 h-[2px] w-1/2 bg-yrgo-red lg:hidden "></div>
            </div>
          </div>
        </section>

        <section
          className={`mx-4 mb-4 flex  border-2 border-yrgo-blue lg:mx-16 lg:justify-between lg:border-4`}
        >
          <button
            className={`flex items-center justify-start border-r-2 border-yrgo-blue bg-white p-4 pr-8 lg:w-48 lg:border-r-4`}
            onClick={() => setSelectedCompany(null)}
          >
            <svg
              width="24"
              height="24"
              viewBox="8 8 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 27L18.41 25.59L13.83 21H30V19H13.83L18.42 14.41L17 13L10 20L17 27Z"
                fill="#001A52"
              />
            </svg>
            <div className={`ml-4 font-extrabold uppercase text-yrgo-blue`}>
              tillbaka
            </div>
          </button>
        </section>
      </main>
    </>
  );
};

export default CompanyDetails;
