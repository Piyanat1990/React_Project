import "./Item.css";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

export default function Item(props) {
  const { data, deleteTask, editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <BsTrash className="btn" onClick={() => deleteTask(data.id)} />
      {/* <button className="btn" onClick={() => deleteTask(data.id)}>Delete</button> */}
      <BiEditAlt className="btn" onClick={() => editTask(data.id)} />
      {/* <button className="btn" onClick={() => editTask(data.id)}>Edit</button> */}
    </div>
  );
}
