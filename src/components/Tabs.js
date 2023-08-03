import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs">
      <div className="tab" id="Home-Tab" onClick={() => handleTabClick("Home")}>
        Home
      </div>
      <div className="tab" id="About-Tab" onClick={() => handleTabClick("About")}>
        About
      </div>
      <div className="tab" id="Features-Tab" onClick={() => handleTabClick("Features")}>
        Features
      </div>
      <div className="viewport">
        Pages Go Here
        <div>
        {activeTab === "Home" && <p>Home content goes here</p>}
        {activeTab === "About" && <p>About content goes here</p>}
        {activeTab === "Features" && <p>Features content goes here</p>}
        </div>
      </div>
    </div>
  );
}

export default Tabs;