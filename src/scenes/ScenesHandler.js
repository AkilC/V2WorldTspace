import React, { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import Hub from "./Hub";
import Watch from "./Watch";
import Listen from "./Listen";
import { WorldContext } from '../tspace_components/contexts/WorldContext';

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
            key="Hub"
            path="/"
            element={<Hub characterRef={characterRef}/>}
          />
          <Route
            key="Watch"
            path="/Watch"
            element={<Watch characterRef={characterRef} />}
          />
          <Route
            key="Listen"
            path="/Listen"
            element={<Listen characterRef={characterRef} />}
          />
        </Routes>
      )}
    </>
  );
};

export default React.memo(ScenesHandler);
