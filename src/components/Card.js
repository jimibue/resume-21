import React from "react";

const Card = (props) => {
  return (
    <div style={{ ...styles.container, flex: props.flex }}>
      <h1 style={styles.header}>{props.header}</h1>
      {props.children}
    </div>
  );
};
const styles = {
  header: {
    color: "#444",
  },
  container: {
    margin: "12px",
    padding: "12px",
    borderRadius: "4px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },
};
export default Card;
