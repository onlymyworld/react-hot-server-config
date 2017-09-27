import React from 'react';
import {render} from 'react-dom';
import Layout from './Layout'

render(
		<Layout />,
		document.getElementById('root')
	)

if(module.hot){
	module.hot.accept()
}