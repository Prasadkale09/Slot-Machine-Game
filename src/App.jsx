import React from "react";
const SlotM = (props) => {
// let x =props.x;
// let y =props.y;
// let z =props.z;
let {x,y,z} =props;
  if ((x === y) &&(x === z)) {
    return (
      <>
        <div className="machine">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
         <>
        <div className="machine">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Not Matching</h1>
          <hr />
        </div>
      </>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className="Heading">
        🎰Welcome to{" "}
        <span style={{ fontSize: "40px", color: "#ffa200" }}>
          Slot Machine Game 🎰
        </span>
      </h1>
      <div className="slot">
      <SlotM x='😍'  y='😍' z='😍'/>
      <SlotM x='😒'  y='😘' z='🤷‍♀️'/>
      <SlotM x='😂'  y='😂' z='😂'/>
      <SlotM x='❤️'  y='👌' z='🥵'/>
      </div>
    </>
  );
};

export default App;
