import React, { useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import Hub from "./Hub";
import Watch from "./Watch";
import Listen from "./Listen";
import { WorldContext } from '../tspace_components/contexts/WorldContext';

const Scene = ({ characterRef, element }) => {
  const { cleanup } = React.useContext(WorldContext);
  useEffect(() => {
    return () => cleanup(); // call cleanup when the scene is unmounted
  }, [cleanup]);
  return element;
};

const ScenesHandler = ({ characterRef }) => {
  /* const { isWorldInitialized, initializeWorld } = React.useContext(WorldContext);

  useEffect(() => {
    if (!isWorldInitialized) {
      initializeWorld();
    }
  }, [isWorldInitialized, initializeWorld]); */

  return (
    <>
      {/* {isWorldInitialized && ( */}
        <Routes>
          <Route
            key="Hub"
            path="/"
            element={<Scene characterRef={characterRef} element={<Hub characterRef={characterRef}/>} />}
          />
          <Route
            key="Watch"
            path="/Watch"
            element={<Scene characterRef={characterRef} element={<Watch characterRef={characterRef}/>} />}
          />
          <Route
            key="Listen"
            path="/Listen"
            element={<Scene characterRef={characterRef} element={<Listen characterRef={characterRef}/>} />}
          />
        </Routes>
      {/* )} */}
    </>
  );
};

export default ScenesHandler;
