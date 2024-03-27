import Header from "./components/Header";
import "./App.css";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState } from "react";


function App() {
  const [tasks, setTesks] = useState([
    { id: 1, title: "code programimg" },
    { id: 2, title: "make manual" },
    { id: 3, title: "make report" },
  ]);

const[title,setTitle] = useState("")

  function deleteTask(id){
    // console.log(id);
    const result = tasks.filter(item=>item.id!==id)
    console.log(result)
    setTesks(result)
  }

  function saveTask(){

  }
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <AddForm title={title} setTitle={setTitle} saveTask={saveTask}/>
         <section>
          {
            tasks.map((data)=>(
              <Item key={data.id} data={data} deleteTask={deleteTask}/>
            ))
          }

          </section>
        </div>
      </div>
    </>
  );
}

export default App;
