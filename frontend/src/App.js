import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://test-repo-s8xj.onrender.com")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>React + Node.js Deployment</h1>
      <p>Message from Backend: {message}</p>
    </div>
  );
}

export default App;
