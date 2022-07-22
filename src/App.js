import Education from "./components/Education";
import Heder from "./components/Heder";
import TechnologyStacks from "./components/TechnologyStacks";
import VettedSkills from "./components/VettedSkills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="bg-white">
      <Heder></Heder>
      <TechnologyStacks></TechnologyStacks>
      <VettedSkills></VettedSkills>
      <WorkExperience></WorkExperience>
      <Education></Education>
    </div>
  );
}

export default App;
