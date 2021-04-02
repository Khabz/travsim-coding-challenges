import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Todos from './components/Todos'
import { GlobalProvider } from './store/GlobalContext'
import './App.css'

export default function App () {
	return (
		<GlobalProvider>
			<Todos />
		</GlobalProvider>
	)
}
