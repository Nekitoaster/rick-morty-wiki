import styled from "styled-components";

const black_1 = "#181b22";
const black_2 = "#1a1d24";
const lime = "#c9e049";
const cssHeader = {
  HeaderContainer: styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    width: 100%;
    height: 60px;
    border-radius: 12px 12px 0 0;
    border: 1px solid ${lime};
    background: linear-gradient(${black_1}, ${black_2});
  `,
  LogoContainer: styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
};

export default cssHeader;
