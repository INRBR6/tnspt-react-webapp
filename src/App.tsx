import { ShellThemeProvider } from '@sede-x/shell-ds-react-framework';
import TnsRouter from './routes/Router';
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ShellThemeProvider theme="light">
        <TnsRouter />
      </ShellThemeProvider>
    </Provider>
  );
}

export default App;
