import "./index.css";
import RoutesApp from "./routes/routes";
import Footer from "./components/footer";
import Header from "./components/header"
import react from "react"

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