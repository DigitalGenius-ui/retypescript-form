import React from "react";
import FormContainer from "./components/FormContainer";
// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

function App() {
  // const componentRef = useRef(null);

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: "emp-data",
  // })
  return (
    // <div className="form" ref={componentRef} style={{height : window.innerWidth}}>
    //   <FormContainer />
    //   <button onClick={handlePrint}>Print</button>
    // </div>
    <div className="form" >
      <FormContainer />
    </div>
  );
}

export default App;
