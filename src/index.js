import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";

//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/Store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
