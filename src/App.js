import Education from "./containers/Education";
import Heder from "./containers/Heder";
import TechnologyStacks from "./containers/TechnologyStacks";
import VettedSkills from "./containers/VettedSkills";
import WorkExperience from "./containers/WorkExperience";

function App() {
  return (
    <div className="bg-white pl-[14px] md:px-6 lg:px-8">
      <Heder />
      <TechnologyStacks />
      <VettedSkills></VettedSkills>
      <WorkExperience />
      <Education />
    </div>
  );
}

export default App;
