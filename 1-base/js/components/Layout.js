import React from "react";

import {Top} from "./Top";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			title:'alice',
			homeLink:'Home'
		};
	} 
	changeTitle(title){
		this.setState({title})
	}
    onGreet(){
        alert('greet from the layout component')
    }
    onChangeLinkName(newName){
		this.setState({
            homeLink : newName
		})
	}
	render(){
		//setTimeout(()=>this.setState({title:'joe'}),1000);
		const user = {
			name:'Polyna',
			age:12,
			hobbies:[
				'running','walking'
			]
		};
		 return (
		 		 <div>
					 <Top logo={this.state.homeLink}  />
		 		 	 <Header name={"poly"} changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
					 <Home
						 user={user}
						 greet={this.onGreet}
						 changeLink={this.onChangeLinkName.bind(this)}
						 initialLink={this.state.homeLink}
					 >this is a paragraph </Home>
					 <Footer/>
		 		 </div>
		 	);
	}
}