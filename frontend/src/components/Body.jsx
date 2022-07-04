import { useState, useEffect } from 'react';
import fetchApi from '../utils/api';

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
      <h1>Teste!</h1>
    </main>
  );
}

export default Body;