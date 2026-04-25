import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Marketplace</h1>

      {items.length === 0 ? (
        <p>No items yet...</p>
      ) : (
        items.map(item => (
          <div key={item._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>${item.price}</strong></p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
