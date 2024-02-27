import cssGlobal from "../../../styles/global.css";

function RickDesc() {

    const {
      CharacterDescriptionContainer,
      CharacterDescriptionItem,
      CharacterDescriptionText,
      CharacterDescriptionLabel,
      CharacterDescriptionDot,
    } = cssGlobal;
  return (
    <CharacterDescriptionContainer>
      <CharacterDescriptionItem>
        <CharacterDescriptionText>
          <CharacterDescriptionLabel>Name:</CharacterDescriptionLabel> Rick
          Sanchez
        </CharacterDescriptionText>
        <CharacterDescriptionDot />
      </CharacterDescriptionItem>
      <CharacterDescriptionItem>
        <CharacterDescriptionText>
          <CharacterDescriptionLabel>Status:</CharacterDescriptionLabel> alive
        </CharacterDescriptionText>
        <CharacterDescriptionDot />
      </CharacterDescriptionItem>
      <CharacterDescriptionItem>
        <CharacterDescriptionText>
          <CharacterDescriptionLabel>Species:</CharacterDescriptionLabel> human
        </CharacterDescriptionText>
        <CharacterDescriptionDot />
      </CharacterDescriptionItem>
      <CharacterDescriptionItem>
        <CharacterDescriptionText>
          <CharacterDescriptionLabel>Gender:</CharacterDescriptionLabel> male
        </CharacterDescriptionText>
        <CharacterDescriptionDot />
      </CharacterDescriptionItem>
    </CharacterDescriptionContainer>
  );
}

export default RickDesc