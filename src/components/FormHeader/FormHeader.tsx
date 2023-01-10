import React from "react";
import "./FormHeader.css";
import logo from "../../images/logo.png";
import DoneIcon from "@mui/icons-material/Done";

const FormHeader = () => {
  return (
    <div className="container">
      <div className="header">
        {/* logo part  */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="form__headTitle">
          <h1>
            Application<br></br> for tariff concession order(TOC)
          </h1>
        </div>
      </div>
      {/* information part  */}
      <div className="information">
        <p className="first__info">
          Either type in the fields provided or print this form and complete it
          using a pen and BLOCK LETTERS.
          <span className="tick">
            <DoneIcon style={{ fontSize: "0.9rem" }} />
          </span>{" "}
          Tick where applicable.
        </p>
        <p className="second__info">
          <strong>
            IMPORTANT: Please read the information below carefully before
            completing this form.
          </strong>
          A reference to a Part, section or subsection in this form is a
          reference to a provision of Part XVA of the Customs Act 1901, unless
          otherwise specified.
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
