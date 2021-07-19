import { React } from 'react';
import './App.scss';
import TaskManager from './services/process';
import Task from './components/task';
import config from './core/config';

const { process } = TaskManager;

const App = () =>
	<div>{ Task(process(config.task)) } </div>;

export default App;
