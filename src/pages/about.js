import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';

@inject( 'aboutStore' )
@observer
class About extends React.Component {
    componentDidMount() {
        this.props.aboutStore.aboutList();
    }
    render() {
        console.log(this.props.aboutStore.list)
        return (
            <div>
                <p>{ this.props.aboutStore.title }</p>
                <Link to="/">goto Home</Link>
                <ul>
                    
                </ul>
            </div>
        )
    }
}

export default About;