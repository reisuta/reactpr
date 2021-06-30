import React from "react";
import ColorfulMessage from "./components/ColorfulMessages.jsx";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="おげんきですか" />
      <ColorfulMessage color="red" message="gennnki" />
      <p style={contentStyle}>wa-iwa-i</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
