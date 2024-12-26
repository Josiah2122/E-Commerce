import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
