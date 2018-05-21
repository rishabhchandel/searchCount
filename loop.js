"use strict";

import React from "react";

export default class Flag extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		console.log(this.props);
		return <div>
			<li>
				{
					this.props.v
						? this.props.v.word + " , count:" + this.props.v.count
						: ""
				}
			</li>
		</div>;
	}
}
