import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { MyRoutes } from "./routes/routes";
import { Container} from "@material-ui/core";
import Navbar from './components/Navigation/Navbar/Navbar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Container style={{paddingTop: "5%"}}>
          <MyRoutes />
        </Container>
      </Router>
  );
}

export default App;
