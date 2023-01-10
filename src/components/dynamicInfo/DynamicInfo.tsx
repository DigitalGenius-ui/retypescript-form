import "./DynamicInfo.css";

interface infoProps {
  item: any;
}

interface subMenu {
  title: string;
  disc: string;
}

export const InfoComponent = ({ item }: infoProps) => {
  const { subTitle, title, number, link, desc, subDiscs, extraInfo, footInfo } =
    item;

  return (
    <div className={`info__text ${subTitle ? "margin" : ""}`}>
      <div className={`title ${subTitle ? "padding" : ""}`}>
        <p>{title}</p>
        <span>{subTitle && subTitle}</span>
      </div>
      <div className="desc" style={{ fontSize: "0.8rem" }}>
        <span>{number}</span>
        <div>
          <p>
            {desc} {link && <a href={link}>{link}</a>}
          </p>
          {/* submenut  */}
          {subDiscs &&
            subDiscs.map((sub: subMenu) => (
              <div className="desc" style={{ paddingTop: "0.5rem" }}>
                <span>{sub.title}</span>
                <p style={{ fontSize: "0.8rem" }}>{sub.disc}</p>
              </div>
            ))}
          {extraInfo && <p style={{ padding: "0.5rem 0" }}>{extraInfo}</p>}
          {footInfo && <p>{footInfo}</p>}
        </div>
      </div>
    </div>
  );
};

