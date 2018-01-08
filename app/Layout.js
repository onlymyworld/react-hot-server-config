import React from 'react'

import {getServer} from '../src/server/response.js'

class Layout extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		getServer({}).then((value)=>{
			console.log(value)
		}).catch((ex)=>{
			throw new Error(ex)
		})
	}
	render(){
		return(<div>Hello2222222222222 world</div>)
	}
}

export default Layout
