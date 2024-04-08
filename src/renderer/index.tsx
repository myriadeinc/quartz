import { render } from "react-dom";
import { lazy, Suspense } from "react";
const App = lazy(() => import("./App"));
import { CircularProgressLoader } from "./components/CircularLoader";

render(
  <Suspense fallback={<CircularProgressLoader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

window.ChatraSetup = {
  chatHeight: 550,
  zIndex: 9999,
  colors: {
    buttonText: "#FFFFFF",
    buttonBg: "#FA6F15",
  },
};

(function (d, w, c) {
  w.ChatraID = "kzQzfDagyXR78mcF3";
  var s = d.createElement("script");
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = "https://call.chatra.io/chatra.js";
  if (d.head) d.head.appendChild(s);
})(document, window, "Chatra");
