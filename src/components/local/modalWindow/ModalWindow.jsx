import { useEffect, useRef } from "react";
import cssGlobal from "../../../styles/global.css";
import { IoClose } from "react-icons/io5";

function ModalWindow({ showedCharacter, setOnShowModal }) {
  const {
    ModalContainer,
    ModalBox,
    CardContainer,
    CardImg,
    CharacterDescriptionContainer,
    CharacterDescriptionItem,
    CharacterDescriptionText,
    CharacterDescriptionLabel,
    CharacterDescriptionDot,
    CloseIcon,
  } = cssGlobal;
  const { image, name, status, species, gender, type } = showedCharacter;
  const ref = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (setOnShowModal && !ref.current.contains(e.target)) {
        setOnShowModal(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <ModalContainer>
      <ModalBox ref={ref}>
        <CloseIcon onClick={() => setOnShowModal(false)}>
          <IoClose />
        </CloseIcon>
        <CardContainer>
          <CardImg src={image} />
        </CardContainer>
        <CharacterDescriptionContainer>
          <CharacterDescriptionItem>
            <CharacterDescriptionText>
              <CharacterDescriptionLabel>Name:</CharacterDescriptionLabel>{" "}
              {name}
            </CharacterDescriptionText>
            <CharacterDescriptionDot />
          </CharacterDescriptionItem>
          <CharacterDescriptionItem>
            <CharacterDescriptionText>
              <CharacterDescriptionLabel>Gender:</CharacterDescriptionLabel>{" "}
              {gender}
            </CharacterDescriptionText>
            <CharacterDescriptionDot />
          </CharacterDescriptionItem>
          <CharacterDescriptionItem>
            <CharacterDescriptionText>
              <CharacterDescriptionLabel>Status:</CharacterDescriptionLabel>{" "}
              {status}
            </CharacterDescriptionText>
            <CharacterDescriptionDot />
          </CharacterDescriptionItem>
          {species && (
            <CharacterDescriptionItem>
              <CharacterDescriptionText>
                <CharacterDescriptionLabel>Species:</CharacterDescriptionLabel>{" "}
                {species}
              </CharacterDescriptionText>
              <CharacterDescriptionDot />
            </CharacterDescriptionItem>
          )}
          {type && (
            <CharacterDescriptionItem>
              <CharacterDescriptionText>
                <CharacterDescriptionLabel>Type:</CharacterDescriptionLabel>{" "}
                {type}
              </CharacterDescriptionText>
              <CharacterDescriptionDot />
            </CharacterDescriptionItem>
          )}
        </CharacterDescriptionContainer>
      </ModalBox>
    </ModalContainer>
  );
}

export default ModalWindow;
