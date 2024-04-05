import React from "react";

const CompanyDetails = ({ details, setSelectedCompany }) => {
  console.log(details);
  return (
    <>
      <section className="h-screen w-full select-none">
        <div className=" h-[50px] w-full bg-yrgo-blue"></div>
        <div className="flex w-full flex-col items-center justify-center gap-20">
          <button onClick={() => setSelectedCompany(null)}>Back</button>
          <h3 className="text-2xl font-extrabold uppercase text-yrgo-blue">
            {details.contact[0].name}
          </h3>
          <div className="h-[4px] w-[90%] bg-yrgo-blue"></div>
          <div className="flex h-[278px] w-[90%] items-center justify-center border-2 border-yrgo-blue">
            <p>Animation</p>
          </div>
          <p>Snabba som blixten</p>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-2xl font-bold uppercase text-yrgo-red">
              Kontakt & Webbplats
            </h4>
            <p>{details.contact[0].email}</p>
            <p>{details.contact[0].url}</p>
          </div>
          <div className="h-[2px] w-[90%] bg-yrgo-blue"></div>
          <h4 className="text-2xl font-bold uppercase text-yrgo-red">
            {details.employees} Anställda
          </h4>
          <div className="h-[2px] w-[90%] bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-2xl font-bold uppercase text-yrgo-red">
              Tjänster vi erbjuder
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {details.focusAreas.map((area, index) => (
                <p
                  key={index}
                  className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>
          <div className="h-[2px] w-[90%] bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-2xl font-bold uppercase text-yrgo-red">
              Designers
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {details.softwaresDesign.map((area, index) => (
                <p
                  key={index}
                  className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>
          <div className="h-[2px] w-[90%] bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-2xl font-bold uppercase text-yrgo-red">
              Webbutvecklare
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {details.softwaresDev.map((area, index) => (
                <p
                  key={index}
                  className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>
          <div className="h-[2px] w-[90%] bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-center text-2xl font-bold uppercase text-yrgo-red">
              Vi söker <br /> praktikanter inom
            </h4>
            {details.internTypeCount !== null &&
            Object.values(details.internTypeCount[0]).some(
              (count) => count > 0,
            ) ? (
              <div>
                {details.internTypeCount[0] && (
                  <div
                    className={`grid gap-4 ${Object.values(details.internTypeCount[0]).every((count) => count > 0) ? "grid-cols-2" : "grid-cols-1"}`}
                  >
                    {Object.entries(details.internTypeCount[0]).map(
                      ([type, count], index) => (
                        <div key={index}>
                          {count > 0 ? (
                            <p className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2">
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
              <p className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2 text-xs min-[375px]:text-sm">
                Söker ej
              </p>
            )}
          </div>
          <div className="h-[2px] w-[90%] bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-2xl font-bold uppercase text-yrgo-red">
              Period för praktik
            </h4>
            <p className="flex items-center justify-center px-4 py-2">
              {details.internshipStartDate} - {details.internshipEndDate}
            </p>
          </div>
          <div className="h-[2px] w-[90%] bg-yrgo-blue"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-2xl font-bold uppercase text-yrgo-red">
              Fem snabba
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(details.top5[0]).map(([key, value], index) => (
                <div key={index}>
                  <p className="flex items-center justify-center border-2 border-yrgo-blue px-4 py-2">
                    {key}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-20 h-[2px] w-[90%] bg-yrgo-blue"></div>
        </div>
      </section>
    </>
  );
};

export default CompanyDetails;
