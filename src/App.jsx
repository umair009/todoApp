import React from "react";
import Home from "./Components/Home";
import UserMobXStore from "./UserStore";


function App() {
  const store = new UserMobXStore();
  return (
    <>
      <Home store={store} />
    </>
  )
}

export default App
