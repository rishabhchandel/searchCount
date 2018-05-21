import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import Flag from './Ui';

render(<BrowserRouter>
	<Flag/>
</BrowserRouter>, document.getElementById('app'));
