import "./App.css";

function App() {
  const name = "Caio";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(6, 6)}</p>
      <img src={url} alt="" />
    </div>
  );
}

export default App;
