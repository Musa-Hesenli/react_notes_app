import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSide from "./RightSide";
import Sidebar from "./Sidebar";
const Container = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [updateWanted, setUpdateWanted] = useState(null);
  console.log(updateWanted);
  return (
    <div className="row my-3">
      <LeftSideBar menuStatus={menuStatus} setMenuStatus={setMenuStatus}/>
      <RightSide setUpdateWanted={setUpdateWanted} setMenuStatus={setMenuStatus}/>
      <Sidebar menuStatus={menuStatus} updateWanted={updateWanted} setUpdateWanted={setUpdateWanted} setMenuStatus={setMenuStatus} />
    </div>
  );
}

export default Container;
