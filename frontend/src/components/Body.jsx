import { useState, useEffect } from 'react';
import fetchApi from '../utils/api';
import TaskListItem from './TaskListItem';

function Body() {
  const [task, setTask] = useState({});

  const getTask = async () => {
    const tasks = await fetchApi();
    setTask(tasks);
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <main className="App">
      <ul>
        {task.length > 0 ? task.map((task) => <TaskListItem task={task} key={task.id} />) : ''}
      </ul>
    </main>
  );
}

export default Body;