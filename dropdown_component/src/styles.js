const styles = {
  dropdown: {
    position: "relative",
    display: "inline-block",
    fontFamily: "Arial, sans-serif",
    width: "20%",
    marginTop: "5%",
  },
  button: {
    backgroundColor: "purple",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "20px",
    fontSize: "16px",
    width: "100%",
    minWidth: "160px",
  },
  menu: {
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    width: "100%",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
    borderRadius: "5px",
  },
  item: {
    padding: "12px 16px",
    display: "block",
    clear: "both",
    fontWeight: "normal",
    lineHeight: "1.5",
    color: "black",
    textAlign: "left",
    textDecoration: "none",
    whiteSpace: "nowrap",
    borderBottom: "1px solid #ddd",
  },
  itemHover: {
    backgroundColor: "#f1f1f1",
  },
  arrow: {
    marginLeft: "7%",
  },
};

export default styles;
