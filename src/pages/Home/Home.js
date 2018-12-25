import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { Button } from "antd";

@inject("homeStore")
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        id: "",
        name: ""
      },
      collapsed: true
    };
  }
  componentDidMount() {
    this.props.homeStore.getList();

    let first = { name: "Bob" };
    let last = { lastName: "Smith","id":"112" };

    let person = Object.assign(first, last);
    console.log(person);
    
    
  }

  onCollapse = e => {
    this.setState(state => ({ collapsed: !state.collapsed }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <p>{this.props.homeStore.title}</p>
        <Link to="/about">go to About</Link>
        <div style={{ textAlign: "left", width: "450px", margin: "auto" }}>
          <p>下面是列表数据：</p>
          {this.props.homeStore.list &&
            this.props.homeStore.list.map(el => {
              return <div key={el.id}>标题：{el.title}</div>;
            })}
        </div>
        <div className="aa">
          <Button onClick={this.onCollapse}>setState</Button>
        </div>
      </div>
    );
  }
}

export default Home;
