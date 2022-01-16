import { HashRouter as Router } from "react-router-dom";
import AuthLayer from "./layers/AuthLayer";

export default function App() {
  return (
    <Router>
      <AuthLayer></AuthLayer>
    </Router>
  );
}
