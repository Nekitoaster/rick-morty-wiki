
import cssGlobal from "../../../styles/global.css";

function CardItem({
  props,
  onShowModal,
  setOnShowModal,
  showedCharacter,
  setShowedCharacter,
}) {
  const { image, name } = props;
  const { CardWrapper, CardContainer, CardImg, CardTitle } = cssGlobal;

  function handleModalOpen(item) {
    setOnShowModal(true);
    setShowedCharacter(item);
  }
  return (
    <CardWrapper onClick={() => handleModalOpen(props)}>
      <CardContainer>
        <CardImg src={image} />
      </CardContainer>
      <CardTitle>{name}</CardTitle>
    </CardWrapper>
  );
}

export default CardItem;
