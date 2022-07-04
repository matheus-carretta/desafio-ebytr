function TableData(props) {
const { description, id, statuses } = props.task;
return (
  <tr>
    <td>{description}</td>
    <td>{statuses.name}</td>
    <td> <button type='button'>Atualizar</button>
      <button type='button'>Deletar</button>
    </td>
  </tr>
)
}

export default TableData;
