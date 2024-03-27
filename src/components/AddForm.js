
import "./AddForm.css"
export default function AddForm(props){
    const{title,setTitle,saveTask} = props
    return(
        <>
            <h2>Manangement Form</h2>
            <form onSubmit={saveTask}>
              <div className="form-control">
              <input type="text" className="text-input" value={title} 
              onChange={(e)=>setTitle(e.target.value)}/>
              {/* ลองพิมเเล้วดูใน state title */}
              {/* user กรอกมา คือค่าที่เก็บใน state title */}
              <button type="submit" className="submit-btn">Add</button>               
              </div>
            </form>
        </>
    )
}