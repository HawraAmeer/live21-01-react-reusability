import InstructorTag from "./components/InstructorTag.js";
import { AppWrapper } from "./components/styles.js";
import instructors from "./instructors.js";

const App = () => {
  const list = instructors.map((instructor) => (
    <InstructorTag
      key={instructor.id}
      name={instructor.name}
      github={instructor.github}
      emoji={instructor.emoji}
    />
  ));

  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <div>{list}</div>
    </AppWrapper>
  );
};

export default App;
