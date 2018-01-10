import React from 'react';
import {render} from 'react-dom';
import Layout from './Layout'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../src/redux/reducer'

var store = createStore(reducer);

	render(<Provider store={store}>
			<Layout />
		</Provider>
		,document.getElementById('root'))

if(module.hot){
	module.hot.accept()
}