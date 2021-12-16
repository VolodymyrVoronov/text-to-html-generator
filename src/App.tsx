import { FC, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Paths from "const/path";

import StartPage from "pages/StartPage/StartPage";

const EditorPage = lazy(
  () => import(/* webpackPrefetch: true */ "pages/EditorPage/EditorPage")
);

const App: FC<{}> = (): JSX.Element => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path={Paths.Root} element={<Navigate to={Paths.StartPage} />} />
        <Route path={Paths.StartPage} element={<StartPage />} />
        <Route path={Paths.EditorPage} element={<EditorPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
