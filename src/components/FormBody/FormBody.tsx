import React from "react";
// import { useForm } from "react-hook-form";
import {
  ApplicantInfo,
  CompleteApp,
  Enquiries,
  FinalInfo,
  FormComplete,
  GoodsDisc,
  InfoComponent,
  MaterialDisc,
  Privacy,
  Questions,
} from "../dynamicInfo/DynamicInfo";
import { data } from "../dynamicInfo/InfoData";
import {
  AgentDetails,
  Applicant5A,
  Applicant5B,
  Applicant5C,
  ApplicantDeclaration,
  ApplicantsDetails,
  CheckList,
  DatabaseSearch,
  FullDisc,
  ImporterDetails,
  ImportGoods,
  Industry,
  Justification,
  Notification,
  PrescribedOrg,
  Tariff,
} from "../FormInputs/FormInputs";

const FormBody = () => {
  // const { register, handleSubmit } = useForm();
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <InfoComponent item={item} />
        </div>
      ))}
      <CompleteApp />
      <Questions />
      <form>
        <ApplicantsDetails />
        <ImporterDetails />
        <AgentDetails />
        <GoodsDisc />
        <FullDisc />
        <MaterialDisc />
        <Tariff />
        <ImportGoods />
        <ApplicantInfo />
        <Applicant5A />
        <Applicant5B />
        <Applicant5C />
        <Enquiries />
        <PrescribedOrg />
        <DatabaseSearch />
        <Industry />
        <Notification />
        <Justification />
        <Privacy />
        <ApplicantDeclaration />
        <CheckList />
        <FormComplete />
        <FinalInfo/>
      </form>
    </div>
  );
};

export default FormBody;
