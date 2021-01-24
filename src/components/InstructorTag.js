import { Emoji, GoToGithub, Name, TagWrapper } from "./styles";

const InstructorTag = (props) => {
  return (
    <TagWrapper
      onClick={() => window.open(`https://github.com/${props.github}`)}
    >
      <Emoji>{props.emoji}</Emoji>
      <Name>{props.name}</Name>
      <GoToGithub>Go to GitHub</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
