import React, { useState } from "react";

function App() {
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Smith");
  const [age, setAge] = useState(30);

  return (
    <div>
      <span>{name}</span>
      <span>{surname}</span>
      <span>{age}</span>
    </div>
  );
}

export default App;
