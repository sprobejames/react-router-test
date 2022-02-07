import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";
import { setToken } from "./store/auth";
import { BrowserRouter } from "react-router-dom";

store.dispatch(setToken());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
