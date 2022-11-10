function ListCartItem(props) {
  return (
    <>
      <div>
        {props.item.map((item, index) => {
          return (
            <div key={index} id={index} style={{ width: "100%" }}>
              <div style={{ width: "60%", float: "left", margin: "10px 0" }}>
                {item}
              </div>
              <div style={{ width: "20%", float: "left", margin: "10px 0" }}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1"> Mark as done</label>
              </div>
              <div style={{ width: "20%", float: "left", margin: "10px 0" }}>
                <button
                  style={{
                    height: "26px",
                    width: "80px",
                    borderRadius: "5px",
                    float: "left",
                    margin: "0 20px",
                  }}
                  onClick={() => {
                    props.deleteEvent(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ListCartItem;
