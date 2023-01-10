import React from "react";
import { useForm } from "react-hook-form";
import {
  CompleteApp,
  GoodsDisc,
  InfoComponent,
  MaterialDisc,
  Questions,
} from "../dynamicInfo/DynamicInfo";
import { data } from "../dynamicInfo/InfoData";
import {
  AgentDetails,
  ApplicantsDetails,
  FullDisc,
  ImporterDetails,
  Tariff,
} from "../FormInputs/FormInputs";

const FormBody = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      {data.map((item, i) => (
        <InfoComponent item={item} key={i} />
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
      </form>
    </div>
  );
};

export default FormBody;
