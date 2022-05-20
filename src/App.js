import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
