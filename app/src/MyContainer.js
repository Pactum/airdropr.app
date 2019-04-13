import MyComponent from "./MyComponent";
import Root from './components/root';
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
  };
};

const MyContainer = drizzleConnect(Root, mapStateToProps);

export default MyContainer;
