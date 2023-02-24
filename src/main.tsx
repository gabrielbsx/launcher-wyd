import { render } from "preact";
import { App } from "./app";
import "./assets/css/styles.css";

render(<App />, document.getElementById("app") as HTMLElement);
