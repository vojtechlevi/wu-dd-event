import { supabase } from "../../client";

const PreviewPost = ({ counter, setCounter, answer }) => {
  async function writeToDatabase() {
    try {
      const { error } = await supabase.from("companies").insert({
        name: answer.name,
        bransch: answer.sector,
        employees: answer.employees,
        employees: answer.employees,
        focusareas: answer.focusAreas,
        companyURL: answer.url,
        companyType: answer.type,
        softwares: answer.software,
        top5: answer.quickQuestions,
        internType: answer.internType,
        internCount: answer.internCount,
        internshipStartDate: "2000-01-01", // for now
        internshipEndDate: "2050-01-01", // for now
        internshipSkillReq: answer.skillsRequested,
        description: answer.description,
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
          writeToDatabase();
        }}
        className="border border-black p-2"
      >
        Klar!
      </button>
    </>
  );
};

export default PreviewPost;
