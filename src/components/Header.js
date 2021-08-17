import React from "react";

function Header({ page, setpage }) {
  const updatePage = (newPage) => {
    setpage(newPage);
  };
  return (
    <header>
      <h1>Brendan</h1>
      <nav>
        <div
          onClick={() => {
            updatePage("about me");
          }}
        >
          about me
        </div>
        <div
          onClick={() => {
            updatePage("portfolio");
          }}
        >
          portfolio
        </div>
        <div
          onClick={() => {
            updatePage("contact");
          }}
        >
          contact
        </div>
        <div
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
