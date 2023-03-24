// import "./topLeft";
import Topleft from "./topLeft/topLeft";
import Topright from "./topRight/topRight";
import Bottomright from "./bottomRight/bottomRight";
import Bottomleft from "./bottomLeft/bottomLeft";
import "./App.css";
function App() {
  return (
    <>
      <div className="Topheader">
        <Topleft />
        <Topright />
      </div>
      <div className="Bottomheader">
        <Bottomleft />
        <Bottomright />
      </div>
    </>
  );
}

export default App;
