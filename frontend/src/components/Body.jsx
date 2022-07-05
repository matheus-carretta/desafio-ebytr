import { useState, useEffect } from 'react';
import { fetchApi, postItem } from '../utils/api.js';
import TableData from './TableData';

function Body() {
  const [task, setTask] = useState({});
  const [description, setDescription] = useState('');
  const [status, setStatuses] = useState(1);

  const getTask = async () => {
    const tasks = await fetchApi();
    setTask(tasks);
  }

 const createItem = async () => {
  await postItem(description, status);
  setTask(await fetchApi());
  setDescription('');
 }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <main className='content'>
      <div className='add-container'>
        <input type='text' placeholder='Descrição da tarefa' onChange={({ target }) => setDescription(target.value) }></input>
        <select onChange={({ target }) => setStatuses(target.value)}>
          <option value={1}>Pendente</option>
          <option value={2}>Em andamento</option>
          <option value={3}>Concluído</option>
        </select>
        <button type='button' disabled={description === ''} onClick={() => createItem()}>Adicionar</button>
      </div>
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