import { deleteItem,fetchApi } from '../utils/api';

function TableData(props) {
 
const { description, id, statuses} = props.task;
const { setTask }= props;

const handleDelete = async (id) => {
  await deleteItem(id);
  setTask(await fetchApi())
}

return (
  <tr>
    <td>{description}</td>
    <td>{statuses.name}</td>
    <td>
      <button type='button' className='update-btn'>Atualizar</button>
      <button type='button' className='delete-btn' onClick={() => handleDelete(id)} >Deletar</button>
    </td>
  </tr>
)
}

export default TableData;
