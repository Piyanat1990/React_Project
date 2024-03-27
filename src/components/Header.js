import "./Header.css"

export default function Header(){
    return(
        <header>
            <div className="logo">
                <span>Task Manangement</span>
            </div>
             <div className="theme-container">
                <span>Night Mode</span>
               <span className="icon">togle</span>
             </div>
        </header>
    )
}