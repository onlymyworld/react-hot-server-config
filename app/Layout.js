import React from 'react'
import {connect} from 'react-redux'
import {getServer} from '../src/server/response.js'

import Immutable from 'immutable'

class Layout extends React.Component{
	constructor(props){
		super(props);
		let data = Immutable.fromJS({a:1});
		console.log(data);
		let data1 = data.set('b','2');
		console.log(data === data1);
		console.log(data1.toJSON());
		console.log(this.props.value.toJSON())
		this.changeValueHandler = this.changeValueHandler.bind(this)
	}
	componentWillMount(){
		getServer({}).then((value)=>{
			console.log(value)
		}).catch((ex)=>{
			throw new Error(ex)
		})
	}
	changeValueHandler(){
		let data1 = this.props.value;
		let data = data1.set('show',true);
		console.log(data.toJSON());
		console.log(data.get('show'));
		console.log(data1.get('show'))
		console.log(data === this.props.value)
		this.props.changeValue(data);
	}
	render(){
		return(<div>Hello22222sdfsfsdf22222222 world<button onClick={this.changeValueHandler}>切换</button>
				
			</div>)
	}
}


let mapStateToProps=(state,ownProps)=>{
	return{
		value:state.getValue
	}
}
let mapDispatchToProps=(dispatch,ownProps)=>{
	return{
		changeValue:(newValue)=>{
			dispatch({type:'CHANGE_VALUE',newValue})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)


/*function* main(){
	var result = yield request('http://some.url');
	var resp = JSON.parse(result);
	console.log(resp.value)
}

function request(url){
	makeAjaxCall(url,(response)=>{
		it.next(response);
	})
}

var it = main();
it.next();



function* readFile(){
	var file = new FileReader('aaa.txt');
	try{
		while(file.eof){
			yield parseInt(file.readLine(),10)
		}
	}finally{	
		file.close();
	}
}



function* longRunningTask(value1){
	try{
		var value2 = yield step(value1);
		var value3 = yield step(value2);
		var value4 = yield step(value3);
	}catch(e){
		console.log(e)
	}
	
}


var readFile = require('fs-readfile-promise');
readFile(FileA)
.then((data)=>{console.log(data.toString())})
.then(()=>{return readFile(FileB)})
.then((data)=>{console.log(data.toString())})
.catch((err)=>{console.log(err)})

async function getTitle(url){
	let response = await fetch(url);
	let html = await response.text();
	return html.match(/<title>([\s\S]+)<\/title>/i)[1]
}

getTitle("http://tc39.github.io/ecma262/").then()


async function f(){
	await Promise.reject('出错了').catch(e=>console.log(e));
	return await Promise.resolve('hello world')
}
f().then(v=>console.log(v))


async function logInOrder(urls){
	const textPromises = urls.map(async rul =>{
		const response = await fetch(url);
		return response.text();
	})
	for(let n of textPromises){
		console.log(await n)
	}
}


const asyncGenObj = createAsyncIterable(['a','b'])
const [{value:v1},{value:v2}] = await Promise.all([asyncGenObj.next(),asyncGenObj.next]);
console.log(v1,v2)


async function getValue(){
	try{
		for await (const x of createRejctingIterable()){
			console.log(x)
		}
	}catch(e){
		console.error(e)
	}
	let body =''
	for await (const data of req) body +=data;
	return body
}*/