import "./Item.css";
export default function Item(props) {
  const { data, deleteTask, editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <button className="btn" onClick={() => deleteTask(data.id)}>Delete</button>
      <button className="btn" onClick={() => editTask(data.id)}>Edit</button>
    </div>
  );
}
