import "./index.css";

import Header from "./components/nav";
import RoutesApp from "./routes/routes";
import Footer from "./components/footer";

function App() {
  return (
    <>

      <Header/>

      <RoutesApp />

      <Footer />
    </>
  );
}

export default App;