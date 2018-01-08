const doXMLRequest = function(url,data={},type='GET',method='fetch'){
	const _type = type.toUpperCase();
	let options ={
		credentials: 'include',
		method:_type,
		headers:{
			'Accept':'application/json',
			'Content-Type':'application/json;charset=utf-8',
			'Cach-Control':"no-store"
		}
	}

	/*组装传递的参数*/

	if(_type === 'GET'){
		let dataStr = '';
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		});
		if(dataStr !== ""){
			dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'));
			url = encodeURI(url+"?"+dataStr)
		}
	}else{
		options.body = JSON.stringify(data);
	}
	/**使用fetch方法*/
	if(window.fetch  && method === 'fetch'){
		try{
			return window.fetch(url,options);
		}catch(error){
			throw new Error(error)
		}
	}
	else{
		return new Promise((resolve,reject)=>{
			let handler = function(){
				if(this.readyState !== 4){
					return;
				}
				if(this.status === 200){
					resolve(client.response)
				}else{
					reject(new Error(this.statusText))
				}
			}
			const client = new XMLHttpRequest();
			let dataJson = '';
			if(_type === 'GET' || _type === 'PUT' || _type === 'DELETE'){
				dataJson = JSON.stringify(data)
			}
			client.open(_type,url);
			client.onreadystatechange =handler;
			client.responseType ='json';
			client.setRequestHeader('Accept','application/json')
			client.send(dataJson);
		})
	}
}


export default doXMLRequest