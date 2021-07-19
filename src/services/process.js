const process = (task) => {
	const tasks = (task.tasks || []).map(process);

	return {
		name: task.name,
		tasks: tasks,
		totalCost: (task.cost || 0) + tasks.reduce((a, childTask) =>
			a + childTask.totalCost, 0),
	};
};

const TaskManager = {
	process,
};

export default TaskManager;
