import React, { useState, useRef, } from "react";
import PropTypes from "prop-types";
import { useLoader, } from "@react-three/fiber";
import { GLTFLoader, } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader, } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader, } from "three/examples/jsm/loaders/MTLLoader";


export default function HomeInstance(props,) {
  // This reference gives us direct access to the THREE.Mesh object
  const threeRef = useRef();

  const homeObj = useLoader(
    GLTFLoader,
    props.gltfFile,
  );

  console.log(homeObj);

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
    dispose={null}
    object={homeObj.scene} />;
}

HomeInstance.propTypes = {
  gltfFile: PropTypes.string,
  objFile: PropTypes.string,
  mtlFile: PropTypes.string,
  position: PropTypes.array,
  rotation: PropTypes.array,
  scaleActive: PropTypes.number,
  scaleInactive: PropTypes.number,
};

HomeInstance.defaultProps = {
  gltfFile: "/3d/home-front.glb",
  objFile: "/3d/home-front.obj",
  mtlFile: "/3d/home-front.mtl",
  position: [0, 0, 0,],
  rotation: [0, 0, 0,],
  scaleActive: 1,
  scaleInactive: 1,
};
