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

  console.log(answer);

  return (
    <>
      <main className=" w-full select-none">
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col items-center gap-4">
            <h3 className="mt-4 text-2xl font-extrabold uppercase text-yrgo-blue">
              {answer.contact.name}
            </h3>
            <div className="h-[4px] w-full bg-yrgo-red"></div>
            <div className="flex h-[278px] w-[90%] items-center justify-center border-2 border-yrgo-blue">
              <p>Animation</p>
            </div>
            <p className="font-medium text-yrgo-blue">Snabba som blixten</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-xl font-bold uppercase text-yrgo-blue">
              Kontakt & Webbplats
            </h4>
            <p className="font-medium text-yrgo-red">{answer.contact.email}</p>
            <p className="font-medium text-yrgo-red">{answer.contact.url}</p>
          </div>

          <div className="h-[2px] w-1/2 bg-yrgo-blue"></div>
          <h4 className="text-xl font-extrabold uppercase text-yrgo-red">
            {answer.employees} Anställda
          </h4>

          <div className="h-[2px] w-1/2 bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-6">
            <h4 className="text-xl font-extrabold uppercase text-yrgo-blue">
              Tjänster vi erbjuder
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              {answer.focusAreas.map((area) => (
                <p
                  key={area}
                  className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>

          <div className="h-[2px] w-1/2 bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-xl font-extrabold uppercase text-yrgo-blue">
                Designers
              </h4>
              <p className="flex items-center justify-center  font-semibold text-yrgo-red">
                Program:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              {answer.softwaresDesign.map((software) => (
                <p
                  key={software}
                  className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red"
                >
                  {software}
                </p>
              ))}
            </div>
          </div>

          <div className="h-[2px] w-1/2 bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-xl font-extrabold uppercase text-yrgo-blue">
                Webbutvecklare
              </h4>
              <p className="flex items-center justify-center  font-semibold text-yrgo-red">
                Tekniker:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              {answer.softwaresDev.map((software) => (
                <p
                  key={software}
                  className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red"
                >
                  {software}
                </p>
              ))}
            </div>
          </div>

          <div className="h-[2px] w-1/2 bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-center text-xl font-extrabold uppercase text-yrgo-blue">
              Vi söker praktikanter <br /> med roll:
            </h4>
            {answer.internTypeCount !== null &&
            Object.values(answer.internTypeCount).some((count) => count > 0) ? (
              <div>
                {answer.internTypeCount && (
                  <div
                    className={`grid gap-4 ${Object.values(answer.internTypeCount).every((count) => count > 0) ? "grid-cols-2" : "grid-cols-1"}`}
                  >
                    {Object.entries(answer.internTypeCount).map(
                      ([type, count], index) => (
                        <div key={index}>
                          {count > 0 ? (
                            <p className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red">
                              {type}
                            </p>
                          ) : null}
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p className="flex items-center justify-center border-2 border-yrgo-red px-4 py-2 font-semibold text-yrgo-red">
                Söker ej
              </p>
            )}
          </div>

          <div className="h-[2px] w-1/2 bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-center text-xl font-extrabold uppercase text-yrgo-blue">
              Period för praktik
            </h4>
            <p className="flex items-center justify-center px-4 py-2 text-yrgo-red ">
              {`${
                answer.internshipStartDate
                  ? answer.internshipStartDate
                  : "Oklart startdatum"
              }
               – ${
                 answer.internshipEndDate
                   ? answer.internshipEndDate
                   : "Oklart slutdatum"
               }`}
            </p>
          </div>

          <div className="h-[2px] w-1/2 bg-yrgo-blue"></div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h4 className="text-center text-xl font-extrabold uppercase text-yrgo-blue">
              Fem snabba
            </h4>
            <div className="flex w-full flex-col gap-4">
              {/* {Object.entries(answer.top5[0]).map(([key, value], index) => ( */}
              {Object.entries(answer.top5).map(([key, value], index) => (
                <div key={key} className="flex w-full flex-row">
                  <p
                    className={`w-1/2 border-2 border-yrgo-red p-2 font-semibold  ${value === true ? "bg-yrgo-red text-white" : "text-yrgo-red"}`}
                  >
                    {quickQuestionsText[key]?.isTrue}
                  </p>
                  <p
                    className={`w-1/2 border-2 border-yrgo-red p-2 font-semibold  ${value === false ? "bg-yrgo-red text-white" : "text-yrgo-red"}`}
                  >
                    {quickQuestionsText[key]?.isFalse}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 h-[2px] w-1/2 bg-yrgo-blue"></div>
        </div>
      </main>
    </>
  );
};

export default PreviewPost;
