import { chakra } from "@chakra-ui/react";
import "./Header.css"
import { CiSearch } from "react-icons/ci";

const Header=({expecting})=>{
    return(
        <div className="root">
            
                <chakra.h4 className="jump" color={expecting.color} >jump
                    <chakra.span color={expecting.secondColor}>.</chakra.span></chakra.h4>
       
            <div className="box1">
                <h1 className="headText">Home</h1>
                <h1 className="headText">Man</h1>
                <h1 className="headText">Woman</h1>
                <h1 className="headText">Kids</h1>
                <h1 className="headText">Sales</h1>
            </div>
            <div className="box2">
                <input className="input" type="search" placeholder="Search here..."  />
                <CiSearch size={"30px"}style={{position:"absolute", right:"10px",top:"8px"}} />
            </div>
        </div>
    )
}

export default Header