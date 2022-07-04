const fetchApi = async () => {
  const response = await fetch('http://localhost:3002/');
  const data = await response.json();
  return data;
}

export default fetchApi;