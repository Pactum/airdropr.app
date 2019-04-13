import TopNavBar from './../components/topNavBar';
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    accountBalances: state.accountBalances
  };
};

const TopNavBarContainer = drizzleConnect(TopNavBar, mapStateToProps);

export default TopNavBarContainer;
