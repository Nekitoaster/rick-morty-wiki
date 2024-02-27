import CardsBlock from "../../components/local/cardsBlock/CardsBlock";
import GreetingsWindow from "../../components/local/greetingsWindow/GreetingsWindow";
import RickDesc from "../../components/local/rickDesc/RickDesc";
import cssGlobal from "../../styles/global.css";

function MainPage({
  onShowModal,
  setOnShowModal,
  showedCharacter,
  setShowedCharacter,
}) {
  const {
    Container,
    WrapperRow,
    CharacterContainerBanner,
    CharacterImgBanner,
    PageTitle,
  } = cssGlobal;
  return (
    <Container>
      <PageTitle>Rick & Morty Characters</PageTitle>
      <WrapperRow>
        <CharacterContainerBanner>
          <CharacterImgBanner src="public/img/rick.png" width={284} />
        </CharacterContainerBanner>
        <RickDesc />
        <GreetingsWindow />
      </WrapperRow>
      <CardsBlock
        onShowModal={onShowModal}
        setOnShowModal={setOnShowModal}
        showedCharacter={showedCharacter}
        setShowedCharacter={setShowedCharacter}
      />
    </Container>
  );
}

export default MainPage;
