import React from "react";

function Header({ page, setpage }) {
  const updatePage = (newPage) => {
    setpage(newPage);
  };
  return (
    <header>
      <h1>Brendan Kurylo</h1>
      <nav>
        <div
          className={`${page === "about me" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("about me");
          }}
        >
          about me
        </div>
        <div
          className={`${page === "portfolio" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("portfolio");
          }}
        >
          portfolio
        </div>
        <div
          className={`${page === "contact" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("contact");
          }}
        >
          contact
        </div>
        <div
          className={`${page === "resume" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("resume");
          }}
        >
          resume
        </div>
      </nav>
    </header>
  );
}

export default Header;
