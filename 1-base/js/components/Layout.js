import React from "react";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {title:'alice'};
	} 
	changeTitle(title){
		this.setState({title})
	} 
	render(){
		//setTimeout(()=>this.setState({title:'joe'}),1000);
		const user = {
			name:'Polyna',
			hobbies:[
				'running','walking'
			]
		};
		 return (
		 		 <div>
		 		 	<Header name={"poly"} changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
					 <Home user={user}>this is a paragraph </Home>
					 <Footer/>
		 		 </div>
		 	);
	}
}