import "./index.css";

import Background from "./components/background";
import Header from "./components/nav";

import RoutesApp from "./routes/routes";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Background />

      <Header/>

      <RoutesApp />

      <Footer />
    </>
  );
}

export default App;