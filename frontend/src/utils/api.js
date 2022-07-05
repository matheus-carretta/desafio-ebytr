const deleteItem = async (id) => {
  await fetch(`http://localhost:3002/${id}`, {
    method: 'DELETE'
  });
}

const fetchApi = async () => {
  const response = await fetch(`http://localhost:3002/`);
  const data = await response.json();
  return data;
}

module.exports = {
  fetchApi,
  deleteItem,
} 