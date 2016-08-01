import React from 'react'
import { connect } from 'react-redux'

import JobContainer from '../containers/JobContainer.jsx'
import CategoryContainer from '../containers/CategoryContainer.jsx'

 	export default ()  => (
 		   <div className="row">
			<CategoryContainer />
			<JobContainer />
			</div>
 		)
		

		

