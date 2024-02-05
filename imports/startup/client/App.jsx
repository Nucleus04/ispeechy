import React, { Component } from "react";
import Router from "./Route";


class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    render() {
        return (
            <Router />
        )
    }
}



export default App;