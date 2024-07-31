const imgPath = "../images/Logo.png";
import Logo from "/public/images/Logo.png";
import companyLogo from "../../public/companyLogo.svg";
import menu from "../../public/menu.svg"
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return(
        <header>
            <div className="flex justify-between items-center">
            <a href="#" className="h-4">
                <img className="max-w-none" src={companyLogo} alt="" />
            </a>
            <Navigation className={"flex gap-5px ssm:hidden"}/>
            <button>
                <img src={menu} alt="" />
            </button>
            </div>
        </header>
    )
};

export default Header;