import { FaSearch } from "react-icons/fa";
import InputComponent from "../../atoms/input";
import Hero from "../../molecules/header-hero";
import "./index.scss";
import { mainLogo } from "../../../assets/constant";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div className="header-left__logo">
            <img src={mainLogo} alt="" />
          </div>
          <div className="header-left__address">
            <span>
              <IoLocationOutline />
            </span>
            <span>Ho Chi Minh , Vietnam</span>
          </div>
          <InputComponent
            borderColor="rgba(250, 125, 11, 1)"
            bgColor="#fff"
            prefix={<FaSearch style={{ color: "rgba(250, 125, 11, 1)" }} />}
            shape="round"
            className="header-input"
            placeholder="Enter your search keywords ..."
          />
        </div>
        <div className="header-right">
          <div className="header-right__phone">
            <span>
              <CiPhone className="header-icon" />
            </span>
            <span> +84 123-456-789</span>
          </div>
          <div className="header-right__email">
            <span>
              <MdOutlineEmail className="header-icon" />
            </span>
            <span> support@gmail.com</span>
          </div>
        </div>

        {/* <SideBarHeader className="header-sidebar" name="Trường" /> */}
      </div>
      <nav className="header-hero">
        <Hero />
      </nav>
    </header>
  );
}

export default Header;
