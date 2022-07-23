import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";
import ReactTable from "react-table";
import AOS from "aos";
import "aos/dist/aos.css";
import Table from "./Table";


const data =[{
  id: 'ENG',
  name:"MANCHESTER UNITED - TOTTENHAM",
  age:'1x'},
  {
   id: 'ENG',
   name:"WATFORD - CHELSEA",
   age:'2X'},
   {
       id: 'INT',
       name:"Nigeria - canada",
       age:'X'},
       {
        id: 'ENG',
        name:"MANCHESTER UNITED - SPURS",
        age:'1x'},
        {
          id: 'ENG',
          name:"MANCHESTER UNITED - SPURS",
          age:'1x'},
          {
            id: 'ENG',
            name:"MANCHESTER UNITED - SPURS",
            age:'1x'},
] 
const colNames=[
   '','Matches','Predictions'
 ]
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <section id="header">
      <div className="container header">
        {/* <div className="header-left" data-aos="fade-right">
          <h1>
            <span>English Fantasy</span>
            <span>cross-platform secure</span>
            <span> Fantasy League</span>
          </h1>
          <p className="u-text-small">
            You can join and perticipate in our special Fantacy leages
          </p>
          <div className="header-cta">
            <Button text={"Join FPL"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"Join Uefa League"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div> */}
        <div className="header-right" >
          <h1> Todays Prediction</h1>
          
           <Table data={data} colNames={colNames}/>
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
