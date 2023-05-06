import React, { useEffect } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import TestScene from "./TestScene";
import Scene1 from "./Scene1";
import { WorldContext } from '../contexts/WorldContext';

const ScenesHandler = ({ characterRef }) => {
  const location = useLocation();
  const { isWorldInitialized, initializeWorld } = React.useContext(WorldContext);

  useEffect(() => {
    if (!isWorldInitialized) {
      initializeWorld();
    }
  }, [isWorldInitialized, initializeWorld]);

  return (
    <>
      {isWorldInitialized && (
        <Routes>
          <Route
            key="testScene"
            path="/"
            element={<TestScene characterRef={characterRef} />}
          />
          <Route
            key="scene1"
            path="/scene1"
            element={<Scene1 characterRef={characterRef} />}
          />
        </Routes>
      )}
    </>
  );
};

export default ScenesHandler;
