import "./Item.css";
export default function Item(props) {
  const { data ,deleteTask} = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <button className="btn" onClick={()=>deleteTask(data.id)}>Delete</button>
      <button className="btn">Edit</button>
    </div>
  );
}
