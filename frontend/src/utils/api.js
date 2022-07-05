const deleteItem = async (id) => {
  await fetch(`http://localhost:3002/${id}`, {
    method: 'DELETE'
  });
}

const postItem = async (description, status) => {
  await fetch(`http://localhost:3002/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: description,
      status: Number(status),
    })
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
  postItem
} 