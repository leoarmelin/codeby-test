import ThemeProvider from "./providers/ThemeProvider";
import GlobalStyles from "./styles/global";
import Cart from "./pages/Cart";

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Cart />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
