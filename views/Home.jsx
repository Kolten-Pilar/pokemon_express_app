import React from "react";

const myStyle = {
  color: "#fff",
  background: "-moz-linear-gradient(top, #000 0%, #94989B 50%, #000 100%)",
  background: "-webkit-linear-gradient(top, #000 0%, #94989B 50%, #000 100%)",
  background: "linear-gradient(to bottom, #000 0%, #94989B 50%, #000 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  fontSize: "60px"
};

const aStyle = {
  fontSize: "40px",

}

function Home() {
  return (
    <div style={myStyle}>
      <h1>Welcome to the Pokemon App!</h1>
      <a style={aStyle} href="/pokemon">Pokemon</a>
    </div>
  );
}

export default Home;
