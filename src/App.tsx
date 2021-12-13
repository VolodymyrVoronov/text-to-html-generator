import { FC } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Paths from "const/path";

const App: FC<{}> = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Paths.Root} element={<Navigate to={Paths.StartPage} />} />
      <Route path={Paths.StartPage} element={<div>Start page</div>} />
    </Routes>
  );
};

export default App;
