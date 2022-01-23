import React, { useState, useEffect, } from "react";
import PropTypes from "prop-types";

import { ReactComponent as SvgPortrait, } from "../../assets/images/portrait-tommy_20210420_plain.svg";
import "../../assets/scss/spinners/firstspinner.scss";


const TriangleSpinner = () => (
  <div className="spinner-firstspinner-svg">
    <SvgPortrait />
  </div>
);

TriangleSpinner.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number,],),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number,],),
  color: PropTypes.string,
  fill: PropTypes.string,
  label: PropTypes.string,
};

TriangleSpinner.defaultProps = {
  height: 50,
  width: 50,
  color: "green",
  fill: "green",
  label: "page-loading",
};

export default function FirstSpinner(props,) {
  const [display, setDisplay,] = useState(true,);

  useEffect(
    () => {
      let timer;
      if (props.timeout && (props.timeout > 0)) {
        timer = setTimeout(
          () => { setDisplay(false,); },
          props.timeout,
        );
      }

      return () => {
        if (timer) {
          clearTimeout(timer,);
        }
      };
    },
  );

  if (!props.visible || (props.visible === "false")) {
    return null;
  }
  return (
    display
      ? (
        <div aria-busy="true" className={props.className} style={props.style}>
          {
            React.createElement(
              TriangleSpinner,
              { ...props, },
            )
          }
        </div>
      )
      : null
  );
}

FirstSpinner.propTypes = {
  type: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string,),
  className: PropTypes.string,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.string,],),
  timeout: PropTypes.number,
};

FirstSpinner.defaultProps = {
  type: "Audio",
  style: {},
  className: "",
  visible: true,
  timeout: 0,
};
