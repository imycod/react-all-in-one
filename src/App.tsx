import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisiable, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisiable && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Alert</Button>
    </div>
  );
}

export default App;
