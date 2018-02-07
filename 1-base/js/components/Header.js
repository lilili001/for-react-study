import React from "react";

import Title from "./Header/Title";
export default class Header extends React.Component{
	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
	}
	render(){
		 return (
		 		<div>
					<ul class="nav">
						<li class="nav-item">
							<a class="nav-link active" href="#">Header Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>

					<Title title={this.props.title} />
					<input value={this.props.title} onChange={this.handleChange.bind(this)}/>
					your name is {this.props.name}
		 		</div>
		 	);
	}
}