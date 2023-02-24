import Router from "preact-router";
import DownloadScreen from "./screens/downloads";
import MainScreen from "./screens/main";

export function App<FC>() {
  return (
    <Router>
      <MainScreen path="/" />
      <DownloadScreen path="/downloads" />
    </Router>
  );
}
