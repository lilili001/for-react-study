import React from 'react';

export default class Home extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                this is  [ {this.props.user.name} ] home page
                <h3>My Hobbies</h3>
                <ul>
                    { this.props.user.hobbies.map((hobby,index)=> <li key={index}>{hobby}</li>) }
                </ul>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
Home.propTypes = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    user:React.PropTypes.object,
    children:React.PropTypes.element.isRequired
};