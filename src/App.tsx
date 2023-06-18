import "./App.css";
import { RouterComponent } from "./navigation";
import { HeaderContainer } from "./ui/common/Header";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <RouterComponent />
    </div>
  );
}

export default App;
