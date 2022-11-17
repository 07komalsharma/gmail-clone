import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Root() {
    return (
      <>
        <div className="app">
      <Header/>

      <div className='app_body'>
      <Sidebar/>
    </div>
   </div>
      </>
    );
  }