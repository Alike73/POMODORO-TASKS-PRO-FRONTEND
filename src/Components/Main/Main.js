import MainBody from "./MainBody/MainBody";
import MainHeader from "./MainHeader/MainHeader";
import MainReport from "./MainReport/MainReport";
import MainSetting from "./MainSetting/MainSetting";



const Main = () => {

  return (
    <div className="main">
      <MainReport />
      <MainSetting />
      <div className="container">
        <MainHeader />
        <MainBody />
      </div>
    </div>
  )
}

export default Main;