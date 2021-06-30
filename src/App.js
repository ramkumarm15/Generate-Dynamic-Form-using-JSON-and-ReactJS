import React, { Component } from "react";
import form from "./constants/form.json";

import Wrapper from "./components/Wrapper";
import { Formcontext } from "./Formcontext";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: form,
      english_name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, e) {
    if (id === "english_name") {
      this.setState({
        english_name: e.target.value,
      });
    }
  }

  render() {
    const { handleChange } = this;
    const { data } = this.state;
    console.log(this.state.english_name);
    return (
      <React.Fragment>
        <Formcontext.Provider value={{ handleChange, data }}>
          <Wrapper data1={this.state.data} />
        </Formcontext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
