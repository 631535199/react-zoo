import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('homeStore')
@observer
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            content:{
                id:"",
                name:""
            } 
        }
      }
    componentDidMount() {
        this.props.homeStore.getList();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;


