import React from 'react'

export default ({job}) => (
	<tr> 
	<td><a href={"/job/"+job._id}>{job.location}</a></td>
    <td>{job.position}</td> 
    <td>{job.company}</td> 
    </tr>
	)