import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom";
import "./index.scss";
const Header = lazy(() => import("Home/Header"));
const Footer = lazy(() => import("Home/Footer"));

const App = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
      </Suspense>

      <div className="my-10">Product Details Page Component</div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Footer />
      </Suspense>
    </div>
  );
};

if (
  typeof window !== "undefined" &&
  typeof window.Promise !== "undefined" &&
  typeof window.Promise.all === "function"
) {
  const root = createRoot(document.getElementById("app"));
  root.render(<App />);
} else {
  console.error("Async/await not supported in this environment!");
}
