import React from "react";
import "./FormInputs.css";
import { Checkbox, TextField } from "@mui/material";

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
            name="fullDisc"
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
              <TextField fullWidth size="small" name="subheading" />
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
                name="duty"
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
              <TextField size="small" name="tariff" fullWidth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImportGoods = () => {
  return (
    <div className="container">
      <div className="input__content padding">
        <span className="title padding">
          uses of the imported goods
          <br></br>Describe All uses (including design uses) to which the goods
          can be put
        </span>
        <div className="inputs">
          <TextField
            name="importGood"
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

export const Applicant5A = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>5A. Applicant</p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        In considering the goods which are the subject of this TCO application,
        is the applicant aware of any Australian manufacturers or producers of
        substitutable goods, or of potentially substitutable goods?
      </p>
      <div className="checks">
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>Yes</span>
        </div>
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>No</span>
        </div>
        <p style={{ fontSize: "0.8rem", marginLeft: "1.5rem" }}>
          If YES, please provide the names of these Australian manufacturers or
          producers.
        </p>
      </div>
      <div className="inputs">
        <TextField
          name="checkDetail"
          size="small"
          fullWidth
          multiline
          rows={4}
        />
      </div>
    </div>
  );
};

export const Applicant5B = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>5B. Imposter</p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        In considering the goods which are the subject of this TCO application,
        is the importer (as listed on page 2) aware of any Australian
        manufacturers or producers of substitutable goods or potentially
        substitutable goods?
      </p>
      <div className="checks">
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>Yes</span>
        </div>
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>No</span>
        </div>
        <p style={{ fontSize: "0.8rem", marginLeft: "1.5rem" }}>
          If YES, please provide the names of these Australian manufacturers or
          producers.
        </p>
      </div>
      <div className="inputs">
        <TextField
          name="checkImposter"
          size="small"
          fullWidth
          multiline
          rows={4}
        />
      </div>
    </div>
  );
};

export const Applicant5C = () => {
  return (
    <div className={`info__text margin`}>
      <div className={`title paddings`}>
        <p>
          5C. Please provide details of other information that the applicant{" "}
          <br></br>
          and/ or imposter may have to assist in locating any local manufactures
        </p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        In considering the goods which are the subject of this TCO application,
        is the importer (as listed on page 2) aware of any Australian
        manufacturers or producers of substitutable goods or potentially
        substitutable goods?
      </p>

      {/* industry association */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <p className="number">(i)</p>
        <div>
          <p>
            Is the applicant and/or importer a member of a relevant industry
            association and, if so, what is the name of the association?
          </p>
          <div className="checks">
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>Yes</span>
            </div>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              marginLeft: "1rem",
              paddingBottom: "0.5rem",
            }}
          >
            If YES, what is the name of the association(s):
          </p>
          <TextField size="small" />
        </div>
      </div>

      {/* Australian manufacturers name */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          borderTop: "1px solid grey",
          paddingTop: "0.6rem",
        }}
      >
        <p className="number">(ii)</p>
        <div>
          <p>
            Has the applicant and/or importer attended, in the past year, any
            trade fairs or industry events where Australian manufacturers and
            producers of goods that may be substitutable have been exhibitors?
          </p>
          <div className="checks">
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>Yes</span>
            </div>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              marginLeft: "1rem",
              paddingBottom: "0.5rem",
            }}
          >
            If YES, what is/are the name/s of relevant Australian manufacturers
            of potentially substitutable goods that may have exhibited?
          </p>
          <TextField size="small" />
        </div>
      </div>

      {/* Australian manufacturers name */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          borderTop: "1px solid grey",
          paddingTop: "0.6rem",
        }}
      >
        <p className="number">(iii)</p>
        <div>
          <p>
            In the past two years has the applicant and/or importer participated
            in government and/or trade procurement processes (for example,
            tenders for made-to-order capital equipment) which might indicate
            the existence of Australian manufacturers or producers of goods that
            are substitutable, or potentially substitutable, for the goods that
            are the subject of this TCO application?
          </p>
          <div className="checks">
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>Yes</span>
            </div>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              marginLeft: "1rem",
              paddingBottom: "0.5rem",
            }}
          >
            If YES, describe each procurement process, and type of goods,
            including made-to-order capital goods, that were the subject of each
            procurement process and any Australian manufacturers or producers
            known to have participated in each procurement process.
          </p>
          <TextField size="small" multiline fullWidth rows={5} />
        </div>
      </div>
    </div>
  );
};

