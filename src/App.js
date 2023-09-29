import "./App.css";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <p>Add Names App</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    names: state.names,
  };
}

export default connect(mapStateToProps)(App);
