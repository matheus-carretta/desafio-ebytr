function TableData(props) {
const { description, id, statuses } = props.task;
return (
  <tr>
    <td>{description}</td>
    <td>{statuses.name}</td>
    <td>
      <button type='button' className='update-btn'>Atualizar</button>
      <button type='button' className='delete-btn'>Deletar</button>
    </td>
  </tr>
)
}

export default TableData;
