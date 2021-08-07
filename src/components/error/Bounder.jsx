import React from "react";

export default class Bounder extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          hasError : false
      }
  }

  static getDerivedStateFromError(error) {
      
  }

  componentDidCatch(error) {
    this.setState({
        hasError : true
    })
  }
  render() {
    if(this.state.hasError) {
        return <div>Error occurred</div>
    }
    return <React.Fragment>
        {this.props.children}
    </React.Fragment>;
  }
}
