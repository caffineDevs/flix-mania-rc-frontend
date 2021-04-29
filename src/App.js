import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";

function App() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <Header />
            <Router />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
