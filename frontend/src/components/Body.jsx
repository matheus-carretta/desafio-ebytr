import { useState, useEffect } from 'react';
import { fetchApi } from '../utils/api.js';
import TableData from './TableData';

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
    <main className='content'>
      <table className='rTable'>
        <thead>
          <tr> 
            <th>Descrição:</th>
            <th>Status:</th>
            <th>Opções:</th>
          </tr>
        </thead>
        <tbody>
          {task.length > 0 ? task.map((task) => <TableData task={task} setTask={setTask} key={task.id} />) : ''}
        </tbody>
      </table>
    </main>
  );
}

export default Body;