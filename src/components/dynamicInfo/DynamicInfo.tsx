import "./DynamicInfo.css";

interface infoProps {
  item: any;
}

interface subMenu {
  title: string;
  disc: string;
}

interface ordinaryText {
  col: string;
  text: string;
  subText: string[];
}

const DynamicOrdinary = ({ col, text, subText }: ordinaryText) => {
  return (
    <div className="goodsText">
      <span>{col}</span>
      <div>
        <p>{text}</p>
        <div className="subTexts">
          {subText.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

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
            subDiscs.map((sub: subMenu, i: number) => (
              <div key={i} className="desc" style={{ paddingTop: "0.5rem" }}>
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
            {data.map((item, i) => (
              <div key={i} className="desc" style={{ fontSize: "0.8rem" }}>
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
      {data.map((item, i) => (
        <div key={i} className="desc" style={{ padding: "0.4rem 0" }}>
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
      {data.map((item, i) => (
        <div
          key={i}
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
            {subData.map((item, i) => (
              <div key={i} className="desc" style={{ fontSize: "0.8rem" }}>
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
          <a style={{ paddingLeft: "0.3rem" }} href="www.homeaffairs.gov.au">
            www.homeaffairs.gov.au
          </a>
          . Failure to comply with the Comptroller-General of Customs’
          requirements may result in rejection of the application.
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

export const ApplicantInfo = () => {
  return (
    <div className={`info__text margin`}>
      <div className={`title paddings`}>
        <p>
          5. Infomation that the applicats and imposter has, regarding
          Australian <br></br> manufacturers of substitutable goods or
          potentially substitutable goods
        </p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        The following questions require the applicant and the importer (if a
        different party to the applicant) to provide details of all information
        they have with regard to the presence of Australian manufacturers of
        substitutable goods.
      </p>
    </div>
  );
};

export const Enquiries = () => {
  return (
    <div className={`info__text margin`}>
      <div className={`title paddings`}>
        <p>
          6. Enquiries that the applicant and/or importer has made regarding
          local <br></br> manufacturers of substitutable goods, or of
          potentially substitutable goods
        </p>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        The following questions require you to provide details of all enquiries
        that the applicant and/or importer have made to assist the
        Comptroller-General in establishing that there are reasonable grounds
        for believing that, on the day on which the application was lodged,
        there were no producers or manufacturers in Australia of substitutable
        goods.
      </p>
    </div>
  );
};

export const Privacy = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>Privacy statement</p>
      </div>
      <p style={{ fontSize: "0.9rem", lineHeight: "1.3rem" }}>
        Information provided on this form may be disclosed to a number of
        agencies including the Department of Infrastructure and Regional
        Development, the Australian Federal Police, the Australian Criminal
        Intelligence Commission, the Attorney-General’s Department and the
        Department of Foreign Affairs and Trade. Any false or misleading
        statements may result in penalty action under Section 243T or 243U of
        the Customs Act 1901. Personal information is collected, used, stored
        and disclosed by the Department of Home Affairs (the Department) in
        accordance with the Australian Privacy Principles in schedule 1 of the
        Privacy Act 1988. Further information regarding how the Department,
        collects, stores, uses and discloses personal information may be found
        in form 1442i Privacy notice. More information about how the Department
        handles personal information can be found in the Department’s Privacy
        policy at
        <a
          style={{ padding: "0 0.3rem" }}
          href="www.homeaffairs.gov.au/about/access-accountability/privacy"
        >
          www.homeaffairs.gov.au/about/access-accountability/privacy
        </a>
        .
      </p>
    </div>
  );
};

export const FormComplete = () => {
  return (
    <div className={`info__text`}>
      <p style={{ fontSize: "0.9rem", lineHeight: "1.3rem" }}>
        <strong>
          WHEN THIS FORM HAS BEEN COMPLETED LODGE IT WITH THE
          COMPTROLLER-GENERAL OF CUSTOMS BY:
        </strong>
      </p>
      <ul className="lists">
        <li>
          emailing it to{" "}
          <a href="mailto: tarcon@homeaffairs.gov.au ">
            tarcon@homeaffairs.gov.au
          </a>
          (preferred) <strong> or</strong>
        </li>
        <li>
          posting it by prepaid post to: Manager Tariff Concessions
          Administration Department of Home Affairs PO Box 25 BELCONNEN ACT 2617
        </li>
      </ul>
    </div>
  );
};

export const Core = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>269C – Core criteria</p>
      </div>
      <p style={{ fontSize: "0.8rem", lineHeight: "1rem" }}>
        For the purposes of this Part, a TCO application is taken to meet the
        core criteria if, on the day on which the application was lodged, no
        substitutable goods were produced in Australia in the ordinary course of
        business.
      </p>
    </div>
  );
};

export const GoodsProduced = () => {
  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>269D – Goods produced in Australia</p>
      </div>
      <div className="goodsText">
        <span>(1)</span>
        <p>
          For the purposes of this Part, goods, other than unmanufactured raw
          products, are taken to be produced in Australia if the goods are
          wholly or partly manufactured in Australia.
        </p>
      </div>
      <div className="goodsText">
        <span>(2)</span>
        <p>
          For the purposes of this Part, goods are to be taken to have been
          partly manufactured in Australia if at least one substantial process
          in the manufacture of the goods was carried out in Australia.
        </p>
      </div>
      <div className="goodsText">
        <span>(3)</span>
        <div>
          <p>
            Without limiting the meaning of the expression substantial process
            in the manufacture of the goods, any of the following operations or
            any combination of those operations does not constitute such a
            process:
          </p>
          <div className="subTexts">
            <p>
              (a) operations to preserve goods during transportation or storage;
            </p>
            <p>
              (b) operations to improve the packing or labelling or marketable
              quality of goods;
            </p>
            <p>(c) operations to prepare goods for shipment;</p>
            <p>(d) simple assembly operations;</p>
            <p>
              (e) operations to mix goods where the resulting product does not
              have different properties from those of the goods that have been
              mixed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OrdinaryCourse = () => {
  const firstSubText = [
    "(a) operations to preserve goods during transportation or storage;",
    "(b) operations to improve the packing or labelling or marketable quality of goods;",
    "(c) operations to prepare goods for shipment;",
    "(d) simple assembly operations;",
    "(e) operations to mix goods where the resulting product does not have different properties from those of the goods that have been mixed.",
  ];

  const secondSubText = [
    "(a) a producer in Australia could produce substitutable goods, in respect of goods the subject of the TCO application, with existing facilities; and",
    "(b) the substitutable goods the producer could produce would be made-to-order capital equipment; and",
    "(c) in the 5 years before the application was lodged, the producer has made goods requiring the same labour skills, technology and design expertise as the substitutable goods the producer could produce; and",
    "(d) the producer is prepared to accept an order to supply substitutable goods in respect of goods the subject of the TCO Application.",
  ];

  const thirdData = [
    "(a) that is made in Australia on a one-off basis to meet a specific order rather than being the subject of regular or intermittent production; and",
    "(b) that is not produced in quantities indicative of a production run.",
  ];

  return (
    <div className={`info__text`}>
      <div className={`title`}>
        <p>269E – The ordinary course of business</p>
      </div>
      <DynamicOrdinary
        col="(1)"
        text="For the purposes of this Part, other than section 269Q, goods 
        (other than made-to-order capital equipment) that are substitutable 
        goods in relation to goods the subject of a TCO application are taken to 
        be produced in Australia in the ordinary course of business if:"
        subText={firstSubText}
      />
      <DynamicOrdinary
        col="(2)"
        text="For the purposes of this Part, substitutable goods, in respect of 
        goods the subject of a TCO application, are taken to be produced in Australia 
        in the ordinary course of business if:"
        subText={secondSubText}
      />
      <DynamicOrdinary
        col="(3)"
        text="In this section made-to-order capital equipment means a particular item of capital equipment:"
        subText={thirdData}
      />
    </div>
  );
};

export const FinalInfo = () => {
  return (
    <>
      <h1 className="info">
        Information for applicants – some useful definitions from the Customs
        Act 1901
      </h1>
      <div className={`info__text`}>
        <div className={`title`}>
          <p>269B – Interpretation</p>
        </div>
        <p style={{ fontSize: "0.9rem", lineHeight: "1.3rem" }}>
          Subsection 269B(1)
        </p>
        <div className="subText">
          <p>
            <strong>Capital equipment </strong> means goods, which if imported
            into Australia, would be goods to which Chapters 84, 85, 86, 87, 89
            or 90 of Schedule 3 to the Customs Tariff Act 1995 would apply.
          </p>
          <p>
            <strong>Substitutable goods </strong>, in respect of goods the
            subject of a TCO application or of a TCO, means goods produced in
            Australia that are put, or are capable of being put, to a use that
            corresponds with a use (including a design use) to which the goods
            the subject of the application or of the TCO can be put.
          </p>
        </div>
        <p style={{ fontSize: "0.9rem", paddingTop: "0.5rem" }}>
          Subsection 269B(3)
        </p>
        <div className="subText">
          <p>
            In determining whether goods produced in Australia are put, or are
            capable of being put, to a use corresponding to a use to which goods
            the subject of a TCO, or of an application for a TCO, can be put, it
            is irrelevant whether or not the first mentioned goods compete with
            the second mentioned goods in any market.
          </p>
        </div>
      </div>
      <Core />
      <GoodsProduced />
      <OrdinaryCourse />
    </>
  );
};
