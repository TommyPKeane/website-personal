import { useEffect, useState, } from "react";


export default function PageRouter(props,) {
  // state to track URL and force component to re-render on change
  const [currentPath, setCurrentPath,] = useState(window.location.pathname);

  useEffect(
    () => {
        // define callback as separate function so it can be removed later with cleanup function
        const onLocationChange = () => {
            console.log(`Location Change: ${window.location.pathname}`);
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener("popstate", onLocationChange);
        // clean up event listener
        return () => {
            window.removeEventListener("popstate", onLocationChange)
        };
    },
    [],
  );
  return (
    (currentPath === props.path)
      ? props.children
      : null
  );
}
