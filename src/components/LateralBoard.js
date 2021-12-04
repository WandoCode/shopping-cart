import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";

function LateralBoard(props) {
  const showCartItems = () => {
    return props.items.map((item) => {
      return (
        <div className="lateral-items" key={uniqid()}>
          {item.title}: x{item.quantity}
        </div>
      );
    });
  };

  let navigate = useNavigate();
  const showCartPage = () => {
    navigate("/cart");
  };
  return (
    <div className="lateral-board">
      {showCartItems()}
      {props.items.length !== 0 && (
        <button onClick={showCartPage}>Show details</button>
      )}
    </div>
  );
}

export default LateralBoard;
