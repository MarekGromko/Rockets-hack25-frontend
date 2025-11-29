import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import router from "./router";

const root = document.getElementById("root")!;
root.classList.add("bg-gray-100")
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
