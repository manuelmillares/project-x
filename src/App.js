import './App.css';
import ResponsiveAppBar from './components/navBar/navBar'
import { BrowserRouter as Router } from "react-router-dom";
import { MyRoutes } from "./routes/routes";
import { Container} from "@material-ui/core";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <ResponsiveAppBar />
        <Container style={{paddingTop: "20%"}}>
          <MyRoutes />
        </Container>
      </Router>
  );
}

export default App;
