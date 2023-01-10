import FormHeader from "./FormHeader/FormHeader";
import "./FormContainer.css";
import FormBody from "./FormBody/FormBody";

const FormContainer = () => {
  return (
    <div className="form__Container">
      <FormHeader />
      <FormBody />
    </div>
  );
};

export default FormContainer;
