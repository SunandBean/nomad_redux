import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

// function App() {
//     return <Router>
//         <Route path="/" exact component={Home}></Route>
//         <Route path="/:id" exact component={Detail}></Route>
//     </Router>
// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
