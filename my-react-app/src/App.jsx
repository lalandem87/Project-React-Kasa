import "./App.css";
import Router from "./route/router";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
