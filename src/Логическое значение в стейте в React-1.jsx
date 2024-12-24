import './App.css';
function App() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <span>{isBanned ? "забанен" : "не забанен"}</span>
      <button onClick={() => setIsBanned(true)}>забанить</button>
      <button onClick={() => setIsBanned(false)}>разбанить</button>
    </div>
  );
}




export default App;