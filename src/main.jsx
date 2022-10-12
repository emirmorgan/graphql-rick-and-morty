import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApolloProvider } from "@apollo/client";
import client from "./data/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
