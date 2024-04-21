import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* provider  */}
    <AuthProvider>
      <div className="bg-slate-100">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
