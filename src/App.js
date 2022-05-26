import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Provider } from "./components/Context/Provider";

function App() {
    return (
      <>
        <Provider>
          <Header />
          <Content />
          <GlobalStyle />
        </Provider>
      </>
    );
  }

export default App;
