import "./App.css";
import { connect } from "react-redux";
import NameCreator from "./NameCreator";

function App() {
  return (
    <div className="App">
      <NameCreator />
      <NameContainer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    names: state.names,
  };
}

export default connect(mapStateToProps)(App);
