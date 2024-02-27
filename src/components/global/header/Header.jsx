import cssHeader from "../../../styles/header.css";
import { MdPersonSearch } from "react-icons/md";

function Header() {
  const {
    HeaderContainer,
    LogoContainer,
    SearchBarForm,
    SearchBarInput,
    SearchBarBtn,
  } = cssHeader;

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="public/img/logo_1.png" alt="Logo" width={45} />
      </LogoContainer>

      
    </HeaderContainer>
  );
}

export default Header;
