import { render } from "react-dom";
import App from "./App";

render(<App />, document.getElementById("root"));

window.ChatraSetup = {
  chatHeight: 550,
  
  zIndex: 9999,
  colors: {
    buttonText: "#FFFFFF",
    buttonBg: "#FA6F15",
  },
};

const styleElement = document.createElement("style");
styleElement.innerHTML = `
  #Chatra {
    max-height: 80vh !important; 
    max-width: 400px !important; 
    width: 90% !important; 
    height: auto !important; 
  }

  #ChatraButton {
    z-index: 9999 !important;
  }
`;

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
