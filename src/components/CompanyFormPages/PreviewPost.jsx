import { supabase } from "../../client";

const PreviewPost = ({ counter, setCounter, answer }) => {
  async function writeToDatabase() {
    try {
      const { error } = await supabase.from("companies").insert({
        contact: [
          {
            url: "www.hej.se",
            name: "företagsnamn",
            email: "ojsojsoj@hansson.se",
          },
        ],
        employees: "5-10",
        focusAreas: ["UX111", "UIKOFEOMEF", "JFOJE"],
        softwaresDesign: ["oijwad", "838", "modom"],
        softwaresDev: ["hejhejh", "123e4wrf3", "mdodomdmod"],
        top5: [
          {
            flexTime: false,
            dogFriendly: false,
            OfficeInSweden: true,
            companyTypeInhouse: false,
            remoteWorkFriendly: false,
          },
        ],
        companyType: [
          {
            cool: 4,
            fast: 8,
            stable: 2,
          },
        ],
        internTypeCount: [
          {
            Webbutvecklare: 3,
            "Digital Designer": 0,
          },
        ],
        internshipStartDate: "2020-02-12",
        internshipEndDate: "2025-05-11",
      });
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  return (
    <>
      <h2 className="text-4xl">Din preview</h2>
      <button className="border border-black p-2">Redigera</button>
      <button
        onClick={() => {
          setCounter(counter + 1);
          // writeToDatabase();
        }}
        className="border border-black p-2"
      >
        Klar!
      </button>
    </>
  );
};

export default PreviewPost;
