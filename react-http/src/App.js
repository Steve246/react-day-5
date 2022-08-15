import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import JsonPlaceHolder from "./features/JsonPlaceaHolder/JsonPlaceHolder";
import Production from "./features/Product/ProductView";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

// const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  // const [posts, setPosts] = useState({});
  // const [isLoading, setLoading] = useState(false);

  // const getPostById = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await client.get("/posts/1");
  //     // ini dia id nomor 1
  //     console.log(response.data);
  //     setPosts(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const createPost = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await client.post("/posts", {
  //       title: "hello world",
  //       body: "ini baru",
  //     });

  //     console.log(response.data);

  //     setPosts(response.data);
  //   } catch (e) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getPostById();
  // }, []);

  return (
    <div>
      {/* <h1> {posts.title} </h1>
      <p> {posts.body} </p>
      <button onClick={createPost}> Create Post </button> */}
      {/* <JsonPlaceHolder /> */}
      <Production />
    </div>
  );
};

export default App;
