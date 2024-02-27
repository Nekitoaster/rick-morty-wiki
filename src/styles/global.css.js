import styled from "styled-components";

const black_1 = "#181b22";
const black_2 = "#1a1d24";
const lime = "#c9e049";
const lime_2 = "#636e24";
const blue_1 = "#81f0fe";
const blue_2 = "#27628f";
const blue_3 = "#1f2a50";

const cssGlobal = {
  Container: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 45px;
    padding: 30px 60px;
    background: ${black_1};
    border-left: 1px solid ${lime};
    border-right: 1px solid ${lime};
    border-bottom: 1px solid ${lime};
    display: flex;
    width: 100%;
    min-height: calc(100vh - 74px);
    flex-direction: column;
    border-radius: 0 0 12px 12px;
  `,
  WrapperRow: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 50px;
  `,
  PageTitle: styled.h1`
    font-size: 38px;
    color: ${lime};
  `,
  CharacterContainerBanner: styled.div`
    border-radius: 20px;
    height: 490px;
    min-width: 370px;
    border-radius: 20px;
    height: 490px;
    min-width: 370px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(${blue_1}),
      color-stop(${blue_2}),
      to(${blue_3})
    );
    background: -o-linear-gradient(${blue_1}, ${blue_2}, ${blue_3});
    background: linear-gradient(${blue_1}, ${blue_2}, ${blue_3});
    position: relative;
    overflow: hidden;
    -webkit-box-shadow: 100px -100px 92px 5px rgba(0, 0, 0, 0.85) inset,
      70px -68px 47px -66px ${blue_2}, -79px 74px 47px -66px rgba(0, 0, 0, 0.87);
    -moz-box-shadow: 100px -100px 92px 5px rgba(0, 0, 0, 0.85) inset,
      70px -68px 47px -66px ${blue_2}, -79px 74px 47px -66px rgba(0, 0, 0, 0.87);
    box-shadow: 100px -100px 92px 5px rgba(0, 0, 0, 0.85) inset,
      70px -68px 47px -66px ${blue_2}, -79px 74px 47px -66px rgba(0, 0, 0, 0.87);
    @media (max-width: 480px) {
      width: 320px;
      min-width: 320px;
    }
    &::after {
      z-index: 2;
      text-shadow: 1px 1px 2px ${blue_3}, 0 0 1em ${lime}, 0 0 0.2em ${lime};
      font-size: 40px;
      font-weight: 600;
      position: absolute;
      bottom: 22px;
      left: 50px;
      content: "Rick";
      color: ${lime};
    }
    &::before {
      content: "";
      display: block;
      z-index: 2;
      -webkit-box-shadow: -4px -100px 81px -9px rgba(0, 0, 0, 0.91) inset;
      box-shadow: -4px -100px 81px -9px rgba(0, 0, 0, 0.91) inset;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  CharacterImgBanner: styled.img`
    position: absolute;
    bottom: -50px;
    left: 41px;
    z-index: -0;
    @media (max-width: 480px) {
      left: 22px;
    }
  `,
  CharacterDescriptionContainer: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    padding: 0 30px;
    border-radius: 20px;
    height: 290px;
    min-width: 320px;
    background: rgb(28, 43, 82);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(28, 43, 82, 1)),
      color-stop(38%, rgba(29, 14, 43, 1)),
      to(rgba(27, 5, 31, 1))
    );
    background: -o-linear-gradient(
      top,
      rgba(28, 43, 82, 1) 0%,
      rgba(29, 14, 43, 1) 38%,
      rgba(27, 5, 31, 1) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(28, 43, 82, 1) 0%,
      rgba(29, 14, 43, 1) 38%,
      rgba(27, 5, 31, 1) 100%
    );
    -webkit-box-shadow: 0px -21px 55px -7px rgba(28, 43, 82, 0.89);
    -moz-box-shadow: 0px -21px 55px -7px rgba(28, 43, 82, 0.89);
    box-shadow: 0px -21px 55px -7px rgba(28, 43, 82, 0.89),
      -5px 48px 55px -28px rgba(27, 5, 31, 0.89);
  `,
  CharacterDescriptionItem: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 20px;
  `,
  CharacterDescriptionText: styled.p`
    color: ${lime};
    font-size: 18px;
    width: 100%;
    border-bottom: 2px solid ${lime};
  `,
  CharacterDescriptionLabel: styled.span`
    font-weight: 600;
  `,
  CharacterDescriptionDot: styled.span`
    min-width: 20px;
    height: 20px;
    background: ${lime};
    border-radius: 50%;
  `,
  GreetingsContainer: styled.div`
    border-radius: 12px;
    border: 1px solid ${lime};
    width: 100%;
    max-width: 600px;
    height: 390px;
    overflow: hidden;
    -webkit-box-shadow: 0px 0px 47px 7px ${lime};
    -moz-box-shadow: 0px 0px 47px 7px ${lime};
    box-shadow: 0px 0px 50px -27px ${lime};
    @media (max-width: 480px) {
      width: 320px;
    }
  `,
  GreetingsHeader: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    min-height: 43px;
    border-bottom: 1px solid ${lime};
    gap: 7px;
  `,
  GreetingsHeaderCircle: styled.span`
    min-width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid ${lime};
  `,
  GreetingsHeaderCircleFill: styled.span`
    min-width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid ${lime};
    background: ${lime};
  `,
  GreetingsBody: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 30px;
    overflow-y: scroll;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 43px);
    border-bottom: 1px solid ${lime};
    gap: 15px;
    &::-webkit-scrollbar {
      width: 0;
    }
  `,
  GreetingsBodyTitle: styled.p`
    font-size: 22px;
    font-weight: 600;
    color: ${blue_1};
  `,
  GreetingsBodyText: styled.p`
    font-size: 18px;
    color: ${blue_1};
  `,
  PaginateWrapper: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
  `,
  CardsContainer: styled.div`
    gap: 30px 30px;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    justify-items: center;
    width: 100%;
  `,
  CardWrapper: styled.div`
    position: relative;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 15px 35px 15px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 210px;
    height: 320px;
    border: 1px solid ${lime};
    border-radius: 12px;
    -webkit-transition: -webkit-transform 500ms ease,
      -webkit-box-shadow 500ms ease;
    transition: -webkit-transform 500ms ease, -webkit-box-shadow 500ms ease;
    -o-transition: transform 500ms ease, box-shadow 500ms ease;
    transition: transform 500ms ease, box-shadow 500ms ease;
    transition: transform 500ms ease, box-shadow 500ms ease,
      -webkit-transform 500ms ease, -webkit-box-shadow 500ms ease;
    &:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      -webkit-box-shadow: 0px 0px 53px 13px rgba(0, 0, 0, 0.69);
      box-shadow: 0px 0px 53px 13px rgba(0, 0, 0, 0.69);
    }
  `,
  CardContainer: styled.div`
    position: relative;
    overflow: hidden;
    width: 170px;
    height: 170px;
    border-radius: 12px;
    border: 1px solid ${lime};
    -webkit-box-shadow: 0px 0px 53px -31px ${lime};
    -moz-box-shadow: 0px 0px 53px -31px ${lime};
    box-shadow: 0px 0px 53px -31px ${lime};
    -webkit-transition: -webkit-transform 500ms ease,
      -webkit-box-shadow 500ms ease;
    transition: -webkit-transform 500ms ease, -webkit-box-shadow 500ms ease;
    -o-transition: transform 500ms ease, box-shadow 500ms ease;
    transition: transform 500ms ease, box-shadow 500ms ease;
    transition: transform 500ms ease, box-shadow 500ms ease,
      -webkit-transform 500ms ease, -webkit-box-shadow 500ms ease;
    &:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      -webkit-box-shadow: 0px 0px 53px 13px rgba(0, 0, 0, 0.69);
      box-shadow: 0px 0px 53px 13px rgba(0, 0, 0, 0.69);
    }
    &::before {
      content: "";
      display: block;
      -webkit-box-shadow: 41px -43px 66px 2px rgba(0, 0, 0, 0.8) inset,
        -43px 50px 54px -25px rgba(255, 255, 255, 0.69) inset;
      -moz-box-shadow: 41px -43px 66px 2px rgba(0, 0, 0, 0.8) inset,
        -43px 50px 54px -25px rgba(255, 255, 255, 0.69) inset;
      box-shadow: 41px -43px 66px 2px rgba(0, 0, 0, 0.8) inset,
        -43px 50px 54px -25px rgba(255, 255, 255, 0.69) inset;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  CardImg: styled.img`
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    -webkit-filter: drop-shadow(
      69px -70px 47px -35px rgba(0, 0, 0, 0.55) inset
    );
    filter: drop-shadow(69px -70px 47px -35px rgba(0, 0, 0, 0.55) inset);
  `,
  CardTitle: styled.h4`
    color: ${lime};
    font-size: 24px;
  `,
  FiltersWrapper: styled.form`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  `,
  SelectBox: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    border: 1px solid ${lime};
    padding: 7px 10px 5px;
    border-radius: 12px;
    -webkit-transition: -webkit-transform 400ms ease;
    transition: -webkit-transform 400ms ease;
    -o-transition: transform 400ms ease;
    transition: transform 400ms ease;
    transition: transform 400ms ease, -webkit-transform 400ms ease;
    &:focus-within {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  `,
  InputBox: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 31.2px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    border: 1px solid ${lime};
    border-radius: 12px;
    -webkit-transition: -webkit-transform 400ms ease;
    transition: -webkit-transform 400ms ease;
    -o-transition: transform 400ms ease;
    transition: transform 400ms ease;
    transition: transform 400ms ease, -webkit-transform 400ms ease;
    &:focus-within {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  `,
  Select: styled.select`
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: none;
    color: ${blue_1};
    border: none;
    &:focus {
      outline: none;
    }
  `,
  SelectOption: styled.option`
    background: ${black_1};

    &:hover {
      background: ${lime};
      color: ${black_1};
    }
  `,
  InputLabel: styled.label`
    font-size: 12px;
    color: ${lime};
    position: absolute;
    top: -10px;
    left: 8px;
    background: ${black_1};
  `,
  InputSearch: styled.input`
    height: 100%;
    width: 100%;
    border-radius: 12px;
    background: none;
    border: none;
    color: ${lime};
    padding: 5px 10px;
    &:focus {
      outline: none;
    }
  `,
  SearchButton: styled.button`
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: none;
    height: 35px;
    width: 35px;
    min-width: 35px;
    background: ${lime};
    border-radius: 50%;
    font-size: 18px;
    -webkit-transition: -webkit-transform 500ms ease;
    transition: -webkit-transform 500ms ease;
    -o-transition: transform 500ms ease;
    transition: transform 500ms ease;
    transition: transform 500ms ease, -webkit-transform 500ms ease;
    &:hover {
      -webkit-transform: scale(1.07);
      -ms-transform: scale(1.07);
      transform: scale(1.07);
    }
  `,
  ErrorMessage: styled.h2`
    color: ${lime};
  `,
  ModalContainer: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: fixed;
    background: #81f0fec3;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;
  `,
  ModalBox: styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    min-width: 600px;
    height: 350px;
    background: ${black_1};
    border-radius: 12px;
    padding: 0 20px;
  `,
  CloseIcon: styled.span`
    cursor: pointer;
    position: absolute;
    border: 4px solid ${black_1};
    top: -17px;
    right: -17px;
    background: ${lime};
    border-radius: 50%;
    font-size: 26px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: -webkit-transform 500ms ease;
    transition: -webkit-transform 500ms ease;
    -o-transition: transform 500ms ease;
    transition: transform 500ms ease;
    transition: transform 500ms ease, -webkit-transform 500ms ease;
    &:hover {
      -webkit-transform: scale(1.07) rotate(360deg);
      -ms-transform: scale(1.07) rotate(360deg);
      transform: scale(1.07) rotate(360deg);
    }
  `,
};

export default cssGlobal;
