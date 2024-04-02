import Header from "./components/Header";
import "./App.css";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useEffect, useState } from "react";


function App() {
  // เอาสถานะในlocal storage มาใส่ใน state 
  const [tasks, setTesks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  // { id: 1, title: "code programing" },
  // { id: 2, title: "make manual" },
  // { id: 3, title: "make report" },


  const [title, setTitle] = useState("")
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");
  /////////////////////////////////////////////////////////////////////////////////
  // รูปเเบบที่ 1  useEffectเมื่อมีการเปลี่ยนเเปลงค่าใน state  ทุก ๆ stateทุกตัวจะเปลี่ยนค่า
  // ทุกครั้ง  ลองพิม ลองกดปุ่ม update ดู
  // useEffect(() => {
  //   console.log("เรียกใช้งาน useEffect ใน App Component")
  // })


  // จะปริ้นครั้งเเรกเมมื่อเปิด app
  // ***ถ้าอยู่ใน devmode จะ bild มา 2 ครั้ง
  // ถ้าอยู่ใน production จะ bild มา 1 ครั้ง

  // รูปเเบบที่ 2  เมื่อ รัน เเอฟขึ้นมาจะใช้ useeffect เพียงครั้งเดียว
  // เเต่ถ้า react v16-18 จะรัน 2 ครั้ง ครั้ง เเรก devmode ครั้งที่ 2 production นับครั้งหลัง
  // มาจาก index.js <React.StrictMode>

  // useEffect(() => {
  //   console.log("เรียกใช้งาน useEffect ใน App Component")
  // }, [])



  // รูปเเบบที่ 3 เมื่อต้องการใช้เฉพาะเจาะจง state นั้นๆๆ

  // useEffect(() => {
  //   console.log("เรียกใช้งาน useEffect ใน App Component")
  // }, [tasks])
  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  //ลองไปที่ local storage ลอง add เเละ  กดreload ดุ ข้อมูลจะไม่หาย

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
      <div className={"App " + theme}>
        <Header theme={theme} setTheme={setTheme} />
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
