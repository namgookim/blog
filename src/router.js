import { createBrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Post from "./pages/Post";

const router = createBrowserRouter([
  { path: "/", element: <Main></Main> },
  { path: "/:postId", element: <Detail></Detail> },
  { path: "/post", element: <Post></Post> },
]);

export default router;