export const PrescribedOrg = () => {
  return (
    <div className={`info__text margin`}>
      <div className={`title padding`}>
        <p style={{ fontSize: "0.74rem" }}>
          6B. Searches of three different databases contained in trade
          directories,<br></br> public search engines or websites listing
          australian products
        </p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        Have you asked a prescribed organisation to obtain advice about whether
        there are manufacturers or producers in Australia of substitutable
        goods, or of potentially substitutable goods?
      </p>
      <div>
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>Yes</span>
          <p style={{ fontSize: "0.8rem", marginLeft: "1.5rem" }}>
            If YES, please provide the names of these Australian manufacturers
            or producers.
          </p>
        </div>
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>No</span>
          <p style={{ fontSize: "0.8rem", marginLeft: "1.5rem" }}>
            If you have not obtained a report from a prescribed organisation you
            are required to answer 6B.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DatabaseSearch = () => {
  return (
    <div className={`info__text margin`}>
      <div className={`title padding`}>
        <p style={{ fontSize: "0.74rem" }}>
          6A. Prescribed organisations such as the industry Capability Network
          <br></br> are listed in Regulation 144 of Customs Regulation 2015.
        </p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        If you have not obtained a report from a prescribed organisation, you
        must make enquiries in at least three databases to locate the possible
        existence of Australian manufacturers or producers of goods that may be
        substitutable for the goods the subject of the TCO application. Examples
        of these databases may include trade directories such as
        <strong> Australian B2B</strong>, search engines such as
        <strong> Google</strong>, and websites listing Australian products such
        as <strong> Australian Made</strong>. Please refer to the Domestic
        manufacturers: importers page on the Internet at
        <a
          style={{ padding: "0 0.3rem" }}
          href="www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers"
        >
          www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers
        </a>
        for guidance as to what the Department considers to be a reasonable
        search. Includes links to external Internet sites.
      </p>
      <p style={{ paddingTop: "0.7rem" }}>
        Please attach printouts of the search results. For search engines such
        as Google, please supply only the first three pages.
      </p>
      <div className="inputs" style={{ paddingTop: "0.7rem" }}>
        <div className="fields">
          <div className="text">
            <p>
              <strong>1. Name of database:</strong>
            </p>
            <p className="subText">Search terms used in database:</p>
          </div>
          <div className="textField">
            <TextField fullWidth size="small" name="subheading" />
          </div>
        </div>
        <div className="fields">
          <div className="text">
            <p>
              <strong>2. Name of database:</strong>
            </p>
            <p className="subText">Search terms used in database:</p>
          </div>
          <div className="textField">
            <TextField fullWidth size="small" name="subheading" />
          </div>
        </div>
        <div className="fields">
          <div className="text">
            <p>
              <strong>3. Name of database:</strong>
            </p>
            <p className="subText">Search terms used in database:</p>
          </div>
          <div className="textField">
            <TextField fullWidth size="small" name="subheading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Industry = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>6C. Industry associations</p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        Has the applicant and/or importer made enquiries of industry
        associations in Australia representing suppliers, manufacturers of the
        goods that may be substitutable to those the subject of the TCO?
      </p>
      <div>
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>Yes</span>
          <p style={{ fontSize: "0.8rem", marginLeft: "1.5rem" }}>
            Please attach a copy of the terms of the request and any response
            received.
          </p>
        </div>
        <div className="check">
          <Checkbox />
          <span style={{ fontSize: "0.8rem" }}>No</span>
          <p style={{ fontSize: "0.8rem", marginLeft: "1.7rem" }}>
            Please explain why you have not made enquiries.
          </p>
        </div>
        <TextField size="small" fullWidth multiline rows={5} />
      </div>
    </div>
  );
};

export const Notification = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>7. Notification of potential Australian manufacturers</p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        If any of the answers to questions 5 or 6 identified any potential local
        manufacturers of substitutable goods, please provide details of the
        enquiries that you undertook to notify those local manufacturers of your
        application and to seek advice whether they believe they manufacture any
        substitutable goods. Please refer to the Domestic manufacturers:
        importers page on the Internet at
        <a
          style={{ padding: "0 0.3rem" }}
          href="www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers"
        >
          www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers
        </a>
        for a suggested format of a letter to a potential local manufacturer of
        substitutable goods.
      </p>
      <p style={{ padding: "0.5rem 0" }}>
        Please provide a copy of your request to each business. Please provide
        the business names, details of the contact that you made and all
        responses received at the time of lodging this application.
      </p>

      <div>
        <div className="businessName">
          <p>
            <strong>1. Name and address of business:</strong>
          </p>
          <div className="name">
            <TextField size="small" variant="standard" fullWidth />
          </div>
        </div>
        <div className="check" style={{ justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem" }}>
            Please attach a copy of the terms of the request and any response
            received.
          </p>
          <div className="check">
            <Checkbox />
            <span style={{ fontSize: "0.8rem" }}>Yes</span>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
        </div>
        <div className="check" style={{ justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem" }}>
            Please provide a copy of the response provided, if any. Is their
            response attached?
          </p>
          <div className="check">
            <Checkbox />
            <span style={{ fontSize: "0.8rem" }}>Yes</span>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="businessName">
          <p>
            <strong>2. Name and address of business:</strong>
          </p>
          <div className="name">
            <TextField size="small" variant="standard" fullWidth />
          </div>
        </div>
        <div className="check" style={{ justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem" }}>
            Please attach a copy of the terms of the request and any response
            received.
          </p>
          <div className="check">
            <Checkbox />
            <span style={{ fontSize: "0.8rem" }}>Yes</span>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
        </div>
        <div className="check" style={{ justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem" }}>
            Please provide a copy of the response provided, if any. Is their
            response attached?
          </p>
          <div className="check">
            <Checkbox />
            <span style={{ fontSize: "0.8rem" }}>Yes</span>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="businessName">
          <p>
            <strong>3. Name and address of business:</strong>
          </p>
          <div className="name">
            <TextField size="small" variant="standard" fullWidth />
          </div>
        </div>
        <div className="check" style={{ justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem" }}>
            Please attach a copy of the terms of the request and any response
            received.
          </p>
          <div className="check">
            <Checkbox />
            <span style={{ fontSize: "0.8rem" }}>Yes</span>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
        </div>
        <div className="check" style={{ justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem" }}>
            Please provide a copy of the response provided, if any. Is their
            response attached?
          </p>
          <div className="check">
            <Checkbox />
            <span style={{ fontSize: "0.8rem" }}>Yes</span>
            <div className="check">
              <Checkbox />
              <span style={{ fontSize: "0.8rem" }}>No</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Justification = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>8. Justification for application</p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        Where potential Australian producers or manufacturers have been
        identified in questions 5, 6 or 7, please provide details why you
        believe that they do not produce substitutable goods in Australia in the
        ordinary course of business.
      </p>
      <p style={{ fontSize: "0.9rem", padding: "0.5rem 0" }}>
        Please refer to the attached definitions for the legislative definitions
        of ‘core criteria’, ‘substitutable goods’, ‘goods produced in Australia’
        and ‘the ordinary course of business’.
      </p>
      <div>
        <TextField size="small" fullWidth multiline rows={5} />
      </div>
    </div>
  );
};

export const ApplicantDeclaration = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>Applicant’s declaration</p>
      </div>
      <div className="position">
        <div className="field">
          <span style={{ fontSize: "0.9rem" }}>I,</span>
          <TextField variant="standard" size="small" fullWidth />
        </div>
        <div className="field">
          <span style={{ fontSize: "0.7rem", width: "6rem" }}>
            Position held:
          </span>
          <TextField variant="standard" size="small" fullWidth />
        </div>
      </div>
      <div className="field" style={{ paddingTop: "1rem" }}>
        <span style={{ fontSize: "0.8rem" }}>Company (if applicable):</span>
        <TextField variant="standard" size="small" fullWidth />
      </div>

      {/* declare */}
      <div className="declaration">
        <p>declare that:</p>

        <div className="col">
          <span className="count">1.</span>
          <p>I have the authority to act on behalf of the company/applicant;</p>
        </div>

        <div className="col">
          <span className="count">2.</span>
          <p>
            To the best of my knowledge and belief the information contained in
            this form including any attachments is correct and that no relevant
            information has been omitted;
          </p>
        </div>

        <div className="col">
          <span className="count">3.</span>
          <p>
            To the best of my knowledge and belief the information contained in
            this form including any attachments is correct{" "}
            <strong> and that no relevant information has been omitted;</strong>
          </p>
        </div>

        <div className="col">
          <span className="count">3.</span>
          <p>
            I have ensured that questions 1 to 8 are completed and supporting
            documents are provided; and
          </p>
        </div>

        <div className="col">
          <span className="count">4.</span>
          <p>
            I agree, in submitting this form by electronic means (including
            facsimile) that, for the purposes of subsection 14(1) of the
            Electronic Transactions Act 1999, this application will be taken to
            have been lodged when it is first received by an officer of Customs,
            or if by e-mail to
            <a style={{ padding: "0.3rem 0" }} href="tarcon@homeaffairs.gov.au">
              tarcon@homeaffairs.gov.au
            </a>
            when it is first accessed by an officer of Customs as specified in
            subsection 269F(4).
          </p>
        </div>

        <div className="col" style={{ padding: "0.7rem 0" }}>
          <span className="count">5.</span>
          <p>
            I have read I have read the information about Applicant’s
            Obligations when applying for a Tariff Concession Order (TCO) at
            <a href="www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers/application-forms-guidelines-for-tariff-concession-orders">
              www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers/application-forms-guidelines-for-tariff-concession-orders
            </a>
            and the definitions attached to this form and understand that it is
            my responsibility to establish to the satisfaction of the
            Comptroller-General of Customs that there are reasonable grounds for
            asserting that the application meets the core criteria for the grant
            of a TCO.
          </p>
        </div>

        <div className="col" style={{ padding: "0.7rem 0" }}>
          <span className="count">6.</span>
          <p>
            I acknowledge that I understand that under section 269M(6) that at
            any time during the period of 150 days from the gazettal day, the
            Comptroller-General of Customs may, for the purpose of dealing with
            a TCO application, and despite part 6 of the Australian Border Force
            Act 2015, give a copy of all, or of a part, of the application to a
            prescribed organisation with a view to obtaining the advice of the
            organisation in relation to the question whether there are any
            producers in Australia of substitutable goods.
          </p>
        </div>

        <div className="signature">
          <div className="row">
            <p>Signature of applicant / agent / broker:</p>
          </div>

          <div className="row">
            <p>Date :</p>
          </div>
        </div>

        <div className="note">
          <p>
            NOTE: Section 234 of the Customs Act 1901 provides that it is an
            offence to make a statement (or omission) to an officer that is
            false or misleading in a material particular or to omit or cause to
            be omitted from a statement any matter or thing reckless as to the
            fact that without the matter or thing the statement is misleading in
            a material particular.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CheckList = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>Checklist</p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        Before lodging your form please ensure that you have attached the
        following
      </p>

      <div
        className="checks"
        style={{ flexWrap: "wrap", paddingTop: "1rem" }}
      >
        <div className="check">
          <Checkbox />
          <span>IDM / samples </span>
        </div>
        <div className="check">
          <Checkbox />
          <span>Local manufacturer search results </span>
        </div>
        <div className="check">
          <Checkbox />
          <span>Application signed and dated</span>
        </div>
        <div className="check">
          <Checkbox />
          <span>Questions 1-8 answered </span>
        </div>
        <div className="check">
          <Checkbox />
          <span>All enquiries requested undertaken</span>
        </div>
      </div>
    </div>
  );
};
