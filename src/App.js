import { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [page, setpage] = useState("about me");
  return (
    <div>
      <Header setpage={setpage} page={page} />
      <Content page={page} />
      <Footer />
    </div>
  );
}

export default App;
