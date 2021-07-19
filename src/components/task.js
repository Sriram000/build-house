import { React } from 'react';

const Task = ({ name, tasks, totalCost }) =>
	<div key={ name } className="task">
		<div> { name }</div>
		<div> { tasks.map(Task) }</div>
		<div> { totalCost }</div>
	</div>;

export default Task;
