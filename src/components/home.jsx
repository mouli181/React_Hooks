import home from "../images/home.png";
import "../styles/home.css";
import menu from "../images/menu.png"
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import FoodCarousel from "./food";


function Home(){
    const items = [
        { image: "https://via.placeholder.com/150", name: "Pizza" },
        { image: "https://via.placeholder.com/150", name: "Burger" },
        { image: "https://via.placeholder.com/150", name: "Pasta" },
        { image: "https://via.placeholder.com/150", name: "Sushi" },
        { image: "https://via.placeholder.com/150", name: "Salad" },
        { image: "https://via.placeholder.com/150", name: "Tacos" },
        { image: "https://via.placeholder.com/150", name: "Biryani" },
        { image: "https://via.placeholder.com/150", name: "Sandwich" },
        { image: "https://via.placeholder.com/150", name: "Biryani" },
        { image: "https://via.placeholder.com/150", name: "Sandwich" },
      ];
      
    return(
        <div>
            <div className="container">
            <div className="ul-nav">
                <Link className="link" to="/login">
                <img src={home} alt="" width="20px" height="20px" />
                Login
                </Link>
                <Link className="link" to="/login">
                <img src={menu} alt="" height={"20px"} width={"20px"} />                
                About
                </Link>
                <Link className="link" to="/signin">
                <img src={home} alt="" width="20px" height="20px" />
                Contact
                </Link>
                <Dropdown />
            </div>
            </div>
            <div>
                
                <FoodCarousel items={items}  />

            </div>
        </div>
    );
}
export default Home;