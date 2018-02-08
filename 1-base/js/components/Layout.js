import React from "react";
import {BrowserRouter,Route,Switch,browserHistory,Link} from 'react-router-dom';

import {Top} from "./Top";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Feature from "./Feature";
import Article from "./Article";

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			title:'alice',
			homeLink:'Home',
			homeMounted:true
		};
	}
	onChangeHomeMounted(){
		this.setState({
			homeMounted:!this.state.homeMounted
		})
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

		let homeCmp = "";
		if(this.state.homeMounted){
			homeCmp = (
				<Home
					user={user}
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialLink={this.state.homeLink}
				>this is a paragraph </Home>
			);
		}
		 // return (
		 // 		 <div>
			// 		 <Top logo={this.state.homeLink}  />
		 // 		 	 <Header name={"poly"} changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
			// 		 {homeCmp}
			// 		 <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(un)Mount Home Component</button>
			// 		 <Footer/>
		 // 		 </div>
		 // 	);

		return (
				<BrowserRouter>
					<div>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/feature">Feature</Link></li>
							<li><Link to="/article">Article</Link></li>
						</ul>

						<Switch>
							<Route exact path="/" render={()=> (
								<div>
                                		 <Top logo={this.state.homeLink}  />
										 <Header name={"poly"} changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                                 		 {homeCmp}
                                 		 <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(un)Mount Home Component</button>
                                 		 <Footer/>
								</div>
							)} />
							<Route exact path="/feature" component={Feature} />
							<Route exact path="/article" component={Article} />
						</Switch>
					</div>
				</BrowserRouter>
		);
	}
}