import { Outlet } from "react-router-dom";
import Navber from "./LayOut/Navber/Navber";
import Footer from "./LayOut/Footer/Footer";


const App = () => {
  return (
    <>
      {/* LayOut */}
      <Navber />
      <div className="bgC pb-20">
        <div className="container mx-auto pt-6">
          <Outlet />
        </div>
      </div>
      <Footer />
      {/* LayOut */}
    </>
  );
};

export default App;