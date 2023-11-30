import { BrowserRouter } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <BrowserRouter>
     {routes}
    </BrowserRouter>
  );
}

export default App;
