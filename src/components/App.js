import React from "react";
import Tabs from "./Tabs";

const App=()=>{
    return(
        <div>
            <div className="viewport">Pages Go Here</div>
            <div className="tabs">
                <div className="tab" id="Home-Tab">Home</div>
                <div className="tab" id="About-Tab">About</div>
                <div className="tab" id="Features-Tab">Features</div>
            </div>
        </div>
    )
}

export default App