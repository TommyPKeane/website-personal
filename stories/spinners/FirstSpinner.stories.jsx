import React from "react";
import Loader from "../src/index";

import "../src/loader/css/react-spinner-loader.css";

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
};

export default {
  title: "FirstSpinner",
  component: FirstSpinner,
};

export const FirstSpinner = () => {
  return (
    <div style={center}>
      <Loader
        width={200}
        height={200}
        color="green"
        type="Audio" />
    </div>
  );
};
