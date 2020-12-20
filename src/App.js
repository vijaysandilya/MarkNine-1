import React, { useState } from "react";
import "./styles.css";

const appsDB = {
  UPIApps: [
    {
      name: "PhonePe",
      link:
        "https://play.google.com/store/apps/details?id=com.phonepe.app&hl=en_IN&gl=US",
      image:
        "https://user-images.githubusercontent.com/75922733/102718173-b927e480-430c-11eb-9197-b4cd94ce6a5e.png"
    },
    {
      name: "Google Pay",
      link:
        "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user&hl=en_IN&gl=US",
      image:
        "https://user-images.githubusercontent.com/75922733/102718136-8da4fa00-430c-11eb-8be8-b8dbea9fece2.png"
    }
  ],
  TravelApps: [
    {
      name: "MakeMyTrip",
      link:
        "https://play.google.com/store/apps/details?id=com.makemytrip&hl=en_IN&gl=US",
      image:
        "https://user-images.githubusercontent.com/75922733/102718212-f8563580-430c-11eb-83fe-585c370568d9.png"
    },
    {
      name: "Go-Ibibo",
      link:
        "https://play.google.com/store/apps/details?id=com.goibibo&hl=en_IN&gl=US",
      image:
        "https://user-images.githubusercontent.com/75922733/102718185-d0ff6880-430c-11eb-9340-c81bf7ba6c50.png"
    }
  ],
  FoodApps: [
    {
      name: "Zomato",
      link:
        "https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US",
      image:
        "https://user-images.githubusercontent.com/75922733/102718308-7581aa80-430d-11eb-9f6d-a7bfc37cc04b.png"
    },
    {
      name: "Swiggy",
      link:
        "https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN&gl=US",
      image:
        "https://user-images.githubusercontent.com/75922733/102718359-c09bbd80-430d-11eb-971d-a7ef8cb7edd6.png"
    }
  ]
};

export default function App() {
  const [category, setCategory] = useState("UPIApps");

  function clickEventHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <div class="header">
        <h1>GooglePlay Apps Recommendation</h1>
        <h3>Here's a list of some of the top Apps in each category</h3>
      </div>

      <div>
        {Object.keys(appsDB).map((category) => {
          return (
            <button onClick={() => clickEventHandler(category)} className="btn">
              {category}
            </button>
          );
        })}
      </div>
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {appsDB[category].map((appcat) => (
            <li key={appcat.name} className="listStyle">
              {" "}
              <div>
                <img src={appcat.image} alt={appcat.name}></img>
              </div>
              <div class="name"> {appcat.name} </div>
              <div style={{ padding: "1rem" }}>
                {" "}
                <a href={appcat.link}>AppStore Page</a>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
