import Todo from "./components/Todo";
import "./App.css";

// function App() {
//   return (
//     <div>
//       <header className='one'><h1>My Todo App</h1></header>
//       <Todo />
//     </div>
//   );
// }
function App() {
  return (
    <>
      <header className="header">My Todo App</header>

      <div className="container">
        <Todo />
      </div>

      <footer className="footer">
        Copyright © 2024 My Todo App
      </footer>
    </>
  );
}

export default App;