import React, { useState } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prop-types
function DataInput({ addData }) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addData({ text, value: parseFloat(value) });
    setText("");
    setValue("");
  };

  return (
    <form onSubmit={submit}>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <label>
        Value:
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

function Diagram({ diagramData }) {
  return (
    <div>
      <h2>Result:</h2>
      {diagramData.map((data, index) => (
        <div
          key={index}
          style={{
            width: "300px",
            height: "20px",
            backgroundColor: "beige",
            margin: "10px 5px",
            borderRadius: "5px",
            display: "block",
          }}
        >
          <div
            style={{
              width: `${data.value}%`,
              height: "100%",
              backgroundColor: "teal",
              borderRadius: "5px",
            }}
          ></div>
          <p>
            {data.text} - {data.value}%
          </p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [chartData, setChartData] = useState([]);

  const data = (newData) => {
    setChartData([...chartData, newData]);
  };

  return (
    <div>
      <h1>HW3 Diagram generator</h1>
      <DataInput addData={data} />
      <Diagram diagramData={chartData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
