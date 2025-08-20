import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-fill">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
