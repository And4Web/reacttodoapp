import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import firebase from "./config/firebaseConfig";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

export const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

//14 miutes onwards
