import { FC, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  isMobile,
  isWearable,
  isAndroid,
  isIOS,
  isWinPhone,
} from "react-device-detect";

import Paths from "const/path";

import StartPage from "pages/StartPage/StartPage";
import Typography from "components/Typography/Typography";

const EditorPage = lazy(
  () => import(/* webpackPrefetch: true */ "pages/EditorPage/EditorPage")
);

const App: FC<{}> = (): JSX.Element => {
  const isMobileDevice =
    isMobile || isWearable || isAndroid || isIOS || isWinPhone;

  return (
    <>
      {isMobileDevice ? (
        <Typography
          styles={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
            fontSize: "24px",
          }}
        >
          Only on desktop/laptop.
        </Typography>
      ) : (
        <Suspense
          fallback={
            <Typography
              styles={{
                display: "flex",
                justifyContent: "center",
                marginTop: 50,
                fontSize: "24px",
              }}
            >
              Loading...
            </Typography>
          }
        >
          <Routes>
            <Route
              path={Paths.Root}
              element={<Navigate to={Paths.StartPage} />}
            />
            <Route path={Paths.StartPage} element={<StartPage />} />
            <Route path={Paths.EditorPage} element={<EditorPage />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
