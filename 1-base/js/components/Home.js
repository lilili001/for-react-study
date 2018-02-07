import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super();
        // this.age = props.user.age;
        // console.log(this.age);

        //初始化state
        this.state = {
            age : props.user.age,
            homeLink: props.initialLink
        }
        console.log('constructor');
    }
    componentWillMount(){
        console.log('component will mount');
    }
    getOlder(){
        // this.age += 3;
        // console.log(this.age);

        this.setState({
            age: this.state.age + 3
        })
    }
    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }
    onHandleChange(event){
        this.setState({
            homeLink:event.target.value
        })
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <hr/>
                this is  [ {this.props.user.name} ] home page
                <h3>My Hobbies</h3>
                <ul>
                    { this.props.user.hobbies.map((hobby,index)=> <li key={index}>{hobby}</li>) }
                </ul>
                <hr/>
                {this.props.children}
                <hr/>
                <p>My age is getting {this.state.age}</p>
                <button onClick={this.getOlder.bind(this)}>Getting Older</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={ (event)=> this.onHandleChange(event)  }/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">change Top Home Link</button>
            </div>
        );
    }
}
Home.propTypes = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    user:React.PropTypes.object,
    //children:React.PropTypes.element.isRequired
};