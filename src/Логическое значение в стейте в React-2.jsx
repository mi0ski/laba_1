import "./App.css";

function App() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <span>{isBanned ? "забанен" : "не забанен"}</span>
      {isBanned ? (
        <button onClick={() => setIsBanned(false)}>Разбанить</button>
      ) : (
        <button onClick={() => setIsBanned(true)}>Забанить</button>
      )}
    </div>
  );
}

export default App;
