import "./App.css";
import { useEffect } from "react";

// import axios from "axios";

import MAIN from "./Pages/MAIN";

import { Provider } from "react-redux";
import store from "./REDUX/store";
//
function App() {
  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // axios
    //   .post("http://localhost:5000/post/", {
    //     a: 50,
    //     b: "no baby",
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // axios
    //   .get("https://api.ipify.org?format=json")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  });
  return (
    <>
      <Provider store={store}>
        <MAIN />
      </Provider>
    </>
  );
}

export default App;
