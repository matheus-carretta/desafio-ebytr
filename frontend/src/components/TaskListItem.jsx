function TaskListItem(props) {
const { description, id, statuses } = props.task;
return (
  <li>
    <span>{description}</span>
    <span>{statuses.name}</span>
    <button type='button'>Atualizar</button>
    <button type='button'>Deletar</button>
  </li>
)
}

export default TaskListItem;
