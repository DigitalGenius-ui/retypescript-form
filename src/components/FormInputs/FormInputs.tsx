import React from "react";
import "./FormInputs.css";
import { TextField } from "@mui/material";

interface inputProps {
  label: string;
  name: string;
}

export const Input = ({ label, name }: inputProps) => {
  return (
    <TextField
      size="small"
      label={label}
      variant="outlined"
      fullWidth
      className="input"
      name={name}
    />
  );
};

export const ApplicantsDetails = () => {
  return (
    <div className="container">
      <div className="input__content">
        <span className="title">Application Details</span>
        <div className="inputs">
          <div className="flex">
            <Input label="Applicant's name" name="ApplicantName" />
            <Input
              label="australian business number (ABN)"
              name="applicantBusinessNumber"
            />
          </div>
          <TextField
            size="small"
            multiline
            label="Postal Address"
            variant="outlined"
            fullWidth
            className="input"
            name="applicantPostal"
          />
          <div className="flex">
            <Input label="Applicant's reference" name="applicantReference" />
            <Input label="Company contact" name="applicantCompany" />
          </div>
          <div className="flex">
            <Input label="Telephone number" name="applicantTelephoneNumber" />
            <Input label="Company contact" name="applicantCompanyContact" />
          </div>
          <div className="flex">
            <Input label="Mobile number" name="applicantMobile" />
            <Input label="Email address" name="applicantEmail" />
          </div>
          <div className="flex">
            <Input label="Fax number" name="applicantFax" />
          </div>
        </div>
      </div>
      <h1>
        If the applicant (as named above) is not an importer intending to use
        the TCO to import the goods the subject of the application, please
        complete the Importer details section below (refer to paragraph
        s.269F(3)(c)).
      </h1>
    </div>
  );
};

export const ImporterDetails = () => {
  return (
    <div className="container">
      <div className="input__content">
        <span className="title">Importer Details</span>
        <div className="inputs">
          <div className="flex">
            <Input
              label="Importer's name (if same as applicant, write as above"
              name="importerName"
            />
            <Input
              label="Australian business number (ABN)"
              name="importerBusinessNumber"
            />
          </div>
          <TextField
            size="small"
            multiline
            label="Postal Address"
            variant="outlined"
            fullWidth
            className="input"
            name="importerPostal"
          />
          <div className="flex">
            <Input label="Importer's reference" name="importerReference" />
            <Input label="Position held" name="importerPosition" />
          </div>
          <div className="flex">
            <Input label="Telephone number" name="importerTelephone" />
            <Input label="Company contact" name="importerCompany" />
          </div>
          <div className="flex">
            <Input label="Mobile number" name="importerMobile" />
            <Input label="Email address" name="importerEmail" />
          </div>
          <div className="flex">
            <Input label="Fax number" name="importerFax" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AgentDetails = () => {
  return (
    <div className="container">
      <div className="input__content">
        <span className="title">Agent/broker details (if applicable)</span>
        <div className="inputs">
          <div className="flex">
            <Input label="Agent's name" name="agentName" />
            <Input
              label="Australian business number (ABN)"
              name="agentBusinessNumber"
            />
          </div>
          <TextField
            size="small"
            multiline
            label="Postal Address"
            variant="outlined"
            fullWidth
            className="input"
            name="agentPostal"
          />
          <div className="flex">
            <Input label="Importer's reference" name="agentReference" />
            <Input label="Agency contact" name="agentContact" />
          </div>
          <div className="flex">
            <Input label="Telephone number" name="agentTelephone" />
            <Input label="Position held" name="agentPosition" />
          </div>
          <div className="flex">
            <Input label="Mobile number" name="agentMobile" />
            <Input label="Email address" name="agentEmail" />
          </div>
          <div className="flex">
            <Input label="Fax number" name="agentFax" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FullDisc = () => {
  return (
    <div className="container">
      <div className="input__content">
        <span className="title">
          provide full description of the goods to which the application relates
        </span>
        <div className="inputs">
          <TextField
            name="goodDetails"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export const Tariff = () => {
  return (
    <div className="container">
      <div className="input__content">
        <span className="title">3. Tariff classification</span>
        <div className="inputs">
          <div className="fields">
            <div className="text">
              <span>
                (a) Identify the tariff classification (to 8 figure subheading
                level)
              </span>
            </div>
            <div className="textField">
              <TextField
                fullWidth
                size="small"
                name="goodDetails"
              />
            </div>
          </div>
          <div className="fields">
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
            >
              <span>(b) Identify the General Duty rate</span>
              <TextField
                sx={{ width: "10rem" }}
                size="small"
                name="goodDetails"
                variant="standard"
              />
              %
            </div>
          </div>
          <div className="fields">
            <div className="text">
              <span>
                (c) If a Tariff Advice (TA) for the goods has been sought or
                obtained, please provide the TA No or attach a copy.
              </span>
            </div>
            <div className="textField">
              <TextField size="small" name="goodDetails" fullWidth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
