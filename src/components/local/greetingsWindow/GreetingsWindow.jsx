import cssGlobal from "../../../styles/global.css";

function GreetingsWindow() {
  const {
    GreetingsContainer,
    GreetingsHeader,
    GreetingsHeaderCircle,
    GreetingsHeaderCircleFill,
    GreetingsBody,
    GreetingsBodyText,
    GreetingsBodyTitle,
  } = cssGlobal;
	return (
    <GreetingsContainer>
      <GreetingsHeader>
        <GreetingsHeaderCircle />
        <GreetingsHeaderCircleFill />
      </GreetingsHeader>
      <GreetingsBody>
        <GreetingsBodyTitle>Welcome!</GreetingsBodyTitle>
        <GreetingsBodyText>
          Greetings to all on our website dedicated entirely to the characters
          from the popular series "Rick and Morty"! Here you will find all the
          necessary information about each character, their peculiarities,
          relationships, and funny moments. Immerse yourself in the unique humor
          and ability to captivate the imagination that this show brings! Our
          pages are filled with love for the animated series and a desire to
          share knowledge with you.
        </GreetingsBodyText>
      </GreetingsBody>
    </GreetingsContainer>
  );
}

export default GreetingsWindow;
