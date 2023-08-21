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
  fontSize: "30px",
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
}


function New() {
  return (
    <div style={myStyle}>
      {/* form */}
      <h1>New Pokemon Page</h1>
      <form style={formStyle} action="/pokemon" method="POST">
        Name: <input type="text" name="name"/> <br />
        Image: <input type="text" name="img"/> <br />
        *Requires .jpg format <br />
        *Please delete the .jpg from the end of your image! <br /> <br />
        <input type="submit" value='Create Pokemon'/> <br />
      </form>
      <a href={`/pokemon`} ><br/>Back</a>
    </div>
  );
}

module.exports = New;