export const CompleteApp = () => {
  const data = [
    {
      title: "(a)",
      disc: "a full description of the goods to which the application relates; and",
    },
    {
      title: "(b)",
      disc: "a statement of the tariff classification that, in the opinion of the applicant, applies to the goods; and",
    },
    {
      title: "(c)",
      disc: `if the applicant is not proposing to make use of the TCO to import the goods to which the application 
        relates into Australia on the applicant’s own behalf – the identity of the importer for whom the applicant is acting; and`,
    },
    {
      title: "(d)",
      disc: `particulars of all enquiries made by the applicant (including enquiries made of prescribed organisations) 
      to assist in establishing that there were reasonable grounds for believing that on the day on which the application
      was lodged, there were no producers in Australia of substitutable goods.`,
    },
  ];
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>Completing the application</p>
      </div>
      <div className="desc" style={{ fontSize: "0.8rem" }}>
        <span>(d)</span>
        <div>
          <p>
            Subsection 269F requires that a TCO application be in writing, be in
            an “approved form”, contain such information as the form requires,
            and be signed in the manner indicated in the form.
          </p>
          <h1 style={{ fontSize: "1rem" }}>
            <strong>
              This is the approved form for the purposes of that section.
            </strong>
          </h1>
        </div>
      </div>
      <div className="desc" style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
        <span>(e)</span>
        <div>
          <p>Subsection 269F(3) states that a TCO application must contain:</p>
          {/* submenut  */}
          <div
            className="desc"
            style={{ paddingTop: "0.5rem", flexDirection: "column" }}
          >
            {data.map((item) => (
              <div className="desc" style={{ fontSize: "0.8rem" }}>
                <span>{item.title}</span>
                <div>
                  <p>{item.disc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Questions = () => {
  const data = [
    {
      title: "(f)",
      disc: `Failure to supply the information required by this form will result in 
      rejection of the application (and in the loss of operative date).`,
    },
    {
      title: "(g)",
      disc: `The Comptroller-General of Customs may require an applicant to substantiate, with 
      documentary evidence, any information provided in the application form. The Comptroller-General
      of Customs may also undertake its own enquiries as allowed under section 269M.`,
    },
    {
      title: "(h)",
      disc: `Receipt of your application will be acknowledged. Any resultant TCO will operate from the date of receipt.`,
    },
    {
      title: "(i)",
      disc: `Where an application is accepted as being a valid application, the identity of the applicant and of 
      the importer for whom the applicant is acting will be published in the Commonwealth of Australia Tariff
      Concessions Gazette (the Gazette).`,
    },
  ];
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>Questions 1 to 8 must be answered</p>
      </div>
      {data.map((item) => (
        <div className="desc" style={{ padding: "0.4rem 0" }}>
          <span>{item.title}</span>
          <p>{item.disc}</p>
        </div>
      ))}
      <div className="desc" style={{ padding: "0.4rem 0" }}>
        <span>(j)</span>
        <p>
          Further information on the Tariff Concession System is available in
          Part XVA of the Customs Act 1901, in the Domestic manufacturers:
          importers page on the Internet at
          <a
            style={{ padding: "0 0.4rem" }}
            href="www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers"
          >
            www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers
          </a>
          or by emailing
          <a style={{ padding: "0 0.4rem" }} href="tarcon@homeaffairs.gov.au">
            tarcon@homeaffairs.gov.au
          </a>
          .
        </p>
      </div>
      <div className="desc" style={{ padding: "0.4rem 0" }}>
        <span>(k)</span>
        <p>
          Attached to this form are extracts from relevant legislation. Also
          please refer to ‘Applicant’s Obligations’ at
          <a
            style={{ padding: "0 0.4rem" }}
            href="www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers/application-forms-guidelines-for-tariff-concession-orders"
          >
            www.homeaffairs.gov.au/busi/domestic-manufacturers-and-importers/application-forms-guidelines-for-tariff-concession-orders
          </a>
          containing advice as to what the Comptroller-General of Customs
          considers to be ‘reasonable enquiries’, advice on conducting searches
          on national and international search engines and a suggested format
          letter that you might choose to use when contacting potential local
          manufacturers to determine if they produce substitutable goods.
        </p>
      </div>
    </div>
  );
};

export const GoodsDisc = () => {
  const data = [
    {
      title: "(a)",
      disc: `The description of the goods in the application may be used as the description of the goods in the TCO (if made).`,
    },
    {
      title: "(b)",
      disc: `The application must provide a full description of the goods, including the physical features of the various
       components of the goods. It must not describe the goods in terms of what they do.`,
    },
  ];

  const subData = [
    {
      title: "(i)",
      disc: "described in terms other than in generic terms; or",
    },
    {
      title: "(ii)",
      disc: "described in terms of their intended end use; or",
    },
    {
      title: "(iii)",
      disc: `declared by the regulations to be goods to which a TCO should not extend.`,
    },
    {
      title: "",
      disc: `Goods will be taken to be described in terms other than in generic terms if, for 
      example, their description, either directly or by implication, indicates that they are
      goods of a particular brand or model, or that a particular part number applies to the goods.`,
    },
  ];
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>Completing the application</p>
      </div>
      {data.map((item) => (
        <div
          className="desc"
          style={{ fontSize: "0.8rem", padding: "0.3rem 0" }}
        >
          <span>{item.title}</span>
          <div>
            <p>{item.disc}</p>
          </div>
        </div>
      ))}
      <div className="desc" style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
        <span>(c)</span>
        <div>
          <p>
            In accordance with section 269SJ, the Comptroller-General of Customs
            must not make a TCO in respect of goods:
          </p>
          {/* submenut  */}
          <div
            className="desc"
            style={{ paddingTop: "0.5rem", flexDirection: "column" }}
          >
            {subData.map((item) => (
              <div className="desc" style={{ fontSize: "0.8rem" }}>
                <span>{item.title ? item.title : ""}</span>
                <div>
                  <p>{item.disc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="desc" style={{ marginTop: "1rem" }}>
        <span>(d)</span>
        <p>
          Guidance on the drafting of the description of goods is contained in
          relevant Practice Statements on the internet at
          <a style={{paddingLeft : "0.3rem"}} href="www.homeaffairs.gov.au">www.homeaffairs.gov.au</a>. Failure
          to comply with the Comptroller-General of Customs’ requirements may
          result in rejection of the application.
        </p>
      </div>
    </div>
  );
};

export const MaterialDisc = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>2. Illustrative descriptive material</p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        <strong>
          Attach technical and illustrative descriptive material (IDM)
        </strong>
        . If an industry standard is referred to in the description of the
        goods, attach extracts from the relevant industry standard, details of
        the relevant industry organization that has approved the standard, the
        standards reference number and date of publication. If appropriate
        include a sample or, alternatively, detailed coloured photos to enable
        full and accurate identification of the goods the subject of the
        application. This application will be rejected if insufficient or
        inadequate IDM is provided.
      </p>
      <p style={{ paddingTop: "0.7rem", fontSize: "0.9rem" }}>
        Please note, simply providing a reference to a website is not acceptable
        and may result in the application being rejected.
      </p>
    </div>
  );
};
