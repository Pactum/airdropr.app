import Airdrop from './../pages/Airdrop';
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    accountBalances: state.accountBalances,
    AirdropperFactory: state.contracts.AirdropperFactory,
    // Airdropper: state.contracts.Airdropper,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
  };
};

const AirdropContainer = drizzleConnect(Airdrop, mapStateToProps);

export default AirdropContainer;
