import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";
import Root from './components/root';

import "./App.css";

import drizzleOptions from "./drizzleOptions";


class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <Root />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
