import "./App.scss";
import Header from "./components/Header";
import TableUser from "./components/TableUser";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <TableUser />
      </Container>
    </div>
  );
}

export default App;
