import Airdrop from './../pages/Airdrop';
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
  };
};

const AirdropContainer = drizzleConnect(Airdrop, mapStateToProps);

export default AirdropContainer;
