import React, { Component } from "react";

class List extends Component {
  componentDidMount(){
    console.log(this.props.match)
  }

  render() {
    let props = this.props;
    return <div className="list" >
      {props.match.url}
    </div>
  }
}
export default List;
