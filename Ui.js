"use strict";

import React from "react";
import Loop from "./loop";

export default class Flag extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			list: []
		}

		this.search = this.search.bind(this);
		this.click = this.click.bind(this);
	}

	click(e) {
		let name = this.state.name;
		this.setState({name: name});

		fetch(`http://localhost:3000/key?name=${name}`).then((res) => {
			return res.json()
		}).then(res => {
			console.log("11", res);
			this.setState({
				list: res
					? res
					: []
			})
		}).catch(err => console.log("err", err))
	}

	search(e) {
		let name = e.target.value;
		this.setState({name: name});

		if (name.length > 2) {
			fetch(`http://localhost:3000/keys?name=${name}`).then((res) => {
				return res.json()
			}).then(res => {
				console.log("11", res);
				this.setState({
					list: res
						? res
						: []
				})
			}).catch(err => console.log("err", err))
		} else {
			this.setState({list: []});
		}
	}
	componentDidMount() {}

	render() {

		return <div>
			<input type="text" onChange={this.search}/>
			<button onClick={this.click}>search</button>
			<div>{
					this.state.list && this.state.list.length
						? this.state.list.map((v, i) => <Loop key={i} v={v}/>)
						: ""
				}</div>
		</div>;
	}
}
