import Header from "./components/Header";
import "./App.css";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState } from "react";


function App() {
  const [tasks, setTesks] = useState([
    { id: 1, title: "code programing" },
    { id: 2, title: "make manual" },
    // { id: 3, title: "make report" },
  ]);

  const [title, setTitle] = useState("")
  const [editId, setEditId] = useState(null)
  function deleteTask(id) {
    // console.log(id);
    const result = tasks.filter(item => item.id !== id)
    console.log(result)
    setTesks(result)
  }

  function editTask(id) {
    console.log(id)
    setEditId(id)
    const editTask = tasks.find((item) => item.id === id)
    // console.log(editTask)
    setTitle(editTask.title)//เอาไปเปะ
  }

  function saveTask(e) {
    e.preventDefault();
    // console.log("save data")
    if (!title) {
      alert("Please fill your data")
    } else if (editId) {
      //update data
      console.log("update data")
      const updateTask = tasks.map((item) => {
        // รายการใดมีรหัสตรงกับรหัสเเก้ไข
        if (item.id === editId) {
          return { ...item, title: title }
        }
        return item;
      })
      // console.log(updateTask)
      setTesks(updateTask)
      setEditId(null)
      setTitle("")
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title
      }
      setTesks([...tasks, newTask])
      setTitle("")
    }
  }
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} />
          <section>
            {
              tasks.map((data) => (
                <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
              ))
            }

          </section>
        </div>
      </div>
    </>
  );
}

export default App;
