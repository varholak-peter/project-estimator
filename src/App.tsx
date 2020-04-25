import React, { useEffect, useReducer } from "react";
import "./App.css";

import { initialState, reducer } from "./reducer";

import { Home } from "./Home";
import { ProductInfo } from "./ProductInfo";
import { ProjectInfo } from "./ProjectInfo";
import { Results } from "./Results";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.onbeforeunload = () => true;

    if (state.$step === 3) {
      window.onbeforeunload = null;
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, [state.$step]);

  return (
    <div className="App">
      <Home dispatch={dispatch} state={state} />
      <ProjectInfo dispatch={dispatch} state={state} />
      <ProductInfo dispatch={dispatch} state={state} />
      <Results dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
