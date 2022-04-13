import './App.css';
import ResponsiveAppBar from './components/navBar/navBar'
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/routes";
import { Container} from "@material-ui/core";


function App() {
  return (
    <BrowserRouter basename={"/"}>
        <ResponsiveAppBar />
        <Container style={{paddingTop: "20%"}}>
          <MyRoutes />
        </Container>
      </BrowserRouter>
  );
}

export default App;
