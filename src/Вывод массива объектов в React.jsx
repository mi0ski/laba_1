import './App.css';
function App() {
  const users = [
    { name: "user1", surn: "surn1", age: 30 },
    { name: "user2", surn: "surn2", age: 31 },
    { name: "user3", surn: "surn3", age: 32 },
  ];
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>{user.name} {user.surn} {user.age}</li>
      ))}
    </ul>
  );
}






export default App;