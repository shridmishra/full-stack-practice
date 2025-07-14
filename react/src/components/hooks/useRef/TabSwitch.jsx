import React, { useState } from "react";

export const TabSwitch = () => {
  const [selectedTab, setSelectedTab] = useState("post");
  const tabs = ["post", "like", "comments"];

  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setSelectedTab(tab)}
          style={{
            fontWeight: selectedTab === tab ? "bold" : "normal",
            borderBottom: selectedTab === tab ? "2px solid orange" : "none",
            marginRight: "10px",
          }}
          
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
