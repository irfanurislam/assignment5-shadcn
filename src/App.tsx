import "./App.css";
import Client from "./components/Home/Client";
import Services from "./components/Home/Services";
import Container from "./components/ui/Layouts/Container";

function App() {
  return (
    <>
      <Container>
        <Client></Client>
        <div className="pt-20">
          <Services></Services>
        </div>
      </Container>
    </>
  );
}

export default App;
