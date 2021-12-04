import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";

function LateralBoard(props) {
  const showCartItems = () => {
    return props.items.map((item) => {
      return (
        <tr className="lateral-items" key={uniqid()}>
          <td>
            {item.title} x{item.quantity}
          </td>
        </tr>
      );
    });
  };

  let navigate = useNavigate();
  const showCartPage = () => {
    navigate("/cart");
  };
  return (
    <div className="lateral-board">
      <table>
        <thead>
          <tr>
            <th>Cart</th>
          </tr>
        </thead>
        <tbody>{showCartItems()}</tbody>
      </table>
      {props.items.length !== 0 && (
        <button onClick={showCartPage}>Show details</button>
      )}
    </div>
  );
}

export default LateralBoard;
