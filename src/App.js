import { useEffect, useState } from "react";
import './App.css';
import { getposts } from "./api/apiRoutes.js";
import PostCard from "./components/PostCard.jsx";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getposts().then((posts) =>setData(posts));
  }, []);

  return (
    <div className="App">
      {data ? data.map((e) => <PostCard id={e.id } title={e.title} body={e.body} />):<p>No post found</p>}
    </div>
  );
}

export default App;
