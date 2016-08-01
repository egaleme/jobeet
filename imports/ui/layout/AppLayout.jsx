import React from 'react';
import { Provider } from 'react-redux'

import Store from '../store/store.js'
import HeaderContainer from '../containers/HeaderContainer.jsx'


export const AppLayout = ({content}) => (
	<div >
			
			<HeaderContainer />
			<Provider store={Store} >
			{content}
			</Provider>
	</div>	
);

