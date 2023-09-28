import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("clicked")}>My Button</Button>
      <Button color="secondary" onClick={() => console.log("clicked")}>My Button</Button>
    </div>
  );
}

export default App;
