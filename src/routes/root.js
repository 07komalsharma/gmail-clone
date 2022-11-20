import EmailList from "../EmailList";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./root.css";

export default function Root() {
    return (
      <>
        <div className="app">
      <Header/>

      <div className='app_body'>
      <Sidebar/>
      <EmailList/>
    </div>
   </div>
      </>
    );
  }