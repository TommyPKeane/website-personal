import React, { useState, } from "react";
import PropTypes from "prop-types";
import { useLoader, } from "@react-three/fiber";
import { OBJLoader, } from "three/examples/jsm/loaders/OBJLoader";


export default function HomeInstance(props,) {
  // This reference gives us direct access to the THREE.Mesh object
  // const threeRef = useRef();

  const homeObj = useLoader( OBJLoader, props.objFile, );

  // Hold state for hovered and clicked events
  const [ active, setActive, ] = useState(false,);
  // const [ hovered, hover, ] = useState(false,);
  // const [ clicked, click, ] = useState(false,);

  const onClickCallback = () => setActive(!active,);

  return <primitive
    scale={active ? props.scaleActive : props.scaleInactive}
    position={props.position}
    rotation={props.rotation}
    onClick={onClickCallback}
    object={homeObj} />;
}

HomeInstance.propTypes = {
  objFile: PropTypes.string,
  position: PropTypes.array,
  rotation: PropTypes.array,
  scaleActive: PropTypes.number,
  scaleInactive: PropTypes.number,
};

HomeInstance.defaultProps = {
  objFile: "/3d/home-front.obj",
  position: [0, 0, 0,],
  rotation: [Math.PI / 2, Math.PI, 0,],
  scaleActive: 1,
  scaleInactive: 1,
};
